"use client"
import { Button } from "@/components/ui/button";
import { SignIn, SignInButton, SignedIn, UserButton } from "@clerk/clerk-react";
import { ClerkLoaded, ClerkLoading, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";


export default function Header(){
    return(
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between ">
                <div className="pt-8 pl-4 pb-7 flex  items-center gap-x-3">
                    <Image src='mascot.svg' height='40' width='40' alt="mascot-icon"/>
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lingo</h1>
                </div>
                <ClerkLoading>
                    <Loader className="h--5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                            <Button variant="ghost" size="lg">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    
                </ClerkLoaded>
            </div>
        </header>
    )
}