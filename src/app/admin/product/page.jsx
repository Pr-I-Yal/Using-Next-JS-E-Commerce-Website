"use client"
// import AdminSubcategoryPage from '@/PageComponents/Admin/Subcategory/AdminSubcategoryPage'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminProductPage = dynamic(() => import("@/PageComponents/Admin/Product/AdminProductPage"), { ssr: false })
export default function page() {
    return (
        <div>
            <AdminProductPage />
        </div>
    )
}
