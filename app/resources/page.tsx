export default function ResourcesPage() {
  return (
    <section style={{maxWidth:960, margin:"2rem auto", padding:"0 1rem"}}>
      <h1>Resources for Academia</h1>
      <p>
        Open-access assistants, wikis, and small apps to save time and reduce
        admin burden.
      </p>

      <h2>Custom GPTs</h2>
      <ul>
        <li>
          <a href="YOUR-GPT-LINK" target="_blank">
            Funding Opportunity Analyzer
          </a>{" "}
          — summarizes NIH NOFOs for fit & requirements.
        </li>
        <li>
          <a href="YOUR-GPT-LINK" target="_blank">
            Biosketch Builder
          </a>{" "}
          — mentoring philosophy + biosketch flow.
        </li>
      </ul>

      <h2>Wikis</h2>
      <ul>
        <li>Training Grants Wiki — (Notion embed coming soon)</li>
        <li>Research Day SOP — (Notion embed coming soon)</li>
      </ul>

      <h2>Apps & Demos</h2>
      <ul>
        <li>Collaboration Map (demo) — coming soon</li>
      </ul>
    </section>
  );
}
