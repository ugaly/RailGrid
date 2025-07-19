import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-center">Terms of Service</h1>
      <div className="prose prose-lg mx-auto dark:prose-invert">
        <p className="text-muted-foreground text-sm">Rail Grid Ltd. — Effective 01 Aug 2025</p>

        <h2>1 Who We Are</h2>
        <p>
          Rail Grid Ltd. (“RailGrid,” “we,” “us”) builds and operates compliant digital solutions. We are incorporated
          in the United Republic of Tanzania and have our head office at Viva Tower, Dar es Salaam.
        </p>

        <h2>2 Acceptance</h2>
        <p>
          By visiting railgrid.tz (the “Site”) or using any Rail Grid API, dashboard or pilot environment (collectively,
          the “Services”) you agree to these Terms of Service (“Terms”). If you access the Services on behalf of an
          organisation, you confirm that you have authority to bind that organisation.
        </p>

        <h2>3 Beta/Pilot Use</h2>
        <p>
          Some features are offered as pilots or sandboxes (“Beta”). Beta features are provided as-is and may change or
          be withdrawn at any time.
        </p>

        <h2>4 Accounts & Credentials</h2>
        <ul>
          <li>API keys and dashboard log-ins are personal to you or your organisation.</li>
          <li>
            You must keep credentials confidential and notify security@railgrid.tz within 24 hours of suspected
            compromise.
          </li>
          <li>Rail Grid may suspend access if we believe your use harms security or violates law.</li>
        </ul>

        <h2>5 Fees & Payment</h2>
        <p>Unless a separate written agreement applies:</p>
        <ul>
          <li>Pilot access is free for 30 days.</li>
          <li>Production use attracts the licence fees stated on the relevant Order Form.</li>
          <li>Late payments ({">"} 7 days) accrue interest at the BoT discount rate + 2 %.</li>
        </ul>

        <h2>6 Intellectual Property</h2>
        <p>
          Rail Grid and its licensors own all intellectual-property rights in the Services. You receive a non-exclusive,
          non-transferable licence to use the Services for lawful business purposes only.
        </p>

        <h2>7 Use Restrictions</h2>
        <p>You must not:</p>
        <ul>
          <li>reverse-engineer, decompile or attempt to extract source code;</li>
          <li>remove proprietary notices or modify the Services;</li>
          <li>use the Services to build a competing product;</li>
          <li>transmit malware or infringe third-party rights.</li>
        </ul>

        <h2>8 Confidentiality</h2>
        <p>
          All non-public business, technical or financial information exchanged is Confidential Information and
          protected under our Mutual NDA or, if none exists, under Section 8 of these Terms. Each party will use the
          other’s Confidential Information only to exercise rights under these Terms and will protect it with reasonable
          care.
        </p>

        <h2>9 Privacy</h2>
        <p>
          Personal data is processed in accordance with our{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2>10 Compliance & Audit</h2>
        <p>
          Rail Grid operates an ISO / IEC 27001-aligned Information Security Management System. Regulators may request
          audit evidence; you agree to cooperate with reasonable information requests related to your use of the
          Services.
        </p>

        <h2>11 Disclaimer</h2>
        <p>
          Except as expressly set out, the Services are provided “as is” without warranties of any kind. Rail Grid
          disclaims all implied warranties, including merchantability, fitness for a particular purpose and
          non-infringement.
        </p>

        <h2>12 Liability</h2>
        <p>
          Rail Grid’s aggregate liability for any claim under these Terms is limited to the fees paid by you to Rail
          Grid in the preceding 12 months. We are not liable for indirect, consequential or punitive damages.
        </p>

        <h2>13 Indemnity</h2>
        <p>
          You will indemnify Rail Grid against any third-party claim arising from (a) your unlawful use of the Services,
          or (b) data or content you provide that infringes third-party rights.
        </p>

        <h2>14 Termination</h2>
        <p>
          Either party may terminate for material breach if not cured within 30 days of written notice. Upon termination
          you must stop using the Services and delete any Rail Grid confidential material.
        </p>

        <h2>15 Modifications</h2>
        <p>
          We may update these Terms by posting a revised version and changing the “Effective” date. Continued use after
          changes means acceptance.
        </p>

        <h2>16 Governing Law</h2>
        <p>
          These Terms are governed by the laws of Tanzania. Disputes will be resolved by the commercial division of the
          High Court of Tanzania, Dar es Salaam.
        </p>

        <h2>17 Contact</h2>
        <p>Questions? Email legal@railgrid.tz.</p>
      </div>
    </div>
  )
}
