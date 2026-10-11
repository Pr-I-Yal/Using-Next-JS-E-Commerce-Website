"use client"
// import AdminSubcategoryPage from '@/PageComponents/Admin/Subcategory/AdminSubcategoryPage'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminSeoDataPage = dynamic(() => import("@/PageComponents/Admin/SeoData/AdminSeoDataPage"), { ssr: false })
export default function page() {
    return (
        <div>
            <AdminSeoDataPage />
        </div>
    )
}
