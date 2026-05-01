import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">
                <img src={`${import.meta.env.BASE_URL}roary.svg`} alt="Roary" className="logo-img" />
              </span>
              <span className="footer-logo-text">Motivade</span>
            </div>
            <p className="footer-tagline">
              Your AI-powered fitness companion for achieving your health and fitness goals.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#statistics">Analytics</a></li>
                <li><a href="#download">Download</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href={`${import.meta.env.BASE_URL}support`}>Support</a></li>
                <li><a href={`${import.meta.env.BASE_URL}privacy-policy`}>Privacy Policy</a></li>
                <li><a href="mailto:johnyevag95@gmail.com">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Motivade. All rights reserved.</p>
          <p className="footer-built">Built for athletes, by athletes.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
