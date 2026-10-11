"use client"
import dynamic from 'next/dynamic'
// import AdminMaincategoryPage from '@/PageComponents/Admin/Maincategory/AdminMaincategoryPage'
import React from 'react'

const AdminMaincategoryPage = dynamic(() => import("@/PageComponents/Admin/Maincategory/AdminMaincategoryPage"), { ssr: false })
export default function page() {
    return (
        <div>
            <AdminMaincategoryPage />
        </div>
    )
}
