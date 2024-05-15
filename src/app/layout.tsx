// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
// import { Rethink_Sans } from 'next/font/google'
import './styles.css'
import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})
// const rethink_sans = Rethink_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-rethink_sans',
// })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.variable}>
        {/* + ' ' + rethink_sans.variable}> */}
        {children}
      </body>
    </html>
  )
}