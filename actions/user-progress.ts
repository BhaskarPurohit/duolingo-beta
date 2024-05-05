"use server"

import { getCourseById, getUserProgress } from "@/db/queries"
import { userProgress } from "@/db/schema"
import { currentUser, auth } from "@clerk/nextjs/server"
import db from "@/db/drizzle"

export const upsertUserProgress = async(courseId: number)=>{
    const {userId} = await auth()
    const user = await currentUser()

    if(!userId || !user){
        throw new Error("Unauthorized")
    }

    const course = await getCourseById(courseId)

    if(!course){
        throw new Error("course not found")
    }

    const existingUserProgress = await getUserProgress()

    if(existingUserProgress){
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/mascot.svg"

        })

    }

}