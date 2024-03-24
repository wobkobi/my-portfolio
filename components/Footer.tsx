import cn from "@/utils/cn";
import { FiGithub, FiGlobe, FiLinkedin } from "react-icons/fi";

const iconSize = "w-6 h-6 sm:w-8 sm:h-8";

export default function Footer() {
  return (
    <footer
      className={cn(
        "flex justify-center  gap-2 bg-platinum-900 p-4 dark:bg-jet-400 sm:gap-4 md:gap-6 lg:gap-8"
      )}>
      <a
        href="https://harrisonraynes.com"
        className={cn(
          "text-indigo_dye hover:text-caribbean_current dark:text-platinum dark:hover:text-caribbean_current "
        )}
        title="My Website">
        <FiGlobe className={cn("h-6 w-6 sm:h-8 sm:w-8")} />
      </a>
      <a
        href="https://github.com/wobkobi"
        className={cn(
          "text-indigo_dye hover:text-caribbean_current dark:text-platinum dark:hover:text-caribbean_current "
        )}
        title="GitHub">
        <FiGithub className={cn("h-6 w-6 sm:h-8 sm:w-8")} />
      </a>
      <a
        href="https://linkedin.com/in/harrisonraynes"
        className={cn(
          "text-indigo_dye hover:text-caribbean_current dark:text-platinum dark:hover:text-caribbean_current "
        )}
        title="LinkedIn">
        <FiLinkedin className={cn("h-6 w-6 sm:h-8 sm:w-8")} />
      </a>
    </footer>
  );
}
