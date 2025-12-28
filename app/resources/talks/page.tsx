export const metadata = {
  title: "Talks and Presentations | Aimee Oke",
  description:
    "Presentations on AI workflows, literacy, and practical adoption in research administration.",
};

export default function TalksPage() {
  return (
    <article
      style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem", lineHeight: 1.7 }}
    >
      <h1>Talks and Presentations</h1>
      
      <p>
        I present on AI adoption, workflow building, and literacy for research 
        administrators and higher ed professionals. Below are selected presentations 
        with slides available for download.
      </p>

      <section aria-labelledby="presentations" style={{ marginTop: "2.5rem" }}>
        <h2 id="presentations">Presentations</h2>
        
        <div style={{ 
          border: "1px solid #e6e6e6", 
          borderRadius: "12px", 
          padding: "1.5rem", 
          marginTop: "1.5rem",
          background: "#fff"
        }}>
          <h3 style={{ marginTop: 0 }}>Beyond the Scribe: Workflows</h3>
          <p style={{ color: "#666", fontSize: "0.95rem" }}>
            CSU AI Symposium · October 2025
          </p>
          <p>
            Moving from AI as a simple writing assistant to AI as a workflow 
            engine. Introduces the 3D Framework (Define, Develop, Deploy) for 
            building AI workflows in higher education, with practical examples 
            from research administration.
          </p>
          <p style={{ marginTop: "1rem" }}>
            <a 
              href="/presentations/2025-CSU-AI-Symposium-Beyond-the-Scribe.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Download slides (PDF) →
            </a>
          </p>
        </div>
      </section>

      <section aria-labelledby="topics" style={{ marginTop: "2.5rem" }}>
        <h2 id="topics">Topics I Speak On</h2>
        <ul>
          <li>Building AI literacy for research administrators</li>
          <li>The 3D Framework: Define, Develop, Deploy</li>
          <li>Context readiness: why most AI initiatives stall</li>
          <li>Practical AI workflows for grants and compliance</li>
          <li>Human-in-the-loop: responsible AI adoption in higher ed</li>
        </ul>
      </section>

      <section aria-labelledby="invite" style={{ marginTop: "2.5rem" }}>
        <h2 id="invite">Invite Me to Speak</h2>
        <p>
          I'm available for workshops, conference sessions, and team trainings 
          focused on practical AI adoption for research administration. If you're 
          interested in having me present to your group, please{" "}
          <a href="/contact">get in touch</a>.
        </p>
      </section>

      <nav aria-label="Resources navigation" style={{ marginTop: "2.5rem" }}>
        <p>
          <a href="/resources">← Back to Resources</a>
        </p>
      </nav>
    </article>
  );
}
