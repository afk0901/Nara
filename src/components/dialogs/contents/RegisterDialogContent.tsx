"use client";

import OutlinedButton from "@/components/OutlinedButt";
import { ChangeEvent, useState } from "react";
import { validEmail } from "@/domain/validators/email-validator";


export default function RegisterDialogContent () {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    //TODO: See if we can make this more clean.
    //TODO: Make the look and feel more Nara like.
    //NOTE: Possibly this all could be a seperate component. 
    const handleContinue = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        
        if(!validEmail(email)) {
            setEmailError(true)
        }
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        if(e.target.value == "" || validEmail(e.target.value)){
            setEmailError(false);
        }
    }

    return (
        <form onSubmit={handleContinue}>
            <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => onEmailChange(e)}
                className="
                w-full
                px-4 py-2.5
                rounded-xl
                bg-[#F5EDE3]
                border border-[#C8B8A8]/60
                text-[var(--foreground-dark)]
                placeholder:text-[#B7A69A]
                font-medium
                focus:ring-2 focus:ring-[#D6C2B1]/50
                focus:outline-none
                transition"
                />
                {emailError && 
                <div className="
                mt-3 px-3 
                py-1.5 
                rounded-md 
                border border-[#C97C7C] 
                bg-[#E8B8B8]/25 
                text-[#7A4343] 
                text-sm
                ">
                Something seems off with the email address.
                </div>
                }
           
            <p className="mt-4 text-sm leading-relaxed text-[var(--foreground-dark)]/90">
                We use your email so you can always get back into your account.
            </p>
            <div className="mt-6">
                <OutlinedButton text={"Continue"} 
                onClick={handleContinue}></OutlinedButton>
            </div>
        </form>
        
    )
}