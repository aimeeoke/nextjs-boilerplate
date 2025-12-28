export const metadata = {
  title: "Resources | Aimee Oke",
  description:
    "Frameworks, guides, and curated resources to help research administrators integrate AI into their workflows.",
};

export default function ResourcesPage() {
  return (
    <article
      style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem", lineHeight: 1.7 }}
    >
      <h1>Resources</h1>
      <p>
        Everything here is open-access and built for research administrators who 
        want to start using AI practically and responsibly. Whether you're just 
        getting oriented or ready to build your first workflow, there's a starting 
        point for you.
      </p>

      <section aria-labelledby="assess" style={{ marginTop: "2rem" }}>
        <h2 id="assess">Assess Where You Are</h2>
        <div className="grid" role="list">
          <a className="card" href="https://atomgrants.com/resources" target="_blank" rel="noopener noreferrer" role="listitem">
            <h3>AI Readiness Self-Assessment</h3>
            <p>
              A quick diagnostic I collaborated on with Atom Grants, designed 
              specifically for research development professionals.
            </p>
          </a>
        </div>
      </section>

      <section aria-labelledby="frameworks" style={{ marginTop: "2rem" }}>
        <h2 id="frameworks">Frameworks</h2>
        <div className="grid" role="list">
          <a className="card" href="/resources/context-readiness" role="listitem">
            <h3>The 4 Hurdles: Context Readiness</h3>
            <p>
              Why most research offices struggle to get started with AI, and what 
              to do about it.
            </p>
          </a>
          <a className="card" href="/resources/3d-framework" role="listitem">
            <h3>The 3D Framework</h3>
            <p>
              Define, Develop, Deploy: a practical method for building AI workflows 
              in higher ed.
            </p>
          </a>
        </div>
      </section>

      <section aria-labelledby="learning" style={{ marginTop: "2rem" }}>
        <h2 id="learning">Build Your AI Literacy</h2>
        <div className="grid" role="list">
          <a className="card" href="/resources/ai-literacy" role="listitem">
            <h3>Curated Learning Resources</h3>
            <p>
              Podcasts, books, substacks, and courses I recommend for building 
              real AI fluency.
            </p>
          </a>
        </div>
      </section>

      <section aria-labelledby="talks" style={{ marginTop: "2rem" }}>
        <h2 id="talks">Talks and Presentations</h2>
        <div className="grid" role="list">
          <a className="card" href="/resources/talks" role="listitem">
            <h3>Speaking and Workshops</h3>
            <p>
              Presentations I've given on AI workflows, literacy, and practical 
              adoption in research administration.
            </p>
          </a>
        </div>
      </section>

      <section aria-labelledby="coming-soon" style={{ marginTop: "2rem" }}>
        <h2 id="coming-soon">Coming Soon</h2>
        <div className="grid" role="list">
          <div className="card" style={{ opacity: 0.6, cursor: "default" }} role="listitem">
            <h3>Understanding LLMs: A Visual Guide</h3>
            <p>
              An illustrated explainer of how large language models actually work. 
              Currently in development.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
