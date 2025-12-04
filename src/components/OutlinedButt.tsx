"use client";
import React from "react";

type ButtonProps = {
    text: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function OutlinedButton({text, onClick}: ButtonProps){
    return (
    <button className="
    px-6 py-2 
    rounded-2xl 
    bg-[#D9C7A7] 
    text-[#5A4334] 
    border 
    border-[#5A4334]/40 
    shadow-[0_4px_10px_rgba(0,0,0,0.12)]
    hover:bg-[#E2D3BB] 
    transition-colors
    active:translate-y-[1px] 
    active:shadow-[0_2px_4px_rgba(0,0,0,0.15)]
    text-[#5A4334] font-medium tracking-[0.02em]
    
    "
    onClick={onClick}
    >
        {text}
    </button>
    )
}