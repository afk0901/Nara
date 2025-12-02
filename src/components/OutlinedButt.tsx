"use client";
import React from "react";

type ButtonProps = {
    text: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function OutlinedButton({text, onClick}: ButtonProps){
    return (
    <button className="
    border border-[#222] 
    rounded-md 
    px-4 py-1 
    text-sm 
    font-medium 
    hover:bg-[#222] 
    hover:text-[#F5EFE3] 
    transition"
    onClick={onClick}
    >
        {text}
    </button>
    )
}