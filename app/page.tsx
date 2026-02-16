'use client'

import { useState } from 'react'

interface Tool {
  name: string
  description: string
  category: string
  url: string
  pricing: string
}

const aiTools: Record<string, Tool[]> = {
  product: [
    { name: 'Grok 3', description: 'Deep research & product insights', category: 'Research', url: 'https://x.com/i/grok', pricing: 'Free/Paid' },
    { name: 'ChatGPT o3', description: 'Advanced reasoning for product decisions', category: 'Research', url: 'https://chat.openai.com', pricing: 'Paid' },
    { name: 'Gemini 2.5', description: 'Google\'s latest for product analysis', category: 'Research', url: 'https://gemini.google.com', pricing: 'Free/Paid' },
    { name: 'Perplexity', description: 'Real-time research with sources', category: 'Research', url: 'https://perplexity.ai', pricing: 'Free/Paid' },
  ],
  engineering: [
    { name: 'Cursor', description: 'AI-powered code editor', category: 'Code', url: 'https://cursor.sh', pricing: 'Free/Paid' },
    { name: 'Replit Agent', description: 'Build and deploy in one place', category: 'Code', url: 'https://replit.com', pricing: 'Paid' },
    { name: 'V0.dev', description: 'Generate UI components with AI', category: 'Frontend', url: 'https://v0.dev', pricing: 'Free/Paid' },
    { name: 'GitHub Copilot', description: 'AI pair programmer', category: 'Code', url: 'https://github.com/copilot', pricing: 'Paid' },
  ],
  gtm: [
    { name: 'Bolt.new', description: 'Launch marketing sites instantly', category: 'Web', url: 'https://bolt.new', pricing: 'Free/Paid' },
    { name: 'Lovable', description: 'AI-generated landing pages', category: 'Web', url: 'https://lovable.dev', pricing: 'Paid' },
    { name: 'Veo 3', description: 'AI video generation for marketing', category: 'Video', url: 'https://deepmind.google/technologies/veo/', pricing: 'Paid' },
    { name: 'Copy.ai', description: 'AI copywriting for campaigns', category: 'Content', url: 'https://copy.ai', pricing: 'Free/Paid' },
  ],
  ops: [
    { name: 'ChatGPT', description: 'General automation & workflows', category: 'Automation', url: 'https://chat.openai.com', pricing: 'Free/Paid' },
    { name: 'Claude', description: 'Long-context document processing', category: 'Automation', url: 'https://claude.ai', pricing: 'Free/Paid' },
    { name: 'Zapier AI', description: 'Connect apps with AI workflows', category: 'Integration', url: 'https://zapier.com/ai', pricing: 'Paid' },
    { name: 'Notion AI', description: 'Knowledge base & docs automation', category: 'Docs', url: 'https://notion.so', pricing: 'Paid' },
  ],
}

const startupTypes = [
  { id: 'saas', name: 'SaaS', icon: '☁️' },
  { id: 'marketplace', name: 'Marketplace', icon: '🏪' },
  { id: 'ai-tool', name: 'AI Tool', icon: '🤖' },
  { id: 'content', name: 'Content/Media', icon: '📝' },
  { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
  { id: 'fintech', name: 'Fintech', icon: '💰' },
]

export default function Home() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [budget, setBudget] = useState<'low' | 'medium' | 'high'>('medium')
  const [teamSize, setTeamSize] = useState<'solo' | 'small' | 'large'>('solo')
  const [showResults, setShowResults] = useState(false)

  const generateStack = () => {
    setShowResults(true)
  }

  const getFilteredTools = (category: string) => {
    const tools = aiTools[category] || []
    if (budget === 'low') {
      return tools.filter(t => t.pricing.includes('Free'))
    }
    return tools
  }

  const getRecommendations = () => {
    const recs: string[] = []
    if (teamSize === 'solo') {
      recs.push('Focus on no-code tools to move fast')
      recs.push('Use AI to automate customer support')
    } else if (teamSize === 'small') {
      recs.push('Use Cursor for 10x engineering velocity')
      recs.push('Implement AI-powered analytics early')
    } else {
      recs.push('Build internal AI tooling for your team')
      recs.push('Use multiple AI models for redundancy')
    }
    
    if (selectedType === 'saas') {
      recs.push('Prioritize Cursor + V0 for rapid prototyping')
    } else if (selectedType === 'ai-tool') {
      recs.push('Invest in Grok 3 for competitive research')
    }
    
    return recs
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Startup Stack Builder
          </h1>
          <p className="text-xl text-gray-400">
            Build your AI-powered startup team in seconds
          </p>
        </div>

        {!showResults ? (
          <div className="space-y-8">
            {/* Startup Type */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">What type of startup?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {startupTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedType === type.id
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <span className="text-3xl mb-2 block">{type.icon}</span>
                    <span className="font-medium">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Budget Level</h2>
              <div className="flex gap-4">
                {(['low', 'medium', 'high'] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all capitalize ${
                      budget === b
                        ? 'border-green-500 bg-green-500/20'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <span className="font-semibold">{b}</span>
                    <span className="text-sm text-gray-400 block">
                      {b === 'low' ? 'Free tools优先' : b === 'medium' ? 'Mix of free & paid' : 'Best tools money can buy'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Team Size */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Team Size</h2>
              <div className="flex gap-4">
                {(['solo', 'small', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setTeamSize(size)}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all capitalize ${
                      teamSize === size
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <span className="font-semibold">{size}</span>
                    <span className="text-sm text-gray-400 block">
                      {size === 'solo' ? 'Just you' : size === 'small' ? '2-10 people' : '10+ people'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateStack}
              disabled={!selectedType}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Generate My AI Stack 🚀
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Results */}
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(aiTools).map(([category, tools]) => (
                <div key={category} className="bg-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 capitalize text-blue-400">
                    {category === 'gtm' ? 'Go-to-Market' : category}
                  </h3>
                  <div className="space-y-3">
                    {getFilteredTools(category).slice(0, 3).map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-semibold text-white">{tool.name}</span>
                            <span className="text-xs text-gray-400 ml-2">({tool.category})</span>
                            <p className="text-sm text-gray-300 mt-1">{tool.description}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${
                            tool.pricing.includes('Free') ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {tool.pricing}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold mb-4">💡 Strategic Recommendations</h3>
              <ul className="space-y-2">
                {getRecommendations().map((rec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400">→</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total Cost Estimate */}
            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Estimated Monthly Cost</h3>
              <p className="text-4xl font-bold text-green-400">
                {budget === 'low' ? '$0-50' : budget === 'medium' ? '$100-300' : '$500+'}
              </p>
              <p className="text-gray-400 mt-2">
                vs. $50K+ for traditional dev team
              </p>
            </div>

            {/* Reset */}
            <button
              onClick={() => setShowResults(false)}
              className="w-full py-3 border-2 border-gray-600 rounded-xl hover:border-white transition-colors"
            >
              Build Another Stack
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Built with Next.js + Tailwind • Data from X/Twitter AI community</p>
          <p className="mt-2">Add your API keys in .env to enable all features</p>
        </div>
      </div>
    </main>
  )
}
