import { ArNext } from "arnext";

// styles
import { Inter, Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/";
import { WalletProvider } from "@/providers/wallet-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export default function App(props) {
  return (
    <main className={`${inter.variable} ${workSans.variable}`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <WalletProvider>
          <TooltipProvider>
            <SidebarProvider>
              <AppSidebar />
              <ArNext {...props}>{props.children}</ArNext>
            </SidebarProvider>
          </TooltipProvider>
        </WalletProvider>
      </ThemeProvider>
    </main>
  );
}
