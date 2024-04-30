import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"

import { Sidebar } from "lucide-react"
import { Menu } from "lucide-react"


export default function MobileSideBar(){
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white"/>
            </SheetTrigger>
            <SheetContent className="p-0 z-[100] side-left"
            >
                <Sidebar/>
            </SheetContent>
        </Sheet>
    )
}