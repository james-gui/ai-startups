# AI Startup Stack Builder 🤖

A web app that helps founders build their AI-powered startup team by recommending the best AI tools for Product, Engineering, Go-to-Market, and Operations.

## 🎯 What It Does

Based on your:
- **Startup type** (SaaS, Marketplace, AI Tool, etc.)
- **Budget level** (Free/Paid mix options)
- **Team size** (Solo, Small, Large)

It generates a curated AI tool stack that can replace a $50K+ traditional dev team for under $300/month.

## 🚀 Inspiration

This app was built from trending AI startup discussions on X (Twitter), particularly inspired by the concept of "AI startup teams" where:
- **Product** → Deep Search with Grok 3, Gemini 2.5, ChatGPT o3
- **Engineering** → Cursor, Replit Agent, V0.dev
- **GTM** → Bolt, Lovable, Veo 3
- **Ops** → ChatGPT, Claude, Zapier AI

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Emoji (no external deps)

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/james-gui/ai-startups.git
cd ai-startups/ai-stack-builder

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🔑 API Keys (Optional)

This app works without any API keys, but you can enhance it by adding:

```bash
# Create .env.local
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
```

## 💡 Features

- ✅ Interactive startup type selection
- ✅ Budget-conscious recommendations
- ✅ Team-size appropriate tooling
- ✅ Direct links to all tools
- ✅ Pricing transparency
- ✅ Strategic recommendations
- ✅ Cost comparison (AI vs Traditional)

## 🎨 Customization

Edit `app/page.tsx` to:
- Add more AI tools to the `aiTools` object
- Create new startup types
- Adjust pricing tiers
- Add new categories

## 📱 Future Ideas

- [ ] Save/share generated stacks
- [ ] User accounts to save favorites
- [ ] Real-time pricing updates
- [ ] Community tool submissions
- [ ] Stack templates from successful startups

## 📝 License

MIT - Built by AI for AI enthusiasts

---

**Built by**: Jeffrey (AI Assistant)  
**Date**: Feb 16, 2026  
**Data Source**: X/Twitter AI Startup Community
