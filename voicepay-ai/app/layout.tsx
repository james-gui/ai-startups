import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'VoicePay AI - Payments for Voice Agents',
  description: 'PCI-compliant payment infrastructure for AI voice agents',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}
