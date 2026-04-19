import { PageContent, PageWrapper } from "@/components/layout/containers";
import { BorderLine } from "@/components/shared/border-line";
import { BoxCorner } from "@/components/shared/box-corner";
import { CommitLabel } from "@/components/shared/commit-label";
import {
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
} from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const educationData = [
  {
    hash: "e4d1u2c",
    message: "feat: complete technical degree in computer science",
    institution:
      "Universidad Politécnica Territorial del Oeste de Sucre “Clodosbaldo Russian” (extensión Montes)",
    location: "Cumanacoa, Venezuela",
    date: "2023",
    degree: "Associate's Degree in Informatics (T.S.U. en Informática)",
    achievements: [
      "Graduated with top GPA of the class",
      "Active participation in academic and technology fairs",
      "Strong academic performance in software development and engineering fundamentals",
      "Hands-on experience through real-world system development projects",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education">
      <PageWrapper>
        <PageContent className="p-4">
          <SectionHeader>
            <SectionEyebrow>Academic Background</SectionEyebrow>
            <SectionTitle>Education</SectionTitle>
          </SectionHeader>
          <BoxCorner position="bottom-left" />
          <BoxCorner position="bottom-right" />
        </PageContent>
        <BorderLine position="bottom" />
      </PageWrapper>

      <PageWrapper>
        <PageContent>
          <Accordion defaultValue={[educationData[0].hash]} type="multiple">
            {educationData.map((edu, i) => (
              <AccordionItem key={edu.hash} value={edu.hash}>
                <AccordionTrigger className="rounded-none px-4 transition-colors hover:bg-muted/30 hover:no-underline">
                  <div className="flex flex-col gap-1 text-left">
                    <CommitLabel
                      hash={edu.hash}
                      isHead={i === 0}
                      message={edu.message}
                    />
                    <span className="font-bold text-lg leading-tight">
                      {edu.degree}
                    </span>
                    <span className="font-medium text-muted-foreground text-sm">
                      {edu.institution}
                    </span>
                    <span className="inline-block font-mono text-[11px] text-muted-foreground tracking-widest">
                      Date: {edu.date}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="h-auto">
                  <div className="p-4 pt-0">
                    <ul className="mt-2 ml-4 list-inside list-disc space-y-1">
                      {edu.achievements.map((achievement) => (
                        <li
                          className="text-muted-foreground text-sm leading-relaxed"
                          key={achievement}
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </PageContent>
      </PageWrapper>
    </section>
  );
}
