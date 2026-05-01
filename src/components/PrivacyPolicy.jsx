import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <a href={import.meta.env.BASE_URL} className="privacy-back">← Back to Motivade</a>

        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="privacy-date">Last updated: April 26, 2026</p>
        </header>

        <section className="privacy-section">
          <h2>Overview</h2>
          <p>
            Motivade is built with your privacy as a priority. <strong>All of your personal data, fitness logs,
            workout history, and health information are stored exclusively on your device.</strong> We do not
            collect, transmit, or store your personal data on any external servers.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Storage</h2>
          <p>
            All data you enter into Motivade — including workout logs, personal goals, body measurements,
            and progress history — is saved locally on your device using on-device storage. This data never
            leaves your device unless you explicitly choose to export it.
          </p>
          <ul>
            <li>Workout history and logs</li>
            <li>Personal fitness goals</li>
            <li>Body measurements and progress photos</li>
            <li>AI conversation history and coaching notes</li>
            <li>App preferences and settings</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Data We Do Not Collect</h2>
          <p>We do not collect:</p>
          <ul>
            <li>Personal identifiable information (name, email, phone number)</li>
            <li>Health and fitness data</li>
            <li>Location data</li>
            <li>Device identifiers or analytics</li>
            <li>Usage patterns or behavioral data</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>AI Features</h2>
          <p>
            When you interact with Motivade's AI coaching features, your queries may be processed to generate
            responses. Any AI interactions are handled in a privacy-preserving manner and are not linked to
            your identity. Conversation history is stored only on your device.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Third-Party Services</h2>
          <p>
            Motivade does not integrate with third-party analytics, advertising, or tracking services.
            If you choose to connect optional integrations (such as Apple Health), that data remains
            on your device and is governed by the respective platform's privacy policy.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Deletion</h2>
          <p>
            Since all data is stored on your device, you have full control over it at all times.
            You can delete all app data by uninstalling Motivade from your device. You may also
            clear individual data within the app's settings.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Children's Privacy</h2>
          <p>
            Motivade is not directed at children under the age of 13. We do not knowingly collect
            any information from children.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be reflected on
            this page with an updated date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please reach out to us at{' '}
            <a href="mailto:privacy@motivade.app">privacy@motivade.app</a>.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
