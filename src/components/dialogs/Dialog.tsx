"use client";

import { useContext } from 'react';
import { DialogContext} from '@/contexts/dialog-context';

export default function Dialog() {
  const { Content, title } = useContext(DialogContext);

  return (
    <div className="flex justify-center pt-10 bg-[var(--background)]">
      <div className="rounded-2xl p-8 pb-1 shadow-lg bg-[#F8E8E5] 
                      border border-[rgba(0,0,0,0.08)] max-w-sm opacity-0 animate-fadeIn">
        {title && (
          <h2 className="text-center text-xl font-semibold mb-6 text-[var(--foreground-dark)]">
            {title}
          </h2>
        )}
        <div className="text-center text-[var(--foreground-dark)] mb-6">
          <Content />
        </div>
      </div>
    </div>
  );
}