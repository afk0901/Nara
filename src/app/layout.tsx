import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import { Nunito } from 'next/font/google'
import ToggleAbleDialog from "../components/dialogs/ToggleableButtonDialog";
import { DialogProvider } from "@/contexts/dialog-context";

const generalFontType = Nunito({})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={generalFontType.className}>
      <body>
        <DialogProvider>
          <Navbar></Navbar>
          <ToggleAbleDialog></ToggleAbleDialog>
        </DialogProvider>
        {children}
      </body>
    </html>
  );
}