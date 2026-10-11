"use client"
// import AdminSubcategoryPage from '@/PageComponents/Admin/Subcategory/AdminSubcategoryPage'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminNewsletterPage = dynamic(() => import("@/PageComponents/Admin/Newsletter/AdminNewsletterPage"), { ssr: false })
export default function page() {
    return (
        <div>
            <AdminNewsletterPage />
        </div>
    )
}
