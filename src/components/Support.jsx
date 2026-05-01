import './PrivacyPolicy.css'

function Support() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <a href={import.meta.env.BASE_URL} className="privacy-back">← Back to Motivade</a>

        <header className="privacy-header">
          <h1>Support</h1>
          <p className="privacy-date">We're here to help</p>
        </header>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            Need help with Motivade? Have a question, feature request, or found a bug?
            We'd love to hear from you. Email our support team and we'll get back to you
            as soon as possible.
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:johnyevag95@gmail.com">johnyevag95@gmail.com</a>
          </p>
          <p>
            We aim to respond to all support inquiries within 1–2 business days.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Frequently Asked Questions</h2>

          <h3>How do I reset my workout history?</h3>
          <p>
            Open Motivade, go to Settings, then tap "Reset Data." This will clear all
            locally stored workout data on your device. This action cannot be undone.
          </p>

          <h3>Where is my data stored?</h3>
          <p>
            All your data — workouts, goals, measurements, and progress — is stored
            exclusively on your device. See our{' '}
            <a href={`${import.meta.env.BASE_URL}privacy-policy`}>Privacy Policy</a> for details.
          </p>

          <h3>How do I cancel my subscription?</h3>
          <p>
            Subscriptions are managed through your Apple ID. Open the Settings app on
            your iPhone, tap your name, then tap Subscriptions to manage or cancel
            Motivade Premium.
          </p>

          <h3>What devices are supported?</h3>
          <p>
            Motivade is available for iPhone and iPad running iOS 18.0 or later.
          </p>

          <h3>How do I request a refund?</h3>
          <p>
            Refund requests are handled by Apple. Visit{' '}
            <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
              reportaproblem.apple.com
            </a>{' '}
            to request a refund for any App Store purchase.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Report a Problem</h2>
          <p>
            If you've encountered a bug or technical issue, please email{' '}
            <a href="mailto:johnyevag95@gmail.com">johnyevag95@gmail.com</a> with the
            following information so we can help you faster:
          </p>
          <ul>
            <li>Your device model (e.g., iPhone 15 Pro)</li>
            <li>Your iOS version</li>
            <li>The version of Motivade you're using</li>
            <li>A description of what happened and steps to reproduce</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Support
