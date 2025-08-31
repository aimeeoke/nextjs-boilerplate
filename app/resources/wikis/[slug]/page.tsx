import { notFound } from "next/navigation";
// Prefer the alias below. If your editor complains, use the relative path: "../../../../config/wikis"
import { WIKIS } from "../../../config/wikis";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return WIKIS.map(w => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props) {
  const wiki = WIKIS.find(w => w.slug === params.slug);
  return { title: wiki ? `${wiki.title} – Resources` : "Wiki" };
}

export default function WikiEmbedPage({ params }: Props) {
  const wiki = WIKIS.find(w => w.slug === params.slug);
  if (!wiki) notFound();

  return (
    <section style={{ maxWidth: 1200, margin: "2rem auto", padding: "0 1rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>{wiki.title}</h1>
      {wiki.description && (
        <p style={{ color: "#555", marginBottom: "1rem" }}>{wiki.description}</p>
      )}
      <div style={{ position: "relative", width: "100%", height: "70vh", border: "1px solid #eee" }}>
        <iframe
          src={wiki.embedUrl}
          title={wiki.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
