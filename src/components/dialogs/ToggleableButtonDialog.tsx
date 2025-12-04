"use client";

import { useContext } from "react";
import Dialog from "./Dialog"
import { DialogContext } from "@/contexts/dialog-context";

export default function ToggleAbleDialog()
{
    const { isOpen } = useContext(DialogContext);

    return (
    <>
    {isOpen && 
    <Dialog></Dialog>}
    </>)
}