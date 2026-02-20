'use client'

import { useState } from 'react'
import { Phone, Shield, Zap, Code, CreditCard, CheckCircle, ArrowRight, Lock, Mic } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('demo')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">PCI-Compliant Payment Infrastructure</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Payments for <span className="text-primary">AI Voice Agents</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            The missing piece in voice AI. Securely collect, process, and confirm payments 
            mid-conversation—without interrupting the flow.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-primary rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:border-white transition-all">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">The Problem</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="text-red-400 text-2xl">❌</div>
                  <div>
                    <h3 className="font-semibold mb-2">Current State</h3>
                    <p className="text-gray-400">
                      Voice AI agents handle bookings, support, and sales calls—but 
                      freeze when it's time to take payment. They awkwardly hand off 
                      to humans or redirect to websites, killing the seamless experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="text-green-400 text-2xl">✅</div>
                  <div>
                    <h3 className="font-semibold mb-2">With VoicePay AI</h3>
                    <p className="text-gray-400">
                      "That'll be $47.50. Would you like to pay with the card on file?" 
                      <br/><br/>
                      "Yes, go ahead."<br/><br/>
                      "Payment confirmed. You're all set!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Mic className="w-8 h-8 text-primary" />
                <span className="font-semibold">AI Agent</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">LIVE</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-400 mb-1">Agent:</p>
                  <p>"Hi! I'd love to book you in for Thursday at 2pm. That'll be $150 for the service."</p>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-3 border border-primary/30">
                  <p className="text-sm text-primary mb-1">Customer:</p>
                  <p>"Perfect, let's do it."</p>
                </div>

                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-400 mb-1">Agent:</p>
                  <p>"Great! I'll process payment now. Please say or enter your card number..."</p>
                </div>

                <div className="flex items-center gap-2 text-accent">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">PCI-compliant tokenization active</span>
                </div>

                <div className="bg-accent/10 rounded-lg p-3 border border-accent/30">
                  <p className="text-sm text-accent mb-1">✓ Payment Confirmed</p>
                  <p>"Payment of $150 processed successfully. You're booked for Thursday 2pm!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Code, title: 'Integrate SDK', desc: 'One-line integration with your voice AI stack' },
              { icon: Mic, title: 'Trigger Payment', desc: 'Agent initiates payment flow mid-conversation' },
              { icon: Shield, title: 'Secure Collection', desc: 'PCI-compliant tokenization—AI never hears card data' },
              { icon: CheckCircle, title: 'Instant Confirmation', desc: 'Payment processed, conversation continues' },
            ].map((step, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">Step {i + 1}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Demo */}
      <section className="py-20 px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Simple Integration</h2>
          
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
            <div className="flex border-b border-gray-700">
              {['python', 'javascript', 'curl'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={`px-6 py-3 capitalize ${activeTab === lang ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <div className="p-6 font-mono text-sm overflow-x-auto">
              {activeTab === 'python' && (
                <pre className="text-green-400">
{`import voicepay

# Initialize client
vp = voicepay.Client(api_key="vp_live_...")

# Trigger payment during call
payment = vp.create_payment(
    amount=4750,  # $47.50 in cents
    currency="usd",
    description="Booking deposit"
)

# Agent speaks this to customer
print(f"Please confirm payment of ${payment.amount}")

# Wait for confirmation via webhook
@vp.webhook("payment.confirmed")
def on_payment_confirmed(event):
    print("Payment successful!")
    # Continue conversation...`}
                </pre>
              )}
              {activeTab === 'javascript' && (
                <pre className="text-yellow-400">
{`import { VoicePay } from '@voicepay/sdk';

const vp = new VoicePay({ apiKey: 'vp_live_...' });

// During conversation
const payment = await vp.createPayment({
  amount: 4750,
  currency: 'usd',
  description: 'Service fee'
});

// AI agent speaks
agent.say(\`That will be \${payment.formattedAmount}. 
           Shall I process this now?\`);

// Handle webhook
vp.on('payment.confirmed', (event) => {
  agent.say("Payment confirmed! You're all set.");
});`}
                </pre>
              )}
              {activeTab === 'curl' && (
                <pre className="text-blue-400">
{`curl -X POST https://api.voicepay.ai/v1/payments \\
  -H "Authorization: Bearer vp_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 4750,
    "currency": "usd",
    "description": "Booking deposit",
    "phone_number": "+1234567890"
  }'

# Response
{
  "id": "pay_123456",
  "status": "pending_confirmation",
  "amount": "$47.50",
  "payment_url": "https://pay.voicepay.ai/pay_123456"
}`}
                </pre>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Built for Scale</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'PCI Level 1 Compliant', desc: 'Never touch raw card data. Tokenization and encryption at every step.' },
              { icon: Zap, title: 'Sub-Second Processing', desc: 'Payments confirmed before the AI finishes speaking. No awkward pauses.' },
              { icon: CreditCard, title: 'Universal Coverage', desc: 'Visa, Mastercard, Amex, ACH, digital wallets—one integration.' },
              { icon: Lock, title: 'AI Never Hears Data', desc: 'Card numbers go straight to processor. AI only receives confirmation.' },
              { icon: Phone, title: 'Multi-Channel Ready', desc: 'Voice today. Chat, email, and autonomous agents tomorrow.' },
              { icon: Code, title: 'Developer-First', desc: 'Clean APIs, webhooks, and SDKs. Build in hours, not months.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '0.5%', sub: 'per transaction', features: ['Up to $50k/month', 'Standard support', 'Basic analytics', 'Webhook access'] },
              { name: 'Growth', price: '0.3%', sub: '+ $299/mo', features: ['Up to $500k/month', 'Priority support', 'Advanced analytics', 'Custom webhooks', 'Fraud protection'], popular: true },
              { name: 'Enterprise', price: 'Custom', sub: 'starting $999/mo', features: ['Unlimited volume', 'Dedicated support', 'SLA guarantee', 'Custom integration', 'Volume discounts'] },
            ].map((plan, i) => (
              <div key={i} className={`rounded-xl p-8 border ${plan.popular ? 'border-primary bg-primary/5' : 'border-gray-700 bg-gray-800/50'}`}>
                {plan.popular && <div className="text-sm text-primary font-semibold mb-2">MOST POPULAR</div>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-1">{plan.price}</div>
                <div className="text-gray-400 mb-6">{plan.sub}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'border border-gray-600 hover:border-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-400 mt-8 text-sm">
            All plans include PCI compliance, 99.9% uptime SLA, and standard processing fees (2.9% + 30¢).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Close the Loop?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the waitlist for early access. Be the first to enable seamless payments in your voice AI agents.
          </p>
          
          <div className="flex justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-primary outline-none"
            />
            <button className="px-6 py-3 bg-primary rounded-lg font-semibold hover:bg-primary/90 transition-all">
              Join Waitlist
            </button>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            Early access members get 3 months free on Growth plan.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-primary" />
            <span className="font-bold">VoicePay AI</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 VoicePay AI. PCI DSS Level 1 Certified.
          </p>
        </div>
      </footer>
    </main>
  )
}
