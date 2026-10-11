"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"

export default function Navbar() {
    let [settingData, setSettingData] = useState({
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        map1: process.env.NEXT_PUBLIC_MAP1,
        address: process.env.NEXT_PUBLIC_ADDRESS,
        email: process.env.NEXT_PUBLIC_EMAIL,
        phone: process.env.NEXT_PUBLIC_PHONE,
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP,
        facebook: process.env.NEXT_PUBLIC_FACEBOOK,
        twitter: process.env.NEXT_PUBLIC_TWITTER,
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
        youtube: process.env.NEXT_PUBLIC_YOUTUBE,
        instagram: process.env.NEXT_PUBLIC_INSTAGRAM,
    })

    // Login state
    let [isLoggedIn, setIsLoggedIn] = useState(false)
    let [userName, setUserName] = useState("")
    let [userRole, setUserRole] = useState("")

    let SettingStateData = useSelector(state => state.SettingStateData)

    let dispatch = useDispatch()
    let navigate = useRouter()

    function logout() {
        localStorage.clear()

        setIsLoggedIn(false)
        setUserName("")
        setUserRole("")

        navigate.push("/login")
    }

    useEffect(() => {
        dispatch(getSetting())
    }, [dispatch])

    useEffect(() => {
        if (SettingStateData.length) {
            let item = {}
            Object.keys(settingData).forEach(key => {
                item[key] = SettingStateData[0][key] ? SettingStateData[0][key] : settingData[key]
            })
            setSettingData({ ...item })
        }
    }, [SettingStateData])

    useEffect(() => {
        let login = localStorage.getItem("login")
        let name = localStorage.getItem("name")
        let role = localStorage.getItem("role")

        if (login) {
            setIsLoggedIn(true)
            setUserName(name || "")
            setUserRole(role || "")
        }
        else {
            setIsLoggedIn(false)
            setUserName("")
            setUserRole("")
        }
    }, [])

    return (
        <>
            <div className='bg-dark'>
                <div className="container">
                    <div className="row p-2">
                        <div className="col-lg-9 col-6">
                            <Link href={settingData.map1 || "#"} target='_blank' className='btn'><i className='bi bi-geo-alt text-light me-1' /><span className='d-none d-xl-inline-block text-light'>{settingData.address}</span></Link>
                            <Link href={`mailto:${settingData.email}`} target='_blank' className='btn'><i className='bi bi-envelope text-light me-1' /><span className='d-none d-xl-inline-block text-light'>{settingData.email}</span></Link>
                            <Link href={`tel:${settingData.phone}`} target='_blank' className='btn'><i className='bi bi-telephone text-light me-1' /><span className='d-none d-xl-inline-block text-light'>{settingData.phone}</span></Link>
                            <Link href={`https://wa.me/${settingData.whatsapp}`} target='_blank' className='btn'><i className='bi bi-whatsapp text-light me-1' /><span className='d-none d-xl-inline-block text-light'>{settingData.whatsapp}</span></Link>
                        </div>
                        <div className="col-lg-3 col-6">
                            <Link href={settingData.facebook || "#"} target='_blank' className='btn'><i className='bi bi-facebook text-light' /></Link>
                            <Link href={settingData.twitter || "#"} target='_blank' className='btn'><i className='bi bi-twitter text-light' /></Link>
                            <Link href={settingData.linkedin || "#"} target='_blank' className='btn'><i className='bi bi-linkedin text-light' /></Link>
                            <Link href={settingData.youtube || "#"} target='_blank' className='btn'><i className='bi bi-youtube text-light' /></Link>
                            <Link href={settingData.instagram || "#"} target='_blank' className='btn'><i className='bi bi-instagram text-light' /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid sticky-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light border-bottom border-2 border-white">
                        <Link href="/" className="navbar-brand">
                            <h1>{settingData.siteName}</h1>
                        </Link>
                        <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <Link href="/" className="nav-item nav-link ">Home</Link>
                                <Link href="/about" className="nav-item nav-link ">About</Link>
                                <Link href="/shop" className="nav-item nav-link ">Shop</Link>
                                <Link href="/Feature" className="nav-item nav-link ">Feature</Link>
                                <Link href="/faq" className="nav-item nav-link ">Faq</Link>
                                <Link href="/testimonial" className="nav-item nav-link ">Testimonial</Link>
                                <Link href="/contactus" className="nav-item nav-link ">Contact Us</Link>

                                {isLoggedIn ? (
                                    <div className="nav-item dropdown">
                                        <Link href="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{userName}</Link>
                                        <div className="dropdown-menu bg-light mt-2">
                                            <Link href="/profile?option=Profile" className="dropdown-item">Profile</Link>
                                            {userRole !== "Buyer" ? <Link href="/admin" className="dropdown-item">Admin Dashboard</Link> : null}
                                            <Link href="/profile?option=Wishlist" className="dropdown-item">Wishlist</Link>
                                            <Link href="/profile?option=Orders" className="dropdown-item">Orders</Link>
                                            <Link href="/profile?option=Address" className="dropdown-item">Address</Link>
                                            <Link href="/cart" className="dropdown-item">Cart</Link>
                                            <Link href="/checkout" className="dropdown-item">Checkout</Link>
                                            <button className="dropdown-item" onClick={logout}>Log Out</button>
                                        </div>
                                    </div>) : (
                                    <Link href="/login" className="nav-item nav-link ">Login</Link>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
