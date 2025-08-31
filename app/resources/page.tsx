import { WIKIS } from "../config/wikis";

const gpts = [
  {
    title: "Funding Opportunity Analyzer",
    href: "YOUR-GPT-LINK",
    desc: "Summarizes NIH NOFOs for fit & key requirements."
  },
  {
    title: "Biosketch Builder",
    href: "YOUR-GPT-LINK",
    desc: "Mentoring philosophy + biosketch flow tailored to NIH."
  }
];

const apps = [
  {
    title: "Collaboration Map (demo)",
    href: "#",
    desc: "Explore mentor co-pubs/co-awards. (Coming soon)"
  }
];

export default function ResourcesPage() {
  return (
    <section style={{ maxWidth: 960, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>Resources for Academia</h1>
      <p>Open-access assistants, wikis, and small apps to save time and reduce admin burden.</p>

      {/* GPTs */}
      <h2>Custom GPTs</h2>
      <div className="grid" role="list">
        {gpts.map((g) => (
          <a key={g.title} className="card" href={g.href} target="_blank" rel="noopener noreferrer" role="listitem">
            <h3>{g.title}</h3>
            <p>{g.desc}</p>
          </a>
        ))}
      </div>

      {/* Wikis (from your registry) */}
      <h2>Wikis</h2>
      <div className="grid" role="list">
        {WIKIS.map((w) => (
          <a key={w.slug} className="card" href={`/resources/wikis/${w.slug}`} role="listitem">
            <h3>{w.title}</h3>
            <p>{w.description ?? "Open guide"}{w.description ? "" : ""}</p>
          </a>
        ))}
      </div>

      {/* Apps */}
      <h2>Apps & Demos</h2>
      <div className="grid" role="list">
        {apps.map((a) => (
          <a key={a.title} className="card" href={a.href} role="listitem">
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
