"use client"

import React, { Suspense } from 'react'
import { Provider } from 'react-redux'

import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'

import Store from '@/Redux/Store'

export default function MasterLayout({ children }) {
    return (
        <Suspense>
            <Provider store={Store}>
                <Navbar />
                {children}
                <Footer />
            </Provider>
        </Suspense>
    )
}
