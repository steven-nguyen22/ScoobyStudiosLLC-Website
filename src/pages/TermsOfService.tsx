import Header from '../components/Header'
import Footer from '../components/Footer'

function TermsOfService() {
  return (
    <div className="page">
      <Header showBack />

      <div className="legal-header">
        <h1>Terms of Service</h1>
        <p className="effective-date">Last Updated: May 14, 2026</p>
      </div>

      <div className="legal-content">
        <h2>Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using any application published by
          Scooby Studios LLC ("we," "us," or "our"), you agree to be bound by
          these Terms of Service. If you do not agree to these terms, please do
          not use our applications.
        </p>

        <h2>Description of Services</h2>
        <p>
          Scooby Studios LLC develops and publishes mobile applications for iOS.
          Our applications are available for download through the Apple App
          Store. The specific features and functionality of each application are
          described on their respective App Store listings and websites.
        </p>

        <h2>User Accounts</h2>
        <p>
          Some of our applications may require you to create an account. You are
          responsible for maintaining the confidentiality of your account
          credentials and for all activities that occur under your account. You
          agree to notify us immediately of any unauthorized use of your
          account.
        </p>

        <h2>Subscriptions and Payments</h2>
        <p>
          Certain features of our applications may require a paid subscription.
          All payments are processed through the Apple App Store. By purchasing
          a subscription, you agree to Apple's terms of payment. Subscription
          management, including cancellation and refunds, is handled through
          your Apple ID account settings.
        </p>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use our applications for any unlawful purpose</li>
          <li>Attempt to reverse engineer, decompile, or disassemble our applications</li>
          <li>Interfere with or disrupt the operation of our services</li>
          <li>Access our services through automated means without our permission</li>
          <li>Reproduce, distribute, or create derivative works from our applications</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content, features, and functionality of our applications —
          including but not limited to text, graphics, logos, icons, and software
          — are the exclusive property of Scooby Studios LLC and are protected
          by copyright, trademark, and other intellectual property laws.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SCOOBY STUDIOS LLC
          SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
          REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
          DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR
          USE OR INABILITY TO USE OUR APPLICATIONS.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          OUR APPLICATIONS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
          WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT
          LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>

        <h2>Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to our
          applications at any time, with or without cause and with or without
          notice, at our sole discretion.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in
          accordance with the laws of the United States, without regard to
          conflict of law principles.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms of Service from time to time. We will notify
          you of any changes by posting the new terms on this page and updating
          the date above. Your continued use of our applications after any
          changes constitutes your acceptance of the updated terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
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

export default TermsOfService
