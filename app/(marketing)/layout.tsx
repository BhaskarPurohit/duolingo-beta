"use client"

import Footer from "./footer"
import Header from "./header"

type Props = {
    children: React.ReactNode
}
export default function MarketingLayout({children}:Props){
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}