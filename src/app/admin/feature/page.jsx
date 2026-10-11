"use client"
// import AdminSubcategoryPage from '@/PageComponents/Admin/Subcategory/AdminSubcategoryPage'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminFeaturePage = dynamic(() => import("@/PageComponents/Admin/Feature/AdminFeaturePage"), { ssr: false })
export default function page() {
    return (
        <div>
            <AdminFeaturePage />
        </div>
    )
}
