import type { Metadata } from "next";
import Navbar from "@/components/Ui/Navbar";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Gamura",
  description: "You wanna play ? Let's play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Navbar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </ThemeProvider>
    </html>
  );
}
