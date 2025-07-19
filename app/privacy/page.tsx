export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-center">Privacy Policy</h1>
      <div className="prose prose-lg mx-auto dark:prose-invert">
        <p className="text-muted-foreground text-sm">Rail Grid Ltd. — Effective 01 Aug 2025</p>

        <h2>1 Scope</h2>
        <p>
          This Policy explains how Rail Grid collects, uses, shares and secures personal data when you visit our Site,
          interact with our APIs or participate in a pilot.
        </p>

        <h2>2 What We Collect</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Examples</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identification</td>
                <td>Name, email, phone, company</td>
                <td>Account creation, support, marketing (with consent)</td>
              </tr>
              <tr>
                <td>Log data</td>
                <td>IP address, browser, timestamps, API keys</td>
                <td>Security monitoring, fraud prevention</td>
              </tr>
              <tr>
                <td>Usage data</td>
                <td>Clicks, visited pages, feature use</td>
                <td>Product analytics, UX improvement</td>
              </tr>
              <tr>
                <td>Customer-uploaded data</td>
                <td>Contact details in EDI payloads</td>
                <td>Service delivery under contract</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>3 Legal Bases</h2>
        <p>We process personal data on:</p>
        <ul>
          <li>Contract necessity (provide Services you request),</li>
          <li>Legitimate interest (security, fraud detection, analytics),</li>
          <li>Legal obligation (regulator reporting), and</li>
          <li>Consent (marketing emails - you can opt out any time).</li>
        </ul>

        <h2>4 How We Use Data</h2>
        <ul>
          <li>Provide and improve the Services.</li>
          <li>Communicate transactional or security notices.</li>
          <li>Anonymise and aggregate statistics (never identifying individuals).</li>
          <li>Comply with audit or legal requests.</li>
        </ul>

        <h2>5 Sharing & Disclosure</h2>
        <p>We never sell personal data. We share it only with:</p>
        <ol>
          <li>Service providers (cloud hosting, email delivery) under confidentiality.</li>
          <li>Regulators when legally required or for sandbox evaluation.</li>
          <li>Corporate transactions (merger or acquisition) with notice to you.</li>
        </ol>

        <h2>6 International Transfers</h2>
        <p>
          Data may be stored in AWS Africa (Cape Town) and replicated to AWS EU (Ireland) for disaster recovery.
          Transfers follow the EU Standard Contractual Clauses.
        </p>

        <h2>7 Security</h2>
        <p>
          ISO 27001 controls: encryption in transit (TLS 1.3), encryption at rest (AES-256), least-privilege IAM, 24×7
          monitoring, annual CREST pen-test.
        </p>

        <h2>8 Retention</h2>
        <ul>
          <li>Account data — while you hold an active account + 2 years.</li>
          <li>Log data — 12 months, unless needed for investigations.</li>
          <li>Backup archives — 30 days rolling.</li>
        </ul>

        <h2>9 Your Rights</h2>
        <p>Subject to local law you may:</p>
        <ul>
          <li>Access a copy of your personal data.</li>
          <li>Correct inaccurate data.</li>
          <li>Request deletion (where no legal requirement to retain).</li>
          <li>Object to processing for marketing.</li>
        </ul>
        <p>Contact privacy@railgrid.tz to exercise these rights.</p>

        <h2>10 Cookies</h2>
        <p>
          We use minimal first-party cookies for session management and analytics (Google Analytics 4). You can disable
          cookies in your browser; some site features may not function.
        </p>

        <h2>11 Changes to This Policy</h2>
        <p>
          Material changes will be posted here with a new “Effective” date. We may email account holders for significant
          updates.
        </p>

        <h2>12 Contact</h2>
        <p>
          Data Protection Lead — privacy@railgrid.tz
          <br />
          Postal: Viva Tower 7/F, Ali Hassan Mwinyi Rd, Dar es Salaam, Tanzania.
        </p>
      </div>
    </div>
  )
}
