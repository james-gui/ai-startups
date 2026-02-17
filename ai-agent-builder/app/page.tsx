'use client'

import { useState } from 'react'
import { Bot, Zap, Check, Copy, Play } from 'lucide-react'

export default function Home() {
  const [step, setStep] = useState(1)
  const [agent, setAgent] = useState({
    name: '',
    description: '',
    model: 'gpt4',
    personality: 'professional',
  })
  const [deployed, setDeployed] = useState(false)
  const [url, setUrl] = useState('')

  const handleDeploy = () => {
    setUrl(`https://agents.ai/${agent.name.toLowerCase().replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 6)}`)
    setDeployed(true)
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Bot className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            AI Agent Builder
          </h1>
          <p className="text-xl text-gray-400 mt-2">Build and deploy AI agents in 60 seconds</p>
        </div>

        {!deployed ? (
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/30">
            {/* Step 1 */}
            {step === 1 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Step 1: Define Your Agent</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Agent name (e.g., StartupGPT)"
                    value={agent.name}
                    onChange={(e) => setAgent({ ...agent, name: e.target.value })}
                    className="w-full p-4 bg-gray-700 rounded-xl border border-gray-600 focus:border-purple-500 outline-none"
                  />
                  <textarea
                    placeholder="What does it do?"
                    value={agent.description}
                    onChange={(e) => setAgent({ ...agent, description: e.target.value })}
                    rows={3}
                    className="w-full p-4 bg-gray-700 rounded-xl border border-gray-600 focus:border-purple-500 outline-none"
                  />
                  <button
                    onClick={() => setStep(2)}
                    disabled={!agent.name || !agent.description}
                    className="w-full py-4 bg-purple-500 rounded-xl font-bold hover:bg-purple-600 disabled:opacity-50"
                  >
                    Continue →
                  </button>
                </div>
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Step 2: Configure</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">AI Model</label>
                    <select
                      value={agent.model}
                      onChange={(e) => setAgent({ ...agent, model: e.target.value })}
                      className="w-full p-4 bg-gray-700 rounded-xl border border-gray-600"
                    >
                      <option value="gpt4">GPT-4 - Most capable</option>
                      <option value="claude">Claude 3 - Great analysis</option>
                      <option value="deepseek">DeepSeek - Cost effective</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Personality</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['professional', 'friendly', 'creative'].map((p) => (
                        <button
                          key={p}
                          onClick={() => setAgent({ ...agent, personality: p })}
                          className={`p-3 rounded-xl border-2 capitalize ${
                            agent.personality === p ? 'border-purple-500 bg-purple-500/20' : 'border-gray-700'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 py-4 border-2 border-gray-600 rounded-xl">
                      ← Back
                    </button>
                    <button onClick={() => setStep(3)} className="flex-1 py-4 bg-purple-500 rounded-xl font-bold">
                      Continue →
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Step 3: Deploy</h2>
                <div className="bg-gray-700/50 rounded-xl p-4 mb-6">
                  <h3 className="font-semibold mb-2">{agent.name}</h3>
                  <p className="text-gray-400 text-sm">{agent.description}</p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">{agent.model}</span>
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-xs capitalize">{agent.personality}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(2)} className="flex-1 py-4 border-2 border-gray-600 rounded-xl">
                    ← Back
                  </button>
                  <button
                    onClick={handleDeploy}
                    className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-bold flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Deploy Agent
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-green-500/30 text-center">
            <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-400 mb-2">Agent Deployed!</h2>
            <p className="text-gray-400 mb-6">Your AI agent is live</p>
            
            <div className="bg-gray-700 rounded-xl p-4 mb-6">
              <div className="flex gap-2">
                <input type="text" value={url} readOnly className="flex-1 p-3 bg-gray-800 rounded-lg text-sm" />
                <button
                  onClick={() => navigator.clipboard.writeText(url)}
                  className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>

            <button
              onClick={() => { setDeployed(false); setStep(1); setAgent({ name: '', description: '', model: 'gpt4', personality: 'professional' }) }}
              className="py-3 px-6 border-2 border-gray-600 rounded-xl hover:border-white"
            >
              Build Another
            </button>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-12">
          Built from @askOkara's &quot;Build That Idea&quot; concept
        </p>
      </div>
    </main>
  )
}
