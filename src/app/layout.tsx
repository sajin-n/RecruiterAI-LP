import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RecruiterAI - AI-Powered Recruiting Platform",
  description:
    "Every hire, faster and better. Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.",
  keywords: [
    "AI recruiting",
    "hiring automation",
    "applicant tracking",
    "resume screening",
    "interview scheduling",
    "HR technology",
  ],
  authors: [{ name: "RecruiterAI" }],
  openGraph: {
    title: "RecruiterAI - AI-Powered Recruiting Platform",
    description:
      "Every hire, faster and better. Stop losing great candidates to slow, manual hiring processes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = theme === 'dark' || (!theme && prefersDark);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
