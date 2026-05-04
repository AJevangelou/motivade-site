import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <a href={import.meta.env.BASE_URL} className="privacy-back">← Back to Motivade</a>

        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="privacy-date">Last updated: May 5, 2026</p>
        </header>

        <section className="privacy-section">
          <h2>Overview</h2>
          <p>
            Motivade is built with your privacy as a priority. <strong>Almost all of your personal data, fitness
            logs, workout history, and health information are stored exclusively on your device.</strong> We do
            not operate servers that collect or store your data.
          </p>
          <p>
            The only exception is our AI-powered features, which send anonymised fitness data to OpenAI's API
            to generate personalised workout plans, performance insights, and nutrition guidance. No personally
            identifiable information (such as your name, email, or device ID) is ever included. See the
            <strong> AI Features</strong> section below for full details.
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
            Motivade's AI features are powered by OpenAI's API. When you use these features, a minimal set
            of anonymised fitness data is sent to OpenAI to generate your response. The data sent depends
            on the feature used:
          </p>
          <ul>
            <li><strong>AI Workout Generation:</strong> fitness level, fitness goals, training frequency, and equipment availability.</li>
            <li><strong>Performance Insights:</strong> fitness level, goals, training frequency, and a summary of your last 20 workouts (workout name, date, duration, exercise names, set and rep counts).</li>
            <li><strong>Progressive Overload Suggestions:</strong> fitness level, goals, exercise name, and your last 15 sets for that exercise (weight, reps, date).</li>
            <li><strong>Nutrition Guidance:</strong> age, weight, height, fitness goals, training frequency, and calculated calorie targets.</li>
            <li><strong>Meal Recipes:</strong> fitness goals, fitness level, and the selected meal's name and nutritional targets.</li>
          </ul>
          <p>
            <strong>No personally identifiable information is ever sent</strong> — including your name, email
            address, phone number, location, or device identifier. All responses are processed in memory and
            the results are saved only on your device. OpenAI does not use API data to train its models by
            default. For more information, see{' '}
            <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
              OpenAI's Privacy Policy
            </a>.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Subscriptions and In-App Purchases</h2>
          <p>
            Motivade offers optional auto-renewable Premium subscriptions (monthly and yearly) processed
            entirely through Apple's App Store. We do not collect, store, or have access to your payment
            information — all billing is handled by Apple.
          </p>
          <ul>
            <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.</li>
            <li>You can manage or cancel your subscription at any time in your Apple ID account settings.</li>
            <li>No personal financial data is transmitted to or stored by Motivade.</li>
          </ul>
          <p>
            For more information on how Apple handles payment data, see{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
              Apple's Privacy Policy
            </a>.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Third-Party Services</h2>
          <p>
            Motivade does not integrate with third-party analytics, advertising, or tracking services.
            The only third-party service that receives any data is OpenAI (for AI features, described above).
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
