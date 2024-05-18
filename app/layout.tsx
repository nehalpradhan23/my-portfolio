import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import ModalProvider from "@/components/modal-provider";
import { ContextProvider } from "@/components/context/user-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nehal's portfolio",
  description: "My portfolio page with all of the stuff i've been working on",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ContextProvider>
            <TooltipProvider>
              <main className="">
                <Navbar />
                {children}
              </main>
              <ModalProvider />
            </TooltipProvider>
          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
