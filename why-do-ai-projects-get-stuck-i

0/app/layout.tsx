import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'AI App',
  description: 'Built from trending ideas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}
