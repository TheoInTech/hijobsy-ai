import { ArNext } from "arnext";

// styles
import { Inter, Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

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
        <ArNext {...props}>{props.children}</ArNext>
      </ThemeProvider>
    </main>
  );
}
