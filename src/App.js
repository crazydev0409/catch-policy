// privacy.tsx
import React from "react";

export default function Privacy() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Privacy Policy</h1>

        <p style={styles.p}>
          Your privacy matters to us.
        </p>

        <p style={styles.p}>
          At Catch ("Catch," "we," "us," or "our"), we're committed to protecting
          your personal information and handling it responsibly. This policy
          explains what data we collect, why we collect it, how we use it, and
          your rights under applicable data protection laws, including GDPR.
        </p>

        <p style={styles.p}>
          Questions? Reach us anytime at{" "}
          <a style={styles.link} href="mailto:privacy@catch.app">
            privacy@catch.app
          </a>
          .
        </p>

        <section style={styles.section}>
          <h2 style={styles.h2}>Who We Are</h2>
          <p style={styles.p}>
            Catch builds tools that help people and businesses coordinate time,
            meetings, and schedules more reliably. We are responsible for ensuring
            your personal data is processed lawfully, securely, and transparently.
          </p>
          <p style={styles.p}>
            To deliver Catch smoothly, we work with trusted third-party providers
            (such as cloud hosting, analytics, and payment services). When we share
            data with them, we require the same level of care and compliance that
            we follow ourselves.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>What Data We Collect</h2>
          <p style={styles.p}>
            We only collect data that's necessary to provide and improve Catch.
          </p>

          <h3 style={styles.h3}>Information You Provide</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Name</li>
            <li style={styles.li}>Email address</li>
            <li style={styles.li}>Account and profile details</li>
            <li style={styles.li}>Subscription and billing information</li>
          </ul>
          <p style={styles.p}>
            Payments are handled by third-party payment processors (such as the App
            Store or Google Play). We do not store full payment details.
          </p>

          <h3 style={styles.h3}>Automatically Collected Data</h3>
          <p style={styles.p}>When you use Catch, we may collect:</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Device information (device type, operating system)</li>
            <li style={styles.li}>IP address</li>
            <li style={styles.li}>Approximate location (based on IP or device settings)</li>
            <li style={styles.li}>Usage data (how features are used, app interactions)</li>
          </ul>
          <p style={styles.p}>
            If the app crashes, we may collect technical diagnostics to improve
            stability. This data is not used to identify you personally.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Why We Collect Your Data</h2>
          <p style={styles.p}>We collect data to:</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Provide and operate Catch</li>
            <li style={styles.li}>Predict and coordinate schedules and arrivals</li>
            <li style={styles.li}>Manage subscriptions and payments</li>
            <li style={styles.li}>Improve performance, reliability, and features</li>
            <li style={styles.li}>Communicate important updates</li>
          </ul>
          <p style={styles.p}>
            We do not use your data for unrelated purposes without your consent.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Data Sharing</h2>
          <p style={styles.p}>
            We do not sell your personal data.
          </p>
          <p style={styles.p}>
            We may share limited data with trusted providers who help us run Catch,
            such as:
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>Payment processors</li>
            <li style={styles.li}>Cloud hosting and infrastructure providers</li>
            <li style={styles.li}>Analytics and performance monitoring services</li>
          </ul>
          <p style={styles.p}>
            Some data may be processed outside the EU/EEA. When this happens, we use
            approved safeguards such as Standard Contractual Clauses to ensure
            GDPR-level protection.
          </p>
          <p style={styles.p}>
            We only share the minimum data necessary for each purpose.
          </p>

          <h3 style={styles.h3}>Location and Scheduling Data</h3>
          <p style={styles.p}>
            Catch may process availability, scheduling, and optional location signals
            to help coordinate plans and predict timing. We focus on patterns and
            outcomes, not content. Private event details are not shared with other
            users or businesses without your permission.
          </p>
          <p style={styles.p}>
            You control what you share and can adjust permissions at any time.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Children's Privacy</h2>
          <p style={styles.p}>Catch is not intended for children under 13.</p>
          <p style={styles.p}>
            We do not knowingly collect personal data from children without parental
            or guardian consent. If we discover such data has been collected without
            consent, we will delete it promptly.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>How We Keep Your Data Safe</h2>
          <p style={styles.p}>
            We use industry-standard security measures, including encryption, access
            controls, and secure infrastructure, to protect your data.
          </p>
          <p style={styles.p}>
            No system is completely secure, but we continuously work to protect your
            data and reduce risk. You're responsible for keeping your account
            credentials confidential.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Legal Basis for Processing</h2>
          <p style={styles.p}>We process personal data based on:</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Your agreement when you create and use a Catch account</li>
            <li style={styles.li}>
              Our legitimate interests in operating and improving Catch, as long as
              they don’t override your rights
            </li>
            <li style={styles.li}>Legal obligations we must comply with</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Who Can Access Your Data</h2>
          <p style={styles.p}>Your data is accessed only by:</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Authorized Catch team members (when necessary)</li>
            <li style={styles.li}>Trusted service providers acting on our behalf</li>
          </ul>
          <p style={styles.p}>
            All parties are required to follow strict confidentiality and
            data-protection standards.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Cookies and Tracking</h2>
          <p style={styles.p}>
            We use cookies and similar technologies on our website to:
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>Keep services running properly</li>
            <li style={styles.li}>Understand usage patterns</li>
            <li style={styles.li}>Improve performance and content</li>
          </ul>
          <p style={styles.p}>
            Details are available in our Cookie Policy.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>How Long We Keep Your Data</h2>
          <p style={styles.p}>
            We keep your data for as long as your account is active. If you delete
            your account, we retain limited data for up to 24 months to meet legal,
            security, or operational requirements. After that, it's deleted or
            anonymized.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Your Rights</h2>
          <p style={styles.p}>
            Under GDPR and similar laws, you have the right to:
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>Access your personal data</li>
            <li style={styles.li}>Correct inaccurate or incomplete data</li>
            <li style={styles.li}>Delete your data</li>
            <li style={styles.li}>Restrict how your data is processed</li>
            <li style={styles.li}>Request portability of your data</li>
            <li style={styles.li}>Object to certain processing</li>
            <li style={styles.li}>Withdraw consent at any time</li>
          </ul>

          <h3 style={styles.h3}>How to Exercise Your Rights</h3>
          <p style={styles.p}>
            Email us at{" "}
            <a style={styles.link} href="mailto:privacy@catch.app">
              privacy@catch.app
            </a>
            . We respond within one month. If a request is complex, we'll keep you
            informed.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Updates to This Policy</h2>
          <p style={styles.p}>
            We may update this policy as Catch evolves or laws change. If updates are
            significant, we'll notify you in-app or by email. Continued use of Catch
            means you accept the updated policy.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Contact</h2>
          <p style={styles.p}>
            Questions or concerns about privacy? Email{" "}
            <a style={styles.link} href="mailto:privacy@catch.app">
              privacy@catch.app
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b0b0c",
    color: "#f5f5f7",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  container: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "48px 20px",
    lineHeight: 1.65,
  },
  h1: { fontSize: 40, margin: "0 0 16px" },
  h2: { fontSize: 22, margin: "28px 0 10px" },
  h3: { fontSize: 18, margin: "18px 0 8px" },
  p: { margin: "10px 0" },
  section: { marginTop: 16 },
  ul: { margin: "10px 0 0 18px" },
  li: { margin: "6px 0" },
  link: { color: "#8ab4ff", textDecoration: "underline" },
};
