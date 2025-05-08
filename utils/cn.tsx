import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

function cn(...inputs: ClassNameValue[]): string {
  return twMerge(clsx(inputs));
}

export default cn;
