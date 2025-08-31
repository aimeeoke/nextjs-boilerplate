"use client";
import dynamic from "next/dynamic";

const NotionRenderer = dynamic(
  () => import("react-notion-x").then((m) => m.NotionRenderer),
  { ssr: false }
);

export function Wiki({ recordMap }: { recordMap: any }) {
  return (
    <div className="notion" style={{ maxWidth: 960, margin: "2rem auto", padding: "0 1rem" }}>
      <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={false} />
    </div>
  );
}
