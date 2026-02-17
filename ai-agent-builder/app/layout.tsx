import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'AI Agent Builder',
  description: 'Build AI agents in 60 seconds',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}
