import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* Diagonal accent stripe */}
      <div className="hero-accent-stripe"></div>

      {/* Floating geometric shapes */}
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Now Available on iOS
          </div>

          <h1 className="hero-title">
            <span className="title-line">Your AI-Powered</span>
            <span className="title-line title-accent">
              <span className="gradient-text">Fitness</span>
              <span className="title-outline"> Machine</span>
            </span>
          </h1>

          <p className="hero-description">
            Transform your body with intelligent workout creation,
            personalized nutrition tracking, and comprehensive health analytics.
            Built for those who demand results.
          </p>

          <div className="hero-buttons">
            <a href="#download" className="btn btn-primary pulse">
              <svg className="apple-icon" width="20" height="24" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Download App
            </a>
            <a href="#features" className="btn btn-secondary">
              Explore Features
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">50K<span className="stat-plus">+</span></div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">1M<span className="stat-plus">+</span></div>
              <div className="stat-label">Workouts Tracked</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">4.9</div>
              <div className="stat-label">App Store Rating</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="phone-container">
            {/* Decorative elements */}
            <div className="phone-glow"></div>
            <div className="phone-shadow"></div>

            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <img
                    src="/app-screenshot.png"
                    alt="Motivade app screenshot"
                    className="phone-screenshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="hero-marquee">
        <div className="marquee-track">
          <span>AI WORKOUTS</span>
          <span className="marquee-dot"></span>
          <span>NUTRITION TRACKING</span>
          <span className="marquee-dot"></span>
          <span>PROGRESSIVE OVERLOAD</span>
          <span className="marquee-dot"></span>
          <span>HEALTH ANALYTICS</span>
          <span className="marquee-dot"></span>
          <span>AI WORKOUTS</span>
          <span className="marquee-dot"></span>
          <span>NUTRITION TRACKING</span>
          <span className="marquee-dot"></span>
          <span>PROGRESSIVE OVERLOAD</span>
          <span className="marquee-dot"></span>
          <span>HEALTH ANALYTICS</span>
          <span className="marquee-dot"></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
