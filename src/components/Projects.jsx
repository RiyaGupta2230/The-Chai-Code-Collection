// src/components/Projects.jsx
import { useEffect, useState } from 'react'

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    // Fetch all repos, then filter out ones with "hide-from-portfolio" topic
    fetch('https://api.github.com/users/RiyaGupta2230/repos?sort=updated&per_page=20')
      .then(res => res.json())
      .then(data => {
        // Filter out repos with "hide-from-portfolio" topic
        const visibleRepos = data.filter(repo => 
          !repo.topics?.includes('hide-from-portfolio')
        )
        setRepos(visibleRepos)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching repos:', err)
        setLoading(false)
      })
  }, [])

  const filteredRepos = repos.filter(repo => {
    if (filter === 'all') return true
    if (filter === 'featured') return repo.topics?.includes('featured')
    if (filter === 'ml') return repo.topics?.includes('machine-learning') || repo.topics?.includes('ml')
    if (filter === 'web') return repo.topics?.includes('web') || repo.topics?.includes('react')
    return true
  })

  if (loading) {
    return (
      <section id="projects" className="py-16 px-8 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">☕</div>
          <p className="text-lg">Brewing fresh projects...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-16 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 gradient-text">🚀 Live Projects</h2>
        <p className="text-lg text-gray-600 mb-8">
          Auto-synced with GitHub • Updated every time I push code ☕
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { key: 'all', label: '☕ All Projects', count: repos.length },
            { key: 'featured', label: '⭐ Featured', count: repos.filter(r => r.topics?.includes('featured')).length },
            { key: 'ml', label: '🧠 ML & AI', count: repos.filter(r => r.topics?.includes('machine-learning') || r.topics?.includes('ml')).length },
            { key: 'web', label: '🌐 Web Dev', count: repos.filter(r => r.topics?.includes('web') || r.topics?.includes('react')).length }
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === key
                  ? 'bg-gradient-to-r from-rose-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-white/80 hover:bg-rose-100 text-gray-700'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRepos.map((repo, index) => (
          <div
            key={repo.id}
            className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/20"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'slideInUp 0.6s ease-out forwards'
            }}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500 font-medium">
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
              {repo.topics?.includes('featured') && (
                <span className="px-2 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs rounded-full font-bold">
                  ⭐ FEATURED
                </span>
              )}
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-bold mb-3 group-hover:text-rose-500 transition-colors duration-300">
              {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              {repo.description || 'Another chai-fueled coding adventure! ☕'}
            </p>

            {/* Topics/Tags */}
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.slice(0, 3).map(topic => (
                  <span
                    key={topic}
                    className="px-2 py-1 bg-gradient-to-r from-rose-100 to-emerald-100 text-gray-700 text-xs rounded-full font-medium"
                  >
                    #{topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="text-xs text-gray-500">+{repo.topics.length - 3} more</span>
                )}
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                {repo.language || 'Multiple'}
              </div>
              <div className="flex items-center gap-1">
                ⭐ {repo.stargazers_count}
              </div>
              <div className="flex items-center gap-1">
                📋 {repo.forks_count}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-gray-800 to-black text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center"
              >
                📱 View Code
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-rose-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center"
                >
                  🚀 Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredRepos.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">☕</div>
          <p className="text-xl text-gray-600">No projects match this filter yet!</p>
          <p className="text-gray-500">More chai-powered code coming soon...</p>
        </div>
      )}
    </section>
  )
}

export default Projects
