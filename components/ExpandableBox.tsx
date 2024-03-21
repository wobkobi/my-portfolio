import cn from "@/utils/cn";

interface ExpandableBoxProps {
  id: string;
  title: string;
  summary?: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

export default function ExpandableBox({
  id,
  title,
  summary,
  isExpanded,
  onToggle,
}: ExpandableBoxProps) {
  const handleToggle = () => {
    onToggle(id);
  };
  return (
    <div
      className={cn(
        "m-2 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded p-4 shadow-lg transition-all duration-300",
        "dark:bg-jet-400",
        isExpanded ? "ring-2 ring-caribbean_current" : "",
        "bg-white"
      )}
      onClick={() => onToggle(id)}
      onTouchEnd={handleToggle}
      role="button"
      tabIndex={0}
      aria-pressed={isExpanded}>
      <h2
        className={cn(
          "text-center text-lg font-bold",
          "text-indigo_dye dark:text-caribbean_current",
          summary ? "" : "my-auto"
        )}>
        {title}
      </h2>
      {summary && (
        <p
          className={cn(
            "mt-2 text-center text-sm",
            "text-gray-600 dark:text-platinum"
          )}>
          {summary}
        </p>
      )}
    </div>
  );
}
