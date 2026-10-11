"use client"
// import AdminSubcategoryPage from '@/PageComponents/Admin/Subcategory/AdminSubcategoryPage'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminFaqPage = dynamic(() => import("@/PageComponents/Admin/Faq/AdminFaqPage"), { ssr: false })
export default function page() {
    return (
        <div>
            <AdminFaqPage />
        </div>
    )
}
