export const metadata = {
  title: "Aimee Oke | Practical AI for Research Administration",
  description:
    "Open-access tools, guides, and frameworks to help research administrators build AI literacy and reduce administrative burden.",
};

export default function HomePage() {
  return (
    <article
      style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem", lineHeight: 1.7 }}
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <header style={{ marginBottom: "2rem" }}>
        <h1>Practical AI for Research Administration</h1>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>
          Open-access frameworks, guides, and starting points to help you build 
          AI literacy and reclaim time for the work that matters.
        </p>
      </header>

      <section aria-labelledby="who-i-help">
        <h2 id="who-i-help">Who This Site Is For</h2>
        <p>
          I work with research administrators and research development professionals 
          who know AI matters but aren't sure where to begin. If you've been meaning 
          to learn this stuff, but the landscape feels overwhelming and your to-do 
          list is already full, you're exactly who I built this site for.
        </p>
      </section>

      <section aria-labelledby="why-this-matters">
        <h2 id="why-this-matters">Why This Matters</h2>
        <p>
          Research administration is defined by deadlines, compliance, and the 
          constant pressure to do more with less. AI can help, but most of what's 
          out there is written for tech audiences, not for people managing training 
          grants, coordinating proposals, or keeping programs running.
        </p>
        <p>
          I believe the professionals closest to the work should be the ones shaping 
          how AI gets used in research operations. That means building your own 
          literacy, not waiting for someone else to hand you a policy.
        </p>
      </section>

      <section aria-labelledby="how-i-help">
        <h2 id="how-i-help">What You'll Find Here</h2>
        <p>
          Everything on this site is open-access: frameworks for thinking through 
          AI workflows, curated learning resources, and practical starting points 
          you can use today. I also share what I've learned through workshops, 
          presentations, and collaborations with others working in this space.
        </p>
        <p>
          My goal is simple: help you find your footing so you can reduce 
          administrative burden and reclaim time for the work that actually 
          requires your expertise.
        </p>
      </section>

      <section aria-labelledby="start-here" style={{ marginTop: "2.5rem" }}>
        <h2 id="start-here">Where to Start</h2>
        <div className="grid" role="list">
          <a className="card" href="/resources" role="listitem">
            <h3>Explore Resources</h3>
            <p>Frameworks, guides, and tools to get you started.</p>
          </a>
          <a className="card" href="/about" role="listitem">
            <h3>My AI Journey</h3>
            <p>How I went from curious to fluent in one year.</p>
          </a>
          <a className="card" href="/contact" role="listitem">
            <h3>Get in Touch</h3>
            <p>Questions, collaborations, or just want to connect.</p>
          </a>
        </div>
      </section>
    </article>
  );
}
