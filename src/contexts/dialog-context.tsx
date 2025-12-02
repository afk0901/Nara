"use client";

import React, { createContext,  useState, ReactNode} from "react";

const EmptyComp : React.FC = () => <></>

type ContentComp = React.ComponentType;

type DialogContextType = {
    isOpen: boolean;
    openDialog: (contentCompType: ContentComp, title: string) => void;
    closeDialog: () => void;
    Content: ContentComp;
    title: string;
}

export const DialogContext = createContext<DialogContextType>({
    isOpen: false,
    openDialog: () => {},
    closeDialog: () => {},
    Content: EmptyComp,
    title: ""
});

export function DialogProvider({ children} : {children: ReactNode}) {
    const [isOpen, setIsOpen] = useState(false);
    const [Content, setContent] = useState<ContentComp>(EmptyComp)
    const [title, setTitle] = useState("Untitled");

    const openDialog = (contentComponentType : ContentComp, title: string) => {
        setContent(() => contentComponentType);
        setTitle(title)
        setIsOpen(true) 
    };
    const closeDialog = () => setIsOpen(false);

    return (
        <DialogContext.Provider value={{isOpen, openDialog, closeDialog, Content, title}}>
            {children}
        </DialogContext.Provider>
    )
}