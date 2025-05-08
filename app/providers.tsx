/**
 * @file providers.tsx
 * @description
 * Wraps the application with theme context, enabling light/dark mode support
 * based on system preference or user selection.
 */

import { ProvidersProps } from "@/types/Types";
import { ThemeProvider } from "next-themes";
import { JSX } from "react";

/**
 * Providers component.
 *
 * Applies global context providers such as ThemeProvider.
 *
 * @param {ProvidersProps} props - The child components to wrap.
 * @param {React.ReactNode} props.children - Nested application elements.
 * @returns {JSX.Element} The themed application wrapper.
 */
function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

export default Providers;
