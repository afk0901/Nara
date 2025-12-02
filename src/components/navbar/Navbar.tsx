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
          text="Log in"
          onClick={() => openDialog(LoginDialogContent, "Log in")}
        ></OutlinedButton>
        <OutlinedButton text="Register" onClick={() => openDialog(RegisterDialogContent, "Enter your email")}></OutlinedButton>
      </div>
    </nav>
  );
}
