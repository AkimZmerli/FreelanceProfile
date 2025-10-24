import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared/lib/utils";
import Navbar from "@/shared/components/navigation/Navbar";
import { siteConfig } from "./page"
import BotpressInitializer from "@/shared/components/BotpressInitializer";
import GlobalLetterRain from "@/shared/components/GlobalLetterRain";
import ErrorBoundary from "@/shared/components/ErrorBoundary";


const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freelance-profil.vercel.app/"),
  title: {
    default: "WebDev4Life",
    template: `%s - Software Engineer`,
  },
  description: "Web Developer and Software Engineer for Hire. I enjoy listening to my clients stories and work on a product that resembles their vision. Together we will create a page that is build to last and shine.",

  // added new keywords for seo
  keywords: [
    "Akim",
    "Zmerli",
    "Akim Zmerli",
    "akim zmerli",
    "akimzmerli",
    "akim-zmerli",
    "akim.zmerli",
    "AkimZmerli",
    "freelancer",
    "for hire",
    "freelancer web developer",
    "for hire",
    "typescript",
    "javascript",
    "nextjs",
    "react",
    "Creator",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",

    "website",

  ],
  authors: [
    {
      name: "Akim Zmerli",
      url: "https://github.com/AkimZmerli",
    },
  ],
  creator: "Akim Zmerli",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@AkimZmerli",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
        <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </meta> 
    </head>
      <body className={`${poppins.variable} ${rubik.variable} dark:bg-gray-900 relative`}>
        {/* Global Letter Rain Effect */}
        <GlobalLetterRain />
        
        <main
          className={cn(
            "flex relative break-words min-h-screen items-center pb-10 justify-between pt-2 px-20 max-md:p-4 bg-sky-50 dark:bg-gray-900 max-sm:pt-20 bg-[radial-gradient(#FF34B3_1px,transparent_1px)] dark:bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] [background-position:0_0]",
          )}
        >          
          <Navbar />
          
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <div className="absolute bottom-10 right-10">
          <BotpressInitializer />
        </div>
        {/* <Footer /> */}
      </body>
     
    </html>
  );
}
