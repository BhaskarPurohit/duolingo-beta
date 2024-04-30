"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer(){
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justfiy-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="hr.svg" alt="Croatian" height={32} width={40} 
                     className="mr-4 rounded-md"/>
                </Button>
            </div>
        </footer>
    )
}