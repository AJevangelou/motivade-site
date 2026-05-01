import './Features.css'

function Features() {
  const features = [
    {
      number: '01',
      title: 'AI Workout Generator',
      description: 'Get personalized workout plans created by AI based on your goals, fitness level, and available equipment.',
      accent: 'primary',
    },
    {
      number: '02',
      title: 'Workout Tracking',
      description: 'Create and track your workouts with ease. Log exercises, sets, reps, and weights with an intuitive interface.',
      accent: 'secondary',
    },
    {
      number: '03',
      title: 'Progressive Overload',
      description: 'Receive intelligent tips and recommendations for progressive overload to continuously improve your strength.',
      accent: 'accent',
    },
    {
      number: '04',
      title: 'Nutrition Tracking',
      description: 'Track your daily nutrition, calories, macros, and get personalized nutrition tips to fuel your fitness goals.',
      accent: 'primary',
    },
    {
      number: '05',
      title: 'Water Tracking',
      description: 'Stay hydrated with easy water intake tracking and smart reminders throughout the day.',
      accent: 'secondary',
    },
    {
      number: '06',
      title: 'Health Analytics',
      description: 'Comprehensive statistics and visualizations of your fitness journey, progress, and health data.',
      accent: 'accent',
    },
  ]

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">
            Everything You Need<br />
            <span className="gradient-text">To Dominate</span>
          </h2>
          <p className="section-description">
            Powerful features designed to help you build strength, track progress,
            and maintain a healthy lifestyle. No fluff, just results.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card feature-card--${feature.accent}`}>
              <div className="feature-number">{feature.number}</div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="features-showcase">
          <div className="showcase-content">
            <span className="section-label">AI-Powered</span>
            <h3 className="showcase-title">Nutrition Intelligence</h3>
            <p className="showcase-description">
              Get personalized nutrition advice based on your goals, dietary preferences,
              and workout intensity. Our AI analyzes your activity and provides actionable
              recommendations.
            </p>
            <ul className="showcase-list">
              <li>
                <span className="list-marker"></span>
                Meal timing recommendations
              </li>
              <li>
                <span className="list-marker"></span>
                Macro balance suggestions
              </li>
              <li>
                <span className="list-marker"></span>
                Pre and post-workout nutrition
              </li>
              <li>
                <span className="list-marker"></span>
                Hydration optimization
              </li>
            </ul>
          </div>

          <div className="showcase-visual">
            <div className="nutrition-card">
              <div className="nutrition-header">
                <div className="nutrition-badge">AI Tip</div>
                <span className="nutrition-time">Just now</span>
              </div>
              <h4>Post-Workout Nutrition</h4>
              <p>Based on your intense leg workout, consume 30-40g of protein within the next hour for optimal recovery.</p>
              <div className="nutrition-macros">
                <div className="macro">
                  <div className="macro-header">
                    <span className="macro-name">Protein</span>
                    <span className="macro-value">35g</span>
                  </div>
                  <div className="macro-bar">
                    <div className="macro-fill macro-fill--protein"></div>
                  </div>
                </div>
                <div className="macro">
                  <div className="macro-header">
                    <span className="macro-name">Carbs</span>
                    <span className="macro-value">50g</span>
                  </div>
                  <div className="macro-bar">
                    <div className="macro-fill macro-fill--carbs"></div>
                  </div>
                </div>
                <div className="macro">
                  <div className="macro-header">
                    <span className="macro-name">Fats</span>
                    <span className="macro-value">15g</span>
                  </div>
                  <div className="macro-bar">
                    <div className="macro-fill macro-fill--fats"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
