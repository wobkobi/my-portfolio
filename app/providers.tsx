import { ProvidersProps } from "@/types/Types";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
