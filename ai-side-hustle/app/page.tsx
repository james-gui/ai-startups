'use client'

import { useState } from 'react'
import { DollarSign, Zap, Users, Briefcase, TrendingUp, Rocket } from 'lucide-react'

const hustles = [
  {
    title: 'AI Content Agency',
    description: 'Use AI to write blog posts, ads, and social media for businesses',
    income: '$5k-20k/month',
    difficulty: 'Easy',
    tools: ['ChatGPT', 'Claude', 'Copy.ai'],
    steps: ['Pick a niche', 'Build portfolio', 'Find clients on LinkedIn', 'Scale with AI tools'],
  },
  {
    title: 'AI Automation Consultant',
    description: 'Help businesses automate workflows with AI tools',
    income: '$10k-50k/month',
    difficulty: 'Medium',
    tools: ['Zapier AI', 'Make', 'ChatGPT API'],
    steps: ['Learn no-code tools', 'Identify pain points', 'Build automations', 'Charge monthly retainers'],
  },
  {
    title: 'AI Art & Design Studio',
    description: 'Create logos, art, and designs using Midjourney, DALL-E',
    income: '$3k-15k/month',
    difficulty: 'Easy',
    tools: ['Midjourney', 'DALL-E', 'Photoshop'],
    steps: ['Master prompts', 'Build portfolio', 'Sell on Fiverr/Upwork', 'Create digital products'],
  },
  {
    title: 'AI Code Assistant',
    description: 'Help non-technical founders build MVPs with AI coding tools',
    income: '$8k-30k/month',
    difficulty: 'Hard',
    tools: ['Cursor', 'GitHub Copilot', 'V0.dev'],
    steps: ['Learn AI coding tools', 'Build sample projects', 'Offer MVP services', 'Charge per project'],
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Deploy AI chatbots for e-commerce and SaaS businesses',
    income: '$4k-12k/month',
    difficulty: 'Medium',
    tools: ['Chatbase', 'Botpress', 'Voiceflow'],
    steps: ['Learn chatbot platforms', 'Pick industry', 'Build demos', 'Sell to businesses'],
  },
  {
    title: 'AI Course Creator',
    description: 'Create and sell AI courses on Udemy, YouTube, or your own platform',
    income: '$2k-50k/month',
    difficulty: 'Medium',
    tools: ['Descript', 'ChatGPT', 'Canva'],
    steps: ['Pick a skill', 'Create content with AI', 'Build audience', 'Monetize'],
  },
]

const skills = ['Writing', 'Coding', 'Design', 'Sales', 'Teaching', 'Automation']
const budgets = ['$0 (Free tools)', '$50-100/month', '$200+/month']

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [showResults, setShowResults] = useState(false)

  const filteredHustles = hustles.filter(h => {
    if (!selectedSkill) return true
    if (selectedSkill === 'Writing') return h.title.includes('Content')
    if (selectedSkill === 'Coding') return h.title.includes('Code') || h.title.includes('Automation')
    if (selectedSkill === 'Design') return h.title.includes('Art') || h.title.includes('Design')
    if (selectedSkill === 'Sales') return h.title.includes('Consultant')
    if (selectedSkill === 'Teaching') return h.title.includes('Course')
    if (selectedSkill === 'Automation') return h.title.includes('Automation') || h.title.includes('Bot')
    return true
  })

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <DollarSign className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            AI Side Hustle Generator
          </h1>
          <p className="text-xl text-gray-300 mt-2">
            Find AI-powered business ideas to make $100k/year
          </p>
        </div>

        {!showResults ? (
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-green-500/30">
            <h2 className="text-2xl font-semibold mb-6">What's your strength?</h2>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedSkill === skill
                      ? 'border-green-500 bg-green-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Budget to start?</h3>
            <div className="space-y-3 mb-8">
              {budgets.map((budget) => (
                <button
                  key={budget}
                  onClick={() => setSelectedBudget(budget)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    selectedBudget === budget
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowResults(true)}
              disabled={!selectedSkill}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl font-bold hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Find My Hustle
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Your AI Side Hustles</h2>
            
            {filteredHustles.map((hustle, i) => (
              <div key={i} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-green-400">{hustle.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    hustle.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    hustle.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {hustle.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{hustle.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">{hustle.income}</span>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-400">Tools: </span>
                  {hustle.tools.map((tool, j) => (
                    <span key={j} className="text-sm bg-gray-700 px-2 py-1 rounded mr-2">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">How to start:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300">
                    {hustle.steps.map((step, j) => (
                      <li key={j}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}

            <button
              onClick={() => { setShowResults(false); setSelectedSkill(''); setSelectedBudget('') }}
              className="w-full py-4 border-2 border-gray-600 rounded-xl font-bold hover:border-white transition-all"
            >
              Find More Hustles
            </button>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-12">
          Inspired by @heyeaslo's viral tweet about AI side hustles • Built with Next.js
        </p>
      </div>
    </main>
  )
}
