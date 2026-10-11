"use client"

import React, { useEffect, useState } from 'react'
import TextValidators from '../../Validators/TextValidators'

export default function UpdateProfile({ setSearchParams }) {
  let [data, setData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    phone: ""
  })

  let [errorMessage, setErrorMessage] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  })

  let [show, setShow] = useState(false)

  function getInputData(e) {
    let { name, value } = e.target
    setData({ ...data, [name]: value })
    setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
  }

  // async function postData(e) {
  //   e.preventDefault()
  //   let error = Object.values(errorMessage).find(x => x !== "")
  //   if (error)
  //     setShow(true)
  //   else {
  //     var response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/user`)
  //     response = await response.json()
  //     let item = response.find(x => x.id !== data.id && (x.username.toLocaleLowerCase() === data.username.toLocaleLowerCase() || x.email.toLocaleLowerCase() === data.email.toLocaleLowerCase()))
  //     if (item) {
  //       setShow(true)
  //       setErrorMessage({
  //         ...errorMessage,
  //         username: item.username.toLocaleLowerCase() === data.username.toLocaleLowerCase() ? "Username Already Taken" : "",
  //         email: item.email.toLocaleLowerCase() === data.email.toLocaleLowerCase() ? "Email Address Already Taken" : ""
  //       })
  //       return
  //     }

  //     //Remove Above Line In Case Of Real Backend
  //     var response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/user/${data.id}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json"
  //       },
  //       body: JSON.stringify({ ...data })
  //     })
  //     response = await response.json()
  //     setSearchParams({ option: "Profile" })
  //   }
  // }

  // useEffect(() => {
  //   (async () => {
  //     let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json"
  //       }
  //     })
  //     response = await response.json()
  //     if (response) {
  //       setData({ ...data, ...response })
  //     }
  //     else {
  //       alert("Something Went Wrong!")
  //     }
  //   })()
  // }, [])

  async function postData(e) {
    e.preventDefault()
    // Show validation errors
    let error = Object.values(errorMessage).find(x => x !== "")
    if (error) {
      setShow(true)
      return
    }
    try {
      let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/user`)
      response = await response.json()
      // Check username/email already exists
      let item = response.find(x => x.id !== data.id && (x.username?.toLowerCase() === data.username?.toLowerCase() || x.email?.toLowerCase() === data.email?.toLowerCase()))
      if (item) {
        setShow(true)
        setErrorMessage({
          ...errorMessage,
          username: item.username?.toLowerCase() === data.username?.toLowerCase() ? "Username Already Taken" : "",
          email: item.email?.toLowerCase() === data.email?.toLowerCase() ? "Email Address Already Taken" : ""
        })
        return
      }

      // Update user
      response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/user/${data.id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error("Failed to update profile")
      }
      response = await response.json()
      // IMPORTANT: ProfilePage's changeOption function expects a string, NOT an object.
      setSearchParams("Profile")
    }
    catch (error) {
      console.error("Update Profile Error:", error)
      alert("Something Went Wrong!")
    }
  }

  // Get logged-in user's data
  useEffect(() => {
    async function getUserData() {
      try {
        let userid = localStorage.getItem("userid")
        if (!userid) {
          alert("User not logged in!")
          return
        }
        let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/user/${userid}`, {
          method: "GET",
          headers: {
            "content-type": "application/json"
          }
        })
        if (!response.ok) {
          throw new Error("Failed to fetch user")
        }
        response = await response.json()
        if (response) {
          setData({
            id: response.id || "",
            name: response.name || "",
            username: response.username || "",
            email: response.email || "",
            phone: response.phone || "",
          })
        }
        else {
          alert("Something Went Wrong!")
        }
      }
      catch (error) {
        console.error("Get User Error:", error)
        alert("Something Went Wrong!")
      }
    }
    getUserData()
  }, [])

  return (
    <form onSubmit={postData}>
      <div className="row">

        <div className="col-md-6 mb-3">
          <label>Name*</label>
          <input type="text" name="name" value={data.name} onChange={getInputData} placeholder='Full Name' className={`form-control
                                        ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
          {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
        </div>

        <div className="col-md-6 mb-3">
          <label>Phone Number*</label>
          <input type="text" name="phone" value={data.phone} onChange={getInputData} placeholder='Phone Number' className={`form-control
                                        ${show && errorMessage.phone ? 'border-danger' : 'border-primary'}`} />
          {show && errorMessage.phone ? <p className='text-danger'>{errorMessage.phone}</p> : null}
        </div>

        <div className="col-md-6 mb-3">
          <label>Username*</label>
          <input type="text" name="username" value={data.username} onChange={getInputData} placeholder='Username' className={`form-control
                                        ${show && errorMessage.username ? 'border-danger' : 'border-primary'}`} />
          {show && errorMessage.username ? <p className='text-danger'>{errorMessage.username}</p> : null}
        </div>

        <div className="col-md-6 mb-3">
          <label>Email Address*</label>
          <input type="text" name="email" value={data.email} onChange={getInputData} placeholder='Email Address' className={`form-control
                                       ${show && errorMessage.email ? 'border-danger' : 'border-primary'}`} />
          {show && errorMessage.email ? <p className='text-danger'>{errorMessage.email}</p> : null}
        </div>

        <div className="col-12">
          <button type="submit" className='btn btn-primary w-100'>Update</button>
        </div>

      </div>
    </form>
  )

}