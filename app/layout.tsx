import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Startup Stack Builder',
  description: 'Build your AI-powered startup team in seconds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}
