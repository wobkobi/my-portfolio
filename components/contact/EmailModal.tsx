/**
 * @file EmailModal.tsx
 * @description
 * Modal dialog component to display confirmation or error messages after
 * submitting the contact form. Renders an overlay and a centred message box
 * with a close button.
 */

"use client";

import { EmailModalProps } from "@/types/Types";
import cn from "@/utils/cn";
import { JSX } from "react";

/**
 * EmailModal component.
 * @param props - Component properties.
 * @param props.isOpen - Whether the modal is visible.
 * @param props.message - The message text to display.
 * @param props.onClose - Handler to call when closing the modal.
 * @returns The modal overlay and content, or null if closed.
 */
function EmailModal({
  isOpen,
  message,
  onClose,
}: EmailModalProps): JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
      )}
      onClick={onClose}>
      <div
        className={cn(
          "dark:bg-jet mx-auto max-w-md rounded-lg bg-white p-5 shadow-sm"
        )}
        onClick={(e) => e.stopPropagation()}>
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

export default EmailModal;
