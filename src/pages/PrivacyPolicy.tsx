import Header from '../components/Header'
import Footer from '../components/Footer'

function PrivacyPolicy() {
  return (
    <div className="page">
      <Header showBack />

      <div className="legal-header">
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective Date: May 14, 2026</p>
      </div>

      <div className="legal-content">
        <h2>Introduction</h2>
        <p>
          Scooby Studios LLC ("we," "us," or "our") develops and publishes
          mobile applications for iOS. This Privacy Policy explains how we
          collect, use, and protect information across all applications published
          by Scooby Studios LLC. Individual applications may collect additional
          information as described in their respective privacy policies.
        </p>

        <h2>Information We Collect</h2>
        <p>Depending on the application, we may collect the following types of information:</p>
        <ul>
          <li>Account information you provide, such as your name and email address</li>
          <li>Usage data, including how you interact with our applications</li>
          <li>Device information, such as device model, operating system version, and unique device identifiers</li>
          <li>Crash reports and performance data to improve app stability</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our applications</li>
          <li>Respond to your requests and communicate with you</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Ensure the security and integrity of our services</li>
        </ul>

        <h2>Data Storage and Security</h2>
        <p>
          We implement industry-standard security measures to protect your
          information from unauthorized access, alteration, disclosure, or
          destruction. While no method of transmission or storage is completely
          secure, we strive to use commercially acceptable means to protect your
          personal information.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our applications may use third-party services for analytics, crash
          reporting, payment processing, or other functionality. These services
          may collect information in accordance with their own privacy policies.
          We encourage you to review the privacy policies of any third-party
          services used by our applications.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your information only for as long as necessary to fulfill
          the purposes outlined in this policy, unless a longer retention period
          is required or permitted by law.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our applications are not directed at children under the age of 13. We
          do not knowingly collect personal information from children under 13.
          If we become aware that we have collected such information, we will
          take steps to delete it promptly.
        </p>

        <h2>Your Rights</h2>
        <p>You may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at the email
          address below.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page and updating
          the effective date. Your continued use of our applications after any
          changes constitutes your acceptance of the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us at:{' '}
          <a href="mailto:steve.huu.nguyen@gmail.com">
            steve.huu.nguyen@gmail.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
