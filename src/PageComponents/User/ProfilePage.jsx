"use client"

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import Breadcrum from '../../Components/BreadCrum'

import Profile from '../../Components/User/Profile'
import UpdateProfile from '../../Components/User/UpdateProfile'
import Wishlist from '../../Components/User/Wishlist'
import Orders from '../../Components/User/Orders'
import Address from '../../Components/User/Address'

export default function ProfilePage() {
    let [option, setOption] = useState("Profile")
    let searchParams = useSearchParams()

    const router = useRouter()

    useEffect(() => {
        (() => {
            setOption(searchParams.get("option") || "Profile")
        })()
    }, [searchParams])

    const changeOption = (newOption) => {
        router.push(`/profile?option=${encodeURIComponent(newOption)}`)
    }

    return (
        <>
            <Breadcrum title="Your Profile" />

            <div className="container my-3">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-group">
                            <li className={`list-group-item ${option === "Profile" ? 'active' : ''}`} onClick={() => changeOption("Profile")}>Profile</li>
                            <li className={`list-group-item ${option === "Update Profile" ? 'active' : ''}`} onClick={() => changeOption("Update Profile")}>Update Profile</li>
                            <li className={`list-group-item ${option === "Wishlist" ? 'active' : ''}`} onClick={() => changeOption("Wishlist")}>Wishlist</li>
                            <li className={`list-group-item ${option === "Orders" ? 'active' : ''}`} onClick={() => changeOption("Orders")}>Orders</li>
                            <li className={`list-group-item ${option === "Address" ? 'active' : ''}`} onClick={() => changeOption("Address")}>Address</li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center p-2 text-light'>{option}</h5>
                        <div className={option === "Profile" ? 'd-block' : 'd-none'}><Profile option={option} /></div>
                        <div className={option === "Update Profile" ? 'd-block' : 'd-none'}><UpdateProfile setSearchParams={changeOption} /></div>
                        <div className={option === "Wishlist" ? 'd-block' : 'd-none'}><Wishlist /></div>
                        <div className={option === "Orders" ? 'd-block' : 'd-none'}><Orders /></div>
                        <div className={option === "Address" ? 'd-block' : 'd-none'}><Address /></div>
                    </div>
                </div>
            </div>

        </>
    )
}