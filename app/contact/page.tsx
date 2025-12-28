export const metadata = {
  title: "Contact | Aimee Oke",
  description:
    "Get in touch with Aimee Oke for questions, collaborations, or speaking invitations related to AI in research administration.",
};

export default function ContactPage() {
  return (
    <article
      style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem", lineHeight: 1.7 }}
    >
      <h1>Get in Touch</h1>

      <p>
        I love hearing from fellow research administrators, especially those 
        figuring out how AI fits into their work. Whether you have a question, 
        want to share what you're building, or just want to connect, I'm happy 
        to hear from you.
      </p>

      <section aria-labelledby="contact-info" style={{ marginTop: "2rem" }}>
        <h2 id="contact-info">Contact Information</h2>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:hello@aimeeoke.ai">hello@aimeeoke.ai</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a 
            href="https://www.linkedin.com/in/aimeeoke/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin.com/in/aimeeoke
          </a>
        </p>
      </section>

      <section aria-labelledby="open-to" style={{ marginTop: "2rem" }}>
        <h2 id="open-to">I'm Open To</h2>
        <ul>
          <li>
            <strong>Questions from research admins</strong> — If you're stuck or 
            just getting started, I'm happy to point you in the right direction.
          </li>
          <li>
            <strong>Speaking invitations</strong> — Workshops, conference sessions, 
            and team trainings on AI adoption for research administration.
          </li>
          <li>
            <strong>Collaborations</strong> — If you're working on something that 
            helps research professionals use AI responsibly, let's talk.
          </li>
          <li>
            <strong>Feedback on this site</strong> — If something here helped you 
            or if you see something missing, I'd love to know.
          </li>
        </ul>
      </section>

      <section aria-labelledby="response-time" style={{ marginTop: "2rem" }}>
        <h2 id="response-time">A Note on Response Time</h2>
        <p>
          I have a full-time job as Associate Director of Research for my college at CSU, so I may 
          not respond immediately. But I do read everything and will get back to 
          you as soon as I can.
        </p>
      </section>

      <nav aria-label="Site navigation" style={{ marginTop: "2.5rem" }}>
        <p>
          <a href="/resources">← Explore resources</a>
          {" "} | {" "}
          <a href="/about">Learn more about me</a>
        </p>
      </nav>
    </article>
  );
}
