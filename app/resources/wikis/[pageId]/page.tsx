import { notion } from "@/app/lib/notion";
import { Wiki } from "@/app/components/Wiki";
import { notFound } from "next/navigation";

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
