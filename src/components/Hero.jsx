// src/components/Hero.jsx
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const texts = ['Code', 'Chai', 'Curiosity', 'Creativity']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setCurrentText('')
    const text = texts[currentIndex]
    let i = 0
    const typeInterval = setInterval(() => {
      setCurrentText(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(typeInterval)
    }, 100)
    return () => clearInterval(typeInterval)
  }, [currentIndex])

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-16 text-center relative overflow-hidden" id="home">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ☕
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-6xl sm:text-8xl font-extrabold mb-6">
          <span className="gradient-text">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        
        <div className="text-xl sm:text-2xl mb-8 font-medium text-gray-700">
          💻 Full Stack Developer | 🧠 ML Enthusiast | 🎓 BTech @ Amity
        </div>
        
        <div className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
          I brew lines of code as passionately as I brew chai — each project a new flavor, each bug a hidden ingredient. 
          Currently building the future with <span className="font-bold text-rose-500">CGPA 9.04</span> and 
          <span className="font-bold text-emerald-500"> 400+ LeetCode problems solved</span>! ☕
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {[
            { url: 'https://www.linkedin.com/in/riya-gupta-911579250', icon: '💼', label: 'LinkedIn', color: 'from-blue-500 to-blue-600' },
            { url: 'https://github.com/RiyaGupta2230', icon: '📱', label: 'GitHub', color: 'from-gray-800 to-black' },
            { url: 'https://leetcode.com/u/RiyaGupta2231/', icon: '🧩', label: 'LeetCode', color: 'from-yellow-500 to-orange-500' }
          ].map(({ url, icon, label, color }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group px-6 py-3 bg-gradient-to-r ${color} text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110`}
            >
              <span className="group-hover:animate-bounce inline-block mr-2">{icon}</span>
              {label}
            </a>
          ))}
        </div>

        <a 
          href="/Riya_Resume.pdf"
          download
          className="inline-block px-8 py-4 bg-gradient-to-r from-rose-500 to-emerald-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  )
}
