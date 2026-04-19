import { PageContent, PageWrapper } from "@/components/layout/containers";
import { BorderLine } from "./border-line";
import { BoxCorner } from "./box-corner";

export function SectionDivider() {
  return (
    <PageWrapper className="h-10">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "var(--background)",
          backgroundImage: `
            radial-gradient(circle at 25% 25%, var(--border) 0.5px, transparent 2px),
            radial-gradient(circle at 75% 75%, var(--border) 0.5px, transparent 2px)
          `,
          backgroundSize: "10px 10px",
          imageRendering: "pixelated",
        }}
      />
      <PageContent className="h-10">
        <BoxCorner position="top-left" />
        <BoxCorner position="top-right" />
        <BoxCorner position="bottom-left" />
        <BoxCorner position="bottom-right" />
      </PageContent>
      <BorderLine position="top" />
      <BorderLine position="bottom" />
    </PageWrapper>
  );
}
