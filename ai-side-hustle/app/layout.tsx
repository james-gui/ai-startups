import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'AI Side Hustle Generator',
  description: 'Find AI-powered business ideas to make $100k/year',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}
