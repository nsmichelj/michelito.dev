import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons";
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
import { Button } from "@/components/ui/button";

const projects = [
  {
    hash: "a8c1f3d",
    message: "feat: build payroll management system",
    title: "Nomicalc",
    subtitle: "Payroll Management System",
    description: [
      "Web application for payroll management developed for the Alcaldía del Municipio Montes (Sucre, Venezuela)",
      "Automates salary processing, deductions, and institutional benefits (bonuses, overtime, vacations, etc.)",
      "Manages employees, departments, positions, and payment records with CRUD operations",
      "Implements role-based authentication and secure access control for sensitive data",
      "Generates administrative reports in PDF and Excel formats for legal and operational use",
    ],
    tags: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript"],
    codeUrl: "",
    liveUrl: "",
  },
  {
    hash: "a91f3c2 ",
    message: "feat: implement employee management web system",
    title: "HospitalStaffPro",
    subtitle: "Employee Management Web System",
    description: [
      "Web-based Human Resource Management system for centralized employee administration",
      "Complete employee lifecycle management (registration, updates, search, and record control)",
      "Advanced filtering and search across roles, departments, locations, and identifiers",
      "Workflow for leave management, medical permissions, and vacation approvals",
      "Role-based access control with secure permissions and data restriction levels",
      "Automated generation of administrative and benefits reports in PDF and Excel formats",
    ],
    tags: [
      "Python",
      "Django",
      "PostgreSQL",
      "Javascript",
      "Next.js",
      "React.js",
      "And Design",
    ],
    codeUrl: "",
    liveUrl: "",
  },
  {
    hash: "c4d8a91",
    message: "feat: introduce astro-first component library",
    title: "OrbitUI",
    subtitle: "A component library for Astro inspired by shadcn/ui",
    description: [
      "Provides copy-paste UI components designed for static and low-interactivity projects",
      "Built with Tailwind CSS for easy customization and design flexibility",
      "Eliminates unnecessary dependencies to improve load performance and developer experience",
      "Includes a flexible theming system for adapting components to different design systems",
      "Offers a CLI tool for managing and integrating components efficiently",
      "Fully typed with TypeScript for improved reliability and developer experience",
    ],
    tags: ["TypeScript", "Astro", "Tailwind CSS"],
    codeUrl: "https://github.com/nsmichelj/orbitui",
    liveUrl: "https://orbitui-docs.vercel.app/",
  },
  {
    hash: "9e3a6f1",
    message: "feat: build color palette generation web application",
    title: "ChromaticUI",
    subtitle: "Advanced Color Palette Generator",
    description: [
      "Generates automatic light/dark color palettes and extracts dominant colors from uploaded images",
      "Provides real-time color manipulation with controls for hue, saturation, and brightness",
      "Includes intelligent color theory suggestions (analogous, complementary, triadic, tetradic, and more)",
      "Offers professional tools such as color blending, contrast checking, and palette optimization for accessibility",
      "Supports multi-format export including Tailwind 3/4, CSS, SCSS, HEX, RGB, HSL, and OKLCH",
      "Includes format converters between HEX, RGB, HSL, and OKLCH for flexible workflows",
      "Stores user palettes locally for persistence and quick access",
    ],
    tags: ["TypeScript", "Astro", "React.js", "Tailwind CSS"],
    codeUrl: "https://github.com/NSMichelJ/ChromaticUI",
    liveUrl: "https://chromaticui.vercel.app/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects">
      <PageWrapper>
        <PageContent className="p-4">
          <SectionHeader>
            <SectionEyebrow>Selected Works</SectionEyebrow>
            <SectionTitle>Projects</SectionTitle>
          </SectionHeader>
          <BoxCorner position="bottom-left" />
          <BoxCorner position="bottom-right" />
        </PageContent>
        <BorderLine position="bottom" />
      </PageWrapper>
      <PageWrapper>
        <PageContent>
          <Accordion
            className="w-full"
            defaultValue={[projects[0].hash]}
            type="multiple"
          >
            {projects.map((project, i) => (
              <AccordionItem key={project.hash} value={project.hash}>
                <AccordionTrigger className="rounded-none px-4 transition-colors hover:bg-muted/30 hover:no-underline">
                  <div className="flex flex-col gap-1 text-left">
                    <CommitLabel
                      hash={project.hash}
                      isHead={i === 0}
                      message={project.message}
                    />
                    <span className="font-bold text-lg">{project.title}</span>
                    <span className="font-bold text-muted-foreground text-sm">
                      {project.subtitle}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="h-auto pt-2 pb-4">
                  <div className="px-4">
                    <div className="flex flex-col gap-3">
                      <ul className="mt-2 ml-4 list-inside list-disc space-y-1">
                        {project.description.map((description) => (
                          <li
                            className="text-muted-foreground text-sm leading-relaxed"
                            key={description}
                          >
                            {description}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            className="w-max rounded-sm border border-border bg-muted/30 px-2 py-1 text-[10px] text-muted-foreground uppercase"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button
                          asChild={!!project.codeUrl}
                          disabled={!project.codeUrl}
                          size="icon"
                          variant="outline"
                        >
                          {project.codeUrl ? (
                            <Link href={project.codeUrl} target="_blank">
                              <GitHubIcon />
                              <span className="sr-only">View Code</span>
                            </Link>
                          ) : (
                            <>
                              <GitHubIcon />
                              <span className="sr-only">Code Private</span>
                            </>
                          )}
                        </Button>
                        <Button
                          asChild={!!project.liveUrl}
                          disabled={!project.liveUrl}
                          size="icon"
                          variant="secondary"
                        >
                          {project.liveUrl ? (
                            <Link href={project.liveUrl} target="_blank">
                              <ExternalLink />
                              <span className="sr-only">Live Demo</span>
                            </Link>
                          ) : (
                            <>
                              <ExternalLink />
                              <span className="sr-only">Demo N/A</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
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
