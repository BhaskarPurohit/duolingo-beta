import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { InfinityIcon } from "lucide-react"
import { courses } from "@/db/schema"

type Props = {
    activeCourse: typeof courses.$inferSelect  //TODO: replace with database type
    hearts: number
    points: number
    hasActiveSubscription: boolean
}

export default function UserProgress({activeCourse, hearts, points, hasActiveSubscription}: Props){
    return(
        <div className="flex items-center justify-between w-full gap-x-2">
            <Link href="/courses">
             <Button>
                <Image src={activeCourse.imgSrc} alt={activeCourse.title} className="rounded-md border" width={32} height={32}/>
             </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="points.svg" height={28} width={28} alt="Points" className="mr-2"/>
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image src="heart.svg" height={28} width={28} alt="Hearts" className="mr-2"/>
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]"/> : hearts}
                </Button>
            </Link>
        </div>
    )
}