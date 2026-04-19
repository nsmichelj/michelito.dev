import { CommitLabel } from "@/components/shared/commit-label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExperienceContent, type Project } from "./experience-content";

interface Experience {
  company: string;
  date: string;
  hash: string;
  message: string;
  position: string;
  responsibilities: Project[] | string[];
}

const experienceData: Experience[] = [
  {
    company: "Alcaldía del Municipio Montes - Venezuela",
    date: "2024 - Present",
    hash: "a1f9c3d",
    message: "feat: joined as full stack developer",
    position: "Full Stack Web Developer",
    responsibilities: [
      {
        name: "Payroll Management System",
        responsibilities: [
          "Development of a payroll system including salary calculation logic and reporting modules",
          "Reduced internal processing times by approximately 20%",
          "Continuous maintenance and production support",
          "Optimization of critical administrative workflows related to payroll and HR operations",
        ],
      },
      {
        name: "Database Modernization",
        responsibilities: [
          "Migrated legacy Microsoft Access system to PostgreSQL",
          "Redesigned the entire database schema",
          "Reduced database size by approximately 80%",
          "Improved data integrity, consistency, and query performance",
        ],
      },
      {
        name: "Data Automation Pipelines",
        responsibilities: [
          "Developed Python scripts for large-scale Excel data processing",
          "Automated generation of complex administrative reports",
          "Significantly reduced manual data processing workload",
        ],
      },
    ],
  },
  {
    company: "Freelance / Independent Projects",
    date: "2024 - Present",
    hash: "b2g9d4f",
    message: "feat: started freelance full-stack development",
    position: "Freelance Full Stack Developer",
    responsibilities: [
      {
        name: "Custom Web Solutions",
        responsibilities: [
          "Developed bespoke management systems and e-commerce platforms",
          "Created modern, responsive landing pages optimized for SEO",
          "Maintenance and support of existing web applications",
        ],
      },
    ],
  },
  {
    company: "Hospital I Dr. Luis Daniel Beauperthuy",
    date: "2023 - 2024",
    hash: "c3d4e5f",
    message: "feat: started as junior full stack developer",
    position: "Junior Full Stack Developer",
    responsibilities: [
      {
        name: "HR Employee Management",
        responsibilities: [
          "Led the development of a web-based employee management system for HR",
          "Developed a web-based employee management system for HR operations",
          "Participated in requirement gathering and functional system design",
          "Reduced management processing time by approximately 30%",
        ],
      },
    ],
  },
];

export function Experience() {
  return (
    <Accordion
      className="w-full"
      defaultValue={[experienceData[0].hash]}
      type="multiple"
    >
      {experienceData.map((experience, i) => (
        <AccordionItem
          className="border-border border-b-0 first:border-t"
          key={experience.hash}
          value={experience.hash}
        >
          <AccordionTrigger className="rounded-none px-4 transition-colors hover:bg-muted/30 hover:no-underline">
            <div className="flex flex-col gap-1 text-left">
              <CommitLabel
                hash={experience.hash}
                isHead={i === 0}
                message={experience.message}
              />
              <span className="font-bold text-lg">{experience.position}</span>
              <span className="font-bold text-muted-foreground text-sm">
                {experience.company}
              </span>
              <span className="mt-1 inline-block font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest">
                {experience.date}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="h-auto pt-2 pb-4">
            <div className="px-4">
              <ExperienceContent
                responsibilities={experience.responsibilities}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
