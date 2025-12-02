"use client";

import React from 'react';
import { useContext } from 'react';
import { DialogContext} from '@/contexts/dialog-context';

// Dialog with a button
export default function Dialog() {
  const { closeDialog, Content, title } = useContext(DialogContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--background)]">
      <div className="rounded-2xl p-8 shadow-lg bg-[#F8E8E5] 
                      border border-[rgba(0,0,0,0.08)] max-w-sm w-full">
        {title && (
          <h2 className="text-center text-xl font-semibold mb-6 text-[var(--foreground-dark)]">
            {title}
          </h2>
        )}

        <div className="text-center text-[var(--foreground-dark)] mb-6">
          <Content />
        </div>

        {<button
          onClick={closeDialog}
          className="w-full py-3 rounded-xl bg-[#D8C4A6] 
          text-[var(--foreground-dark)] 
          font-medium shadow-sm active:scale-[0.98] transition">
          Close
        </button>}
      </div>
    </div>
  );
}
