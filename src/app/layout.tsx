import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oussama Oma — Backend Engineer",
  description:
    "Oussama Oma — Backend Engineer based in Algeria with 5 years of experience building reliable, high-throughput fintech systems in Java, Spring Boot, and Python.",
  keywords: [
    "Oussama Oma",
    "Backend Engineer",
    "Spring Boot",
    "Java",
    "Python",
    "Fintech",
    "PostgreSQL",
    "Distributed Systems",
  ],
  authors: [{ name: "Oussama Oma" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Oussama Oma — Backend Engineer",
    description:
      "Backend Engineer building reliable, high-throughput fintech systems in Java, Spring Boot, and Python.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oussama Oma — Backend Engineer",
    description:
      "Backend Engineer building reliable, high-throughput fintech systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
