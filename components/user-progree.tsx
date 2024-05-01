type Props = {
    activeCourse: any   //TODO: replace with database type
    hearts: number
    points: number
    hasActiveSubscription: boolean
}

export default function UserProgress({activeCourse, hearts, points, hasActiveSubscription}: Props){
    return(
        <div>
            {points} {hearts} {activeCourse} {hasActiveSubscription}
        </div>
    )
}