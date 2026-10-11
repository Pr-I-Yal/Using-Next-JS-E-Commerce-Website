"use client"
// import AdminSubcategoryPage from '@/PageComponents/Admin/Subcategory/AdminSubcategoryPage'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminContactUsPage = dynamic(() => import("@/PageComponents/Admin/ContactUs/AdminContactUsPage"), { ssr: false })
export default function page() {
    return (
        <div>
            <AdminContactUsPage />
        </div>
    )
}
