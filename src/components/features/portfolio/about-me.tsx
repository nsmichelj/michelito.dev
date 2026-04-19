import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageContent, PageWrapper } from "@/components/layout/containers";
import { BorderLine } from "@/components/shared/border-line";
import { BoxCorner } from "@/components/shared/box-corner";
import {
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
} from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { USER } from "@/data/user";

export function AboutMeSection() {
  return (
    <section id="about-me">
      <PageWrapper>
        <PageContent>
          <SectionHeader className="p-4">
            <SectionEyebrow>Profile Overview</SectionEyebrow>
            <SectionTitle>About Me</SectionTitle>
          </SectionHeader>
          <BoxCorner position="bottom-left" />
          <BoxCorner position="bottom-right" />
        </PageContent>
        <BorderLine position="bottom" />
      </PageWrapper>
      <PageWrapper>
        <PageContent className="border-t-0 p-0">
          <div className="flex flex-col divide-y divide-border md:flex-row md:divide-x md:divide-y-0">
            <div className="flex-1 p-6 md:p-8">
              <div className="max-w-xl space-y-6 text-sm leading-relaxed md:text-base">
                <p>
                  I'm a{" "}
                  <span className="font-bold">Full Stack Web Developer</span>{" "}
                  with 3+ years of experience building scalable web
                  applications, high-converting landing pages, and efficient
                  management systems.
                </p>

                <p className="border-border border-l-2 pl-6 text-muted-foreground italic">
                  I focus on delivering{" "}
                  <span className="font-bold">clean, maintainable code</span>{" "}
                  and practical solutions that prioritize performance and user
                  experience.
                </p>

                <p>
                  Beyond development, I help developers grow by providing{" "}
                  <span className="font-bold">
                    programming tutoring and debugging support
                  </span>{" "}
                  to solve real-world problems and optimize existing projects.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 bg-muted/5 p-6 md:w-48 md:p-8">
              <div className="space-y-1">
                <SectionEyebrow>Experience</SectionEyebrow>
                <div className="font-bold text-xs uppercase">3+ Years</div>
              </div>
              <div className="space-y-1">
                <SectionEyebrow>Focus Area</SectionEyebrow>
                <div className="font-bold text-xs uppercase">
                  Web Development
                </div>
              </div>
              <div className="mt-auto">
                <Button asChild variant="outline">
                  <Link href={USER.resume} target="_blank">
                    Resume <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </PageContent>
      </PageWrapper>
    </section>
  );
}
