// src/App.jsx
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('home')

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Track current section for navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Loading Screen Component
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-100 via-rose-100 to-emerald-100 flex flex-col items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Chai Cup */}
        <div className="text-8xl mb-6 animate-bounce">☕</div>
        
        {/* Loading Text with Typewriter Effect */}
        <h1 className="text-3xl font-bold gradient-text mb-4">
          Brewing Portfolio...
        </h1>
        
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-gradient-to-r from-rose-500 to-emerald-500 rounded-full animate-pulse"
               style={{
                 width: '100%',
                 animation: 'loadingBar 2s ease-in-out forwards'
               }}>
          </div>
        </div>
        
        {/* Fun Loading Messages */}
        <p className="text-gray-600 animate-pulse">
          Mixing code with chai... Almost ready! ✨
        </p>
      </div>
    </div>
  )

  // Scroll to Top Button
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="bg-gradient-to-br from-amber-100 via-rose-100 to-emerald-100 min-h-screen font-sans relative">
      {/* Navigation */}
      <Navbar currentSection={currentSection} />
      
      {/* Main Content */}
      <main className="relative">
        {/* Background Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Floating Chai Cups */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float text-6xl opacity-10 pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              ☕
            </div>
          ))}
          
          {/* Gradient Orbs */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full blur-3xl opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${200 + Math.random() * 300}px`,
                height: `${200 + Math.random() * 300}px`,
                background: `linear-gradient(45deg, 
                  hsl(${Math.random() * 60 + 320}, 70%, 80%), 
                  hsl(${Math.random() * 60 + 140}, 70%, 80%))`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Page Sections */}
        <div className="relative z-10">
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-rose-500 to-emerald-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-white/20 py-8 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">☕</span>
            <p className="text-gray-700 font-medium">
              Made with chai, code, and lots of ❤️
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm text-gray-600">
            <a href="https://github.com/RiyaGupta2230" target="_blank" rel="noopener" className="hover:text-rose-500 transition-colors">
              📱 GitHub
            </a>
            <a href="https://www.linkedin.com/in/riya-gupta-911579250" target="_blank" rel="noopener" className="hover:text-rose-500 transition-colors">
              💼 LinkedIn
            </a>
            <a href="https://leetcode.com/u/RiyaGupta2231/" target="_blank" rel="noopener" className="hover:text-rose-500 transition-colors">
              🧩 LeetCode
            </a>
            <a href="mailto:riyagupta2231@gmail.com" className="hover:text-rose-500 transition-colors">
              📧 Email
            </a>
          </div>
          
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Riya Gupta. All rights reserved. 
            <br />
            Auto-synced with GitHub • Built with React & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Custom Styles for Loading Animation */}
      <style jsx>{`
        @keyframes loadingBar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(3deg); }
          66% { transform: translateY(-10px) rotate(-3deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default App
