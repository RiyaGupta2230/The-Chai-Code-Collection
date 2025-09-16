// src/components/Contact.jsx
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setSubmitStatus(''), 3000)
    }, 2000)
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:riyagupta2231@gmail.com',
      color: 'from-red-500 to-pink-500',
      description: 'riyagupta2231@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/riya-gupta-911579250',
      color: 'from-blue-500 to-blue-600',
      description: 'Let\'s connect professionally'
    },
    {
      name: 'GitHub',
      icon: '📱',
      url: 'https://github.com/RiyaGupta2230',
      color: 'from-gray-800 to-black',
      description: 'Check out my code'
    },
    {
      name: 'LeetCode',
      icon: '🧩',
      url: 'https://leetcode.com/u/RiyaGupta2231/',
      color: 'from-yellow-500 to-orange-500',
      description: '400+ problems solved'
    }
  ]

  return (
    <section id="contact" className="py-16 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 gradient-text">🔗 Let's Brew Something Together</h2>
        <p className="text-lg text-gray-600 mb-8">
          Got an idea? Let's chat over virtual chai! ☕
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">📝 Send a Message</h3>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="What should I call you?"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm"
                placeholder="Tell me about your project, idea, or just say hi! ☕"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-rose-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin text-xl">☕</div>
                  <span>Sending...</span>
                </div>
              ) : (
                <span>🚀 Send Message</span>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info & Social Links */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">📍 Find Me Here</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">riyagupta2231@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 8006204537</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Location</h4>
                  <p className="text-gray-600">Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">🌐 Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-xl bg-gradient-to-r ${link.color} text-white hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="text-2xl mb-2 group-hover:animate-bounce">{link.icon}</div>
                  <h4 className="font-bold text-sm mb-1">{link.name}</h4>
                  <p className="text-xs opacity-90">{link.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Fun Quote */}
          <div className="bg-gradient-to-r from-amber-100 to-rose-100 rounded-2xl p-8 shadow-lg border border-rose-200">
            <div className="text-4xl text-center mb-4">☕</div>
            <blockquote className="text-center italic text-gray-700">
              "Every great project starts with a great conversation. Let's start ours!"
            </blockquote>
            <p className="text-center text-sm text-gray-500 mt-2">— Riya's Daily Motivation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
