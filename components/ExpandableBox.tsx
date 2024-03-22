import cn from "@/utils/cn";

interface ExpandableBoxProps {
  id: string;
  title: string;
  summary?: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

const ExpandableBox: React.FC<ExpandableBoxProps> = ({
  id,
  title,
  summary,
  isExpanded,
  onToggle,
}) => {
  const handleTouchEnd = (event: React.TouchEvent) => {
    event.preventDefault();
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
      onTouchEnd={handleTouchEnd}
      role="button"
      tabIndex={0}
      aria-pressed={isExpanded}
      onKeyDown={(e) => e.key === "Enter" && onToggle(id)}>
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
};

export default ExpandableBox;
