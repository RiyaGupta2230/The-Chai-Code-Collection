// src/components/About.jsx
import { useState, useEffect } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('about')
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  const achievements = [
    { icon: '🎓', label: 'CGPA 9.04', detail: '100% Merit Scholarship' },
    { icon: '🏢', label: 'DRDO Intern', detail: 'SSPL Division' },
    { icon: '🏆', label: 'Top 500', detail: 'Ericsson Edge Academia' },
    { icon: '🧩', label: '400+ Problems', detail: 'LeetCode Solved' },
    { icon: '📜', label: 'Certified', detail: 'NVIDIA, Salesforce, ServiceNow' },
    { icon: '👥', label: 'GDG Core', detail: 'Google Developer Groups' }
  ]

  return (
    <section 
      id="about" 
      className={`py-16 px-8 max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 gradient-text">👋 About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Story Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
          <div className="text-6xl mb-6 text-center">☕</div>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            <span className="font-bold text-rose-500">Code, chai, and curiosity</span> — that's how I roll! 
            I brew lines of code as passionately as I brew chai, where each project becomes a new flavor 
            and every bug is just a hidden ingredient waiting to be discovered.
          </p>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Currently pursuing <span className="font-bold text-emerald-500">B.Tech in Computer Science</span> 
            at Amity University with a stellar <span className="font-bold text-purple-500">9.04 CGPA</span> 
            (earned me a 100% merit scholarship!). When I'm not coding, you'll find me exploring the 
            fascinating worlds of Machine Learning and Full Stack Development.
          </p>

          <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl p-4 border-l-4 border-rose-400">
            <p className="text-gray-700 italic">
              "The more you feed your mind with positive thoughts, the more you can attract great things into your life." 
              — My daily chai wisdom ✨
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              <div className="text-3xl mb-3 group-hover:animate-bounce">{achievement.icon}</div>
              <h3 className="font-bold text-gray-800 mb-1 group-hover:text-rose-500 transition-colors">
                {achievement.label}
              </h3>
              <p className="text-sm text-gray-600">{achievement.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-8 text-center gradient-text">🎓 Education Journey</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4 group">
            <div className="w-4 h-4 bg-emerald-500 rounded-full mt-2 group-hover:animate-pulse"></div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-gray-800">Bachelor of Technology - Computer Science</h4>
              <p className="text-rose-500 font-medium">Amity University, Noida • Sep 2022 - Jun 2026</p>
              <p className="text-gray-600">CGPA: 9.04/10 • 100% Merit Scholarship</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 group">
            <div className="w-4 h-4 bg-rose-500 rounded-full mt-2 group-hover:animate-pulse"></div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-gray-800">ISC (Class XII)</h4>
              <p className="text-rose-500 font-medium">Modern School Rishikesh • 2021-2022</p>
              <p className="text-gray-600">Aggregate: 97%</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 group">
            <div className="w-4 h-4 bg-purple-500 rounded-full mt-2 group-hover:animate-pulse"></div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-gray-800">ICSE (Class X)</h4>
              <p className="text-rose-500 font-medium">Modern School Rishikesh • 2019-2020</p>
              <p className="text-gray-600">Aggregate: 94.6%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
