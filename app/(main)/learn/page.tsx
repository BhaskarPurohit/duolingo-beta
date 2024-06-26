import Header from "./header";
import FeedWarpper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import UserProgress from "@/components/user-progree";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

export default async function LearnPage(){
    const userProgressData = getUserProgress()
    const [userProgress] = await Promise.all([userProgressData])

    if(!userProgress || !userProgress.activeCourse){
        redirect("/courses")
    }
    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress activeCourse={userProgress.activeCourse} hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={false}/>
            </StickyWrapper>
            <FeedWarpper>
                <Header title={userProgress.activeCourse.title}/>
                
            </FeedWarpper>
        </div>
    )
}