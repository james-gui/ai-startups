'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto text-center">
        <Sparkles className="w-16 h-16 text-blue-400 mx-auto mb-4" />
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AI App
        </h1>
        <p className="text-xl text-gray-400 mt-4">
          Built from trending AI startup ideas
        </p>
        <div className="mt-12 bg-gray-800/50 rounded-2xl p-8 border border-blue-500/30">
          <p className="text-gray-300">
            This app was automatically generated from today's top AI trends.
          </p>
        </div>
      </div>
    </main>
  )
}
