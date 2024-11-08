import { AppShellBar } from "@/app/components/AppShellBar";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { ReactNode } from "react";

import "@ui5/webcomponents-react/dist/Assets.js";

interface AppShellProps {
  children?: ReactNode | ReactNode[];
}

export function AppShell({ children }: AppShellProps) {
  return (
    <ThemeProvider staticCssInjected>
      <AppShellBar />
      <div className="appScrollContainer">{children}</div>
    </ThemeProvider>
  );
}
