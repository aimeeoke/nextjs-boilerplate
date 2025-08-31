export type WikiEntry = {
  slug: string;           // URL path, e.g., "literature-review"
  title: string;          // Display title
  description?: string;   // Optional short blurb
  embedUrl: string;       // Notion public EMBED link (has /ebd/…)
  notionId?: string;      // Optional: the raw Notion page ID (future native render)
};

export const WIKIS: WikiEntry[] = [
  {
    slug: "literature-review",
    title: "AI Tools for Literature Review",
    description: "Curated tools & workflows for searching, triaging, and synthesizing literature.",
    embedUrl:
      "https://economic-waxflower-192.notion.site/ebd/20fafcab83d780eda9dcee1f02bdb5d3?v=20fafcab83d781ca8d24000ce9c3ed34",
    notionId: "20fafcab83d780eda9dcee1f02bdb5d3"
  }
];
