import React from "react";
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Home from "./page";

// const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'OrderTracker',
    description: 'Application to track your order',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        {children}
        </html>
    )
}
