"use client";

import cn from "@/utils/cn";
import { JSX } from "react";

interface EmailModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export default function EmailModal({
  isOpen,
  message,
  onClose,
}: EmailModalProps): JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        // lighter overlay, add optional blur
        "fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
      )}>
      <div
        className={cn(
          "dark:bg-jet mx-auto max-w-md rounded-lg bg-white p-5 shadow-sm"
        )}>
        <p className={cn("text-jet dark:text-platinum mb-6 text-center")}>
          {message}
        </p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className={cn(
              "bg-indigo_dye hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye rounded-sm px-4 py-2 font-medium text-white transition duration-300 ease-in-out"
            )}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
