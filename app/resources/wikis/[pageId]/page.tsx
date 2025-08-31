import { notFound } from "next/navigation";
// go up 3 levels from app/resources/wikis/[pageId]/page.tsx
import { notion } from "../../../../lib/notion";
import { Wiki } from "../../../../components/Wiki";

type Props = { params: { pageId: string } };

export default async function WikiPage({ params }: Props) {
  const { pageId } = params;

  try {
    const recordMap = await notion.getPage(pageId);
    return (
      <section>
        <Wiki recordMap={recordMap} />
      </section>
    );
  } catch {
    notFound();
  }
}
