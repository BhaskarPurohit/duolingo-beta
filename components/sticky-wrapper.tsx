type Props = {
    children: React.ReactNode
}

export default function StickyWrapper({children}:Props){
    return(
        <div className="hidden lg:block w-[360px] sticky  self-end bottom-6">
            <div className="mid-h-[calc(100vh-48px)] sticky top- 6flex flex-col gap-y-4">{children}</div>
        </div>
    )
}