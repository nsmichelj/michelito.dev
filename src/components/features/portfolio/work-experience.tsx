import { PageContent, PageWrapper } from "@/components/layout/containers";
import { BorderLine } from "@/components/shared/border-line";
import { BoxCorner } from "@/components/shared/box-corner";
import {
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
} from "@/components/shared/section-header";
import { Experience } from "./experience";
import { GithubContributions } from "./github-contributions";

export function WorkExperienceSection() {
  return (
    <section id="work-experience">
      <PageWrapper>
        <PageContent className="p-4">
          <SectionHeader>
            <SectionEyebrow>Professional Journey</SectionEyebrow>
            <SectionTitle>Work Experience</SectionTitle>
          </SectionHeader>
          <BoxCorner position="bottom-left" />
          <BoxCorner position="bottom-right" />
        </PageContent>
        <BorderLine position="bottom" />
      </PageWrapper>

      <PageWrapper>
        <PageContent>
          <GithubContributions />
          <Experience />
        </PageContent>
      </PageWrapper>
    </section>
  );
}
