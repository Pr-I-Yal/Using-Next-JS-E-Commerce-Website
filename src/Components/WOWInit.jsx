"use client"

import { useEffect } from "react"

export default function WOWInit() {
    useEffect(() => {
        let wowInstance

        const initializeWOW = async () => {
            const WOW = (await import("wowjs")).default

            wowInstance = new WOW.WOW({ live: false })
            wowInstance.init()
        }

        initializeWOW()

        return () => {
            if (wowInstance) {
                wowInstance.stop()
            }
        }
    }, [])

    return null
}