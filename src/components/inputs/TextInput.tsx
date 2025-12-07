import { ChangeEvent, useState } from "react";
import { ValidationError } from "@/components/inputs/ValidationError";

type InputProps = {
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string,
    valid: boolean
}

export default function TextInput({placeholder, onChange, value, valid} : InputProps) {
    const [touched, setTouched] = useState(false);

    return (
        <>
         <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={() => setTouched(true)}
            onFocus={() => setTouched(!valid)}
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
            {!valid && touched && <ValidationError
            errorMessage="Something seems off with the email address."
            />}
            </>
    )
}