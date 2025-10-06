
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { portfolioData } from "@/lib/portfolio-data";
import "./globals.css";

export const metadata: Metadata = {
  title: portfolioData.hero.title,
  description: "A dynamic portfolio showcasing skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === 'production';
  const repoName = 'kranthis-portfolio';
  const basePath = isProd ? `/${repoName}` : '';

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
