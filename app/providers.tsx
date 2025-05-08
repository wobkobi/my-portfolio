import { ProvidersProps } from "@/types/Types";
import { ThemeProvider } from "next-themes";
import { JSX } from "react";

function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

export default Providers;
