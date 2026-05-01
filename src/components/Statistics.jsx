import './Statistics.css'

function Statistics() {
  return (
    <section id="statistics" className="statistics">
      <div className="statistics-container">
        <div className="statistics-content">
          <span className="section-label">Analytics</span>
          <h2 className="section-title">
            Track Your<br />
            <span className="gradient-text">Progress</span>
          </h2>
          <p className="section-description">
            Visualize your fitness journey with comprehensive statistics and insights.
            Monitor your performance, identify trends, and crush your goals.
          </p>

          <div className="stats-features">
            <div className="stats-feature">
              <div className="stats-feature-icon"></div>
              <div className="stats-feature-content">
                <h4>Performance Metrics</h4>
                <p>Track strength gains, workout volume, and exercise PRs over time</p>
              </div>
            </div>
            <div className="stats-feature">
              <div className="stats-feature-icon"></div>
              <div className="stats-feature-content">
                <h4>Goal Tracking</h4>
                <p>Set and monitor fitness goals with visual progress indicators</p>
              </div>
            </div>
            <div className="stats-feature">
              <div className="stats-feature-icon"></div>
              <div className="stats-feature-content">
                <h4>Workout History</h4>
                <p>Complete history of all workouts with detailed breakdowns</p>
              </div>
            </div>
            <div className="stats-feature">
              <div className="stats-feature-icon"></div>
              <div className="stats-feature-content">
                <h4>Body Composition</h4>
                <p>Monitor weight, body fat percentage, and measurements</p>
              </div>
            </div>
          </div>
        </div>

        <div className="statistics-visual">
          <div className="stats-dashboard">
            <div className="stats-header">
              <h3>Your Statistics</h3>
              <div className="stats-period">
                <span>Last 30 Days</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-box-header">
                  <span className="stat-box-label">Total Workouts</span>
                  <span className="stat-box-change positive">+12%</span>
                </div>
                <div className="stat-box-value">24</div>
              </div>
              <div className="stat-box">
                <div className="stat-box-header">
                  <span className="stat-box-label">Calories Burned</span>
                  <span className="stat-box-change positive">+8%</span>
                </div>
                <div className="stat-box-value">12.4K</div>
              </div>
              <div className="stat-box">
                <div className="stat-box-header">
                  <span className="stat-box-label">Total Volume</span>
                  <span className="stat-box-change positive">+15%</span>
                </div>
                <div className="stat-box-value">156K</div>
              </div>
              <div className="stat-box">
                <div className="stat-box-header">
                  <span className="stat-box-label">Avg. Duration</span>
                  <span className="stat-box-change neutral">0%</span>
                </div>
                <div className="stat-box-value">52m</div>
              </div>
            </div>

            <div className="chart-container">
              <div className="chart-header">
                <h4>Workout Volume</h4>
                <div className="chart-legend">
                  <span className="legend-dot"></span>
                  Weekly Volume (lbs)
                </div>
              </div>
              <div className="chart">
                <div className="chart-bars">
                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{ height: '45%' }}></div>
                    <span className="bar-label">W1</span>
                  </div>
                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{ height: '60%' }}></div>
                    <span className="bar-label">W2</span>
                  </div>
                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{ height: '55%' }}></div>
                    <span className="bar-label">W3</span>
                  </div>
                  <div className="chart-bar-wrapper">
                    <div className="chart-bar chart-bar--active" style={{ height: '75%' }}></div>
                    <span className="bar-label">W4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="recent-prs">
              <h4>Recent Personal Records</h4>
              <div className="pr-list">
                <div className="pr-item">
                  <div className="pr-badge">PR</div>
                  <div className="pr-info">
                    <div className="pr-name">Bench Press</div>
                    <div className="pr-detail">225 lbs &times; 5 reps</div>
                  </div>
                  <span className="pr-date">2d ago</span>
                </div>
                <div className="pr-item">
                  <div className="pr-badge">PR</div>
                  <div className="pr-info">
                    <div className="pr-name">Squat</div>
                    <div className="pr-detail">315 lbs &times; 3 reps</div>
                  </div>
                  <span className="pr-date">5d ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
