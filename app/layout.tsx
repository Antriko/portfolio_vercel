import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
    subsets: ['latin'],
  })

export const metadata: Metadata = {
  title: 'Antriko H',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-dark scroll-smooth">
        <body className={roboto.className}>{children}</body>
    </html>
  );
}
