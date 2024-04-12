import { ProvidersProps } from "@/types/BoxTypes";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
