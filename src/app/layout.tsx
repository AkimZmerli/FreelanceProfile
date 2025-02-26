import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";


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
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

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
    "freelancer web developer",
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
      <body className={`${poppins.variable} ${rubik.variable} dark:bg-gray-900`}>
      <main
          className={cn(
            "flex relative break-words h-full min-h-screen items-center pb-10 justify-between pt-2 px-20 max-md:p-4 bg-white dark:bg-gray-900 max-sm:pt-20 bg-[radial-gradient(#FF34B3_1px,transparent_1px)] dark:bg-[radial-gradient(#FF34B3_1px,transparent_1px)] [background-size:16px_16px] [background-position:0_0]",
          )}
        >          {/* NAVBAR ->  */}
        
          
            <Navbar />
       
  
          {children}
        </main>
        {/* <Footer /> */}
      </body>
     
    </html>
  );
}
