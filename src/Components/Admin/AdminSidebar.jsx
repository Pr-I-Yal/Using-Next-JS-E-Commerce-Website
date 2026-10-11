"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export default function AdminSidebar() {
    // Initial value is the same on server and client
    const [role, setRole] = useState("")

    // Read localStorage only after component mounts in browser
    useEffect(() => {
        const userRole = localStorage.getItem("role")
        setRole(userRole || "")
    }, [])

    return (
        <>
            <div className="list-group">
                <Link href="/admin" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-house fs-5'></i><span className='float-end'>Home</span>
                </Link>
                <Link href="/admin/maincategory" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-list fs-5'></i><span className='float-end'>Maincategory</span>
                </Link>
                <Link href="/admin/subcategory" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-list-ul fs-5'></i><span className='float-end'>Subcategory</span>
                </Link>
                <Link href="/admin/brand" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-tag fs-5'></i><span className='float-end'>Brand</span>
                </Link>
                <Link href="/admin/product" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-list-check fs-5'></i><span className='float-end'>Product</span>
                </Link>
                <Link href="/admin/feature" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-check-circle fs-5'></i><span className='float-end'>Feature</span>
                </Link>
                <Link href="/admin/faq" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-question-circle fs-5'></i><span className='float-end'>FAQ</span>
                </Link>
                <Link href="/admin/setting" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-gear fs-5'></i><span className='float-end'>Setting</span>
                </Link>
                <Link href="/admin/newsletter" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-envelope fs-5'></i><span className='float-end'>Newsletter</span>
                </Link>
                <Link href="/admin/contactus" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-telephone fs-5'></i><span className='float-end'>Contact Us</span>
                </Link>
                <Link href="/admin/checkout" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-cart-check fs-5'></i><span className='float-end'>Checkout</span>
                </Link>
                {role === "Super Admin" ? (
                    <Link href="/admin/user" className="list-group-item list-group-item-action active mb-1">
                        <i className='bi bi-people fs-5'></i><span className='float-end'>User</span>
                    </Link>
                ) : null}
                <Link href="/admin/seoData" className="list-group-item list-group-item-action active mb-1">
                    <i className='bi bi-graph-up-arrow fs-5'></i><span className='float-end'>Seo Data</span>
                </Link>
            </div>
        </>
    )
}
