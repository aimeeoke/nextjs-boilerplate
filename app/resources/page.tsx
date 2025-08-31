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
          <li>
            <a href="/resources/wikis/20fafcab83d780eda9dcee1f02bdb5d3">
            AI Tools for Literature Review (Notion)
            </a>
        </li>
        <li>Custom GPT Prompt Library — (Notion embed coming soon)</li>
      </ul>

      <h2>Apps & Demos</h2>
      <ul>
        <li>Collaboration Map (demo) — coming soon</li>
      </ul>
    </section>
  );
}
