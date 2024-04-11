import { ProvidersProps } from "@/types/boxTypes";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
