"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
    label: string
    iconSrc: string
    href: string
}
export default function SideBarItem({label, iconSrc, href}:Props){
    const pathname = usePathname()
    const active = pathname === href 
    return(
        <Button variant={active ? "sidebarOutline":"sidebar"}
        className="justfiy-start h-[52px]">
          <Link href={href}>
            <Image src={iconSrc} alt={label} className="m-r-5 " height={32} width={32}/>
           {label}
          </Link>
        </Button>
    )
}