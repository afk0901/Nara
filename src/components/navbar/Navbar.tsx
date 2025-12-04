"use client";

import Logo from "./Logo";
import OutlinedButton from "../OutlinedButt";
import { useContext } from "react";
import { DialogContext } from "@/contexts/dialog-context";
import LoginDialogContent from "../dialogs/contents/LoginDialogContent";
import RegisterDialogContent from "../dialogs/contents/RegisterDialogContent";

export default function Navbar() {
  const { openDialog } = useContext(DialogContext);

  return (
    <nav className="flex justify-between px-8 py-4">
      <div className="flex">
        <Logo></Logo>
      </div>
      <div className="flex gap-4">
        <OutlinedButton
          text="Login"
          onClick={() => openDialog(LoginDialogContent, "Log in")}
        ></OutlinedButton>
        <OutlinedButton text="Join" 
        onClick={() => 
        openDialog(RegisterDialogContent, "Your email address")}>
        </OutlinedButton>
      </div>
    </nav>
  );
}