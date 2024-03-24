import cn from "@/utils/cn";

export default function EmailModal({
  isOpen,
  message,
  onClose,
}: {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 "
      )}>
      <div
        className={cn(
          "mx-auto max-w-md rounded-lg bg-white p-5 shadow dark:bg-jet"
        )}>
        <p className={cn("mb-6 text-center text-jet dark:text-platinum")}>
          {message}
        </p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className={cn(
              "rounded bg-indigo_dye px-4 py-2 font-medium text-white transition duration-300 ease-in-out hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye"
            )}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
