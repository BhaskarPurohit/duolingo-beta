import { Button } from "@/components/ui/button";

export default function ButtonsPage(){
    return(
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button>Default</Button>
            <Button variant='primary'>Primary</Button>
            <Button variant='primaryOutline'>Primary Outline</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='secondaryOutline'>Secondary Outline</Button>
            <Button variant='danger'>Danger</Button>
            <Button variant='dangerOutline'>Danger Outline</Button>
            <Button variant='super'>Super</Button>
            <Button variant='superOutline'>Super Outline</Button>
            <Button variant='ghost'>ghost</Button>
            <Button variant='sidebar'>sidebar</Button>
            <Button variant='sidebarOutline'>sidebar outline</Button>
            
        </div>
    )
}