// src/components/Skills.jsx
import { useState } from 'react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages')

  const skillCategories = {
    languages: {
      title: '👨‍💻 Programming Languages',
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Java', level: 90, icon: '☕' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'C/C++', level: 80, icon: '⚡' },
        { name: 'JavaScript', level: 85, icon: '🚀' },
        { name: 'HTML/CSS', level: 90, icon: '🎨' },
        { name: 'Node.js', level: 75, icon: '📦' }
      ]
    },
    frameworks: {
      title: '🛠️ Frameworks & Libraries',
      color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'Tailwind CSS', level: 90, icon: '💨' },
        { name: 'Express.js', level: 80, icon: '🌐' },
        { name: 'Bootstrap', level: 85, icon: '🎯' },
        { name: 'TensorFlow', level: 70, icon: '🧠' },
        { name: 'Keras', level: 75, icon: '🤖' }
      ]
    },
    databases: {
      title: '🗄️ Databases & Tools',
      color: 'from-rose-500 to-pink-600',
      skills: [
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'SQL', level: 85, icon: '📊' },
        { name: 'Git/GitHub', level: 90, icon: '📱' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Figma', level: 75, icon: '🎨' },
        { name: 'Jupyter', level: 80, icon: '📓' }
      ]
    },
    specialties: {
      title: '🚀 Specializations',
      color: 'from-amber-500 to-orange-600',
      skills: [
        { name: 'Machine Learning', level: 80, icon: '🤖' },
        { name: 'Deep Learning', level: 75, icon: '🧠' },
        { name: 'Full Stack Dev', level: 85, icon: '🌐' },
        { name: 'Data Analysis', level: 80, icon: '📈' },
        { name: 'UI/UX Design', level: 70, icon: '✨' },
        { name: 'Problem Solving', level: 95, icon: '🧩' }
      ]
    }
  }

  return (
    <section id="skills" className="py-16 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 gradient-text">🛠️ Tech Arsenal</h2>
        <p className="text-lg text-gray-600 mb-8">Tools I brew my code with ☕</p>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
              activeCategory === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'bg-white/80 hover:bg-gray-100 text-gray-700'
            }`}
          >
            {category.title.split(' ')} {category.title.split(' ').slice(1).join(' ')}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <h3 className={`text-2xl font-bold mb-8 text-center bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
          {skillCategories[activeCategory].title}
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border hover:shadow-lg transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideInUp 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:animate-bounce">{skill.icon}</span>
                  <h4 className="font-bold text-gray-800">{skill.name}</h4>
                </div>
                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out`}
                  style={{
                    width: `${skill.level}%`,
                    animation: 'slideInLeft 1s ease-out forwards'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Stats */}
      <div className="grid md:grid-cols-4 gap-6 mt-12">
        {[
          { number: '400+', label: 'LeetCode Problems', icon: '🧩' },
          { number: '15+', label: 'Projects Built', icon: '🚀' },
          { number: '6+', label: 'Technologies Mastered', icon: '⚡' },
          { number: '∞', label: 'Cups of Chai', icon: '☕' }
        ].map((stat, index) => (
          <div
            key={stat.label}
            className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
          >
            <div className="text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
            <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
