'use client'

import { Heart, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              <span className="text-gradient bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                Sabyasachi Upadhyay
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Product Leader, Growth Strategist, and AI for Good advocate. Building products that create meaningful
              impact at scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#ideas" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Ideas & Writings
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Fun Fact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Beyond Work</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                🎭 Stand-up Comedy
              </li>
              <li className="flex items-center gap-2">
                ⚽ Manchester United Fan
              </li>
              <li className="flex items-center gap-2">
                ♟️ Chess Enthusiast
              </li>
              <li className="flex items-center gap-2">
                💻 Tech Explorer
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Sabyasachi Upadhyay. Built with <Heart className="w-4 h-4 text-red-500" /> and{' '}
              <Coffee className="w-4 h-4 text-primary-400" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

