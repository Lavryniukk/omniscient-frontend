import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import SideBar from './modules/sidebar/Sidebar';
import Header from './modules/header/Header';
const roboto = Roboto({
  variable: "--roboto-font",
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
