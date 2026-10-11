"use client"
// import AdminSubcategoryPage from '@/PageComponents/Admin/Subcategory/AdminSubcategoryPage'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminBrandPage = dynamic(() => import("@/PageComponents/Admin/Brand/AdminBrandPage"), { ssr: false })
export default function page() {
    return (
        <div>
            <AdminBrandPage />
        </div>
    )
}
