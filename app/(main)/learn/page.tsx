import Header from "./header";
import FeedWarpper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import UserProgress from "@/components/user-progree";

export default function LearnPage(){
    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress activeCourse={{title:"Spanish", imgSrc:"es.svg"}} hearts={5} points={100} hasActiveSubscription={false}/>
            </StickyWrapper>
            <FeedWarpper>
                <Header title="Spanish"/>
            </FeedWarpper>
        </div>
    )
}