import { useState } from 'react'
import './Navigation.css'
import ThemeToggle from './ThemeToggle'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href={import.meta.env.BASE_URL} className="nav-logo">
          <span className="logo-icon">
            <img src={`${import.meta.env.BASE_URL}roary.svg`} alt="Roary" className="logo-img" />
          </span>
          <span className="logo-text">Motivade</span>
        </a>

        <div className="nav-right">
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
            <li><a href="#statistics" onClick={() => setIsMenuOpen(false)}>Analytics</a></li>
            <li><a href="#download" onClick={() => setIsMenuOpen(false)}>Download</a></li>
            <li><a href="#download" className="nav-cta" onClick={() => setIsMenuOpen(false)}>Get Started</a></li>
          </ul>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
