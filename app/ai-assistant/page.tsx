'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AIAssistant() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: 'Hello! I\'m the Pro Car Security & Audio assistant. I can help you learn about our services, pricing, and what\'s right for your vehicle. What would you like to know?'
    }
  ])

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const quickQuestions = [
    'What audio services do you offer?',
    'Do you install marine audio?',
    'Do you offer mobile service?',
    'How do I get a quote?',
  ]

  const handleSendMessage = async (text: string = input) => {
    if (!text.trim()) return

    const userMessage = text
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMessage }])
    setLoading(true)

    const responses: Record<string, string> = {
      'what audio services do you offer': 'We install audio systems for cars, motorcycles, and marine vessels! This includes speakers, head units, subwoofers, amplifiers, and complete system builds. Whether it\'s your daily driver, motorcycle, or boat, we\'ve got you covered.',
      'do you install marine audio': 'Yes! We specialize in marine audio installations including weatherproof speakers, marine head units, and subwoofer systems for boats and watercraft. Marine installs require specialized equipment to handle moisture — we use quality marine-grade products.',
      'do you offer mobile service': 'Yes! We offer mobile service across North Texas. We can come to your home, workplace, or anywhere that\'s convenient. We serve Anna, McKinney, Prosper, Celina, Melissa, Denton, Van Alstyne, and surrounding areas.',
      'how do i get a quote': 'The easiest way is to call or text us at (214) 489-5107 during business hours (Mon-Sat 10AM-5PM). You can also fill out our online quote form and we\'ll get back to you quickly. Quotes are free and there\'s no obligation.',
      'do you do motorcycle audio': 'Absolutely! We install audio systems specifically designed for motorcycles, including weatherproof speakers and compact amplifiers that work with your bike\'s electrical system.',
      'what security systems do you install': 'We install car alarm systems, remote start systems, GPS trackers, and dash cameras. These can be installed on most vehicles and we\'ll make sure everything is set up correctly for your specific make and model.',
      'do you do led lighting': 'Yes! We do custom LED lighting including interior ambient lighting, exterior accent lighting, and underglow/RGB lighting for cars, trucks, and motorcycles. It\'s a great way to personalize your vehicle.',
      'what are your hours': 'We\'re open Monday through Saturday, 10AM to 5PM. We\'re closed on Sundays. You can call or text us at (214) 489-5107 during business hours.',
      'where are you located': 'We\'re based at 725 Peach Tree Ln, Anna, TX 75409. But since we offer mobile service, we come to you! We serve the greater North Texas area including McKinney, Prosper, Celina, Melissa, Denton, and Van Alstyne.',
    }

    let response = 'Great question! For the most accurate answer, I\'d recommend calling or texting us at (214) 489-5107 or visiting our services page. Our team can give you personalized recommendations for your specific vehicle and needs.'

    const lowerText = text.toLowerCase()
    for (const [key, value] of Object.entries(responses)) {
      if (lowerText.includes(key.replace(/\?/g, ''))) {
        response = value
        break
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', text: response }])
      setLoading(false)
    }, 500)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[260px] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-pro-dark/80 to-pro-blue/70" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Assistant</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Get instant answers about our audio, security, and LED lighting services.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[600px]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-pro-blue text-white'
                        : 'bg-gray-100 text-pro-dark'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-pro-dark px-4 py-3 rounded-lg">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-pro-gray rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-pro-gray rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-pro-gray rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about our services..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim() || loading}
                  className="bg-pro-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 font-semibold"
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Quick Questions */}
          <div className="mt-8">
            <h3 className="font-bold text-pro-dark mb-4">Quick Questions:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(question)}
                  className="text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-pro-blue hover:bg-pro-blue/5 transition-all"
                >
                  <p className="text-sm text-pro-gray hover:text-pro-dark font-medium">{question}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Still Have Questions?</h2>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg p-8">
            <h3 className="font-bold text-pro-dark mb-4">Talk to Us Directly</h3>
            <p className="text-pro-gray mb-6">
              For detailed consultations, custom installs, or specific questions about your vehicle, reach out to us
              directly. We&apos;re happy to help Mon–Sat 10AM–5PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:2144895107" className="btn-primary">
                Call/Text (214) 489-5107
              </a>
              <Link href="/quote" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
