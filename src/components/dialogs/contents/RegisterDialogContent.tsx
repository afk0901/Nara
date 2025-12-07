"use client";

import OutlinedButton from "@/components/OutlinedButt";
import { ChangeEvent, useState } from "react";
import { validEmail } from "@/domain/validators/email-validator";
import Input from "@/components/inputs/TextInput";


export default function RegisterDialogContent () {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    
    const handleContinue = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        
        if(!validEmail(email)) {
            setEmailError(true)
        }
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            setEmail(e.target.value)
            setEmailError(false)
            
            if(!validEmail(e.target.value)) {
                setEmailError(true)
            }
    }

    return (
        <form onSubmit={handleContinue}>
            <Input
            placeholder="Email address"
            onChange={(e) => onEmailChange(e)}
            value={email}
            valid={!emailError}
            />
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