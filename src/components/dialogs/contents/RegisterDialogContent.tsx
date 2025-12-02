"use client";

import OutlinedButton from "@/components/OutlinedButt";
import { ChangeEvent, useState } from "react";
import { validEmail } from "@/domain/validators/email-validator";


export default function RegisterDialogContent () {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    //TODO: See if we can make this more clean.
    //TODO: Standard CSS on a button, like a custom CSS Tailwind class
    //TODO: Make the look and feel more Nara like.
    //NOTE: Possibly this all could be a seperate component. 
    const handleContinue = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        
        if(!validEmail(email)) {
            setEmailError("Oops...your email seems a bit off. Please check it out.")
        }
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        if(e.target.value == "" || validEmail(e.target.value)){
            setEmailError("");
        }
    }

    return (
        <form onSubmit={handleContinue}>
            <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => onEmailChange(e)}
                />
                <p>{emailError}</p>
            <p>We use your email to help you recover access 
            to your account shall it be lost.</p>
            <OutlinedButton text={"Continue"} 
            onClick={handleContinue}></OutlinedButton>
        </form>
        
    )
}