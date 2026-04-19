import {
  BunIcon,
  CloudflareIcon,
  DjangoIcon,
  DockerIcon,
  FastApiIcon,
  GitHubIcon,
  GitIcon,
  JavascriptIcon,
  NextjsIcon,
  NodejsIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  ShadcnIcon,
  TailwindIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@/components/icons";
import { PageContent, PageWrapper } from "@/components/layout/containers";
import {
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
} from "@/components/shared/section-header";
import { Marquee } from "@/components/ui/marquee";

const stack = [
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Bun.js", icon: BunIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Shadcn UI", icon: ShadcnIcon },
  { name: "Python", icon: PythonIcon },
  { name: "FastAPI", icon: FastApiIcon },
  { name: "Django", icon: DjangoIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Vercel", icon: VercelIcon },
  { name: "Cloudflare", icon: CloudflareIcon },
];

export function StackSection() {
  return (
    <section id="stack">
      <PageWrapper>
        <PageContent>
          <div className="border-border border-b p-4">
            <SectionHeader>
              <SectionEyebrow>Technical Capabilities</SectionEyebrow>
              <SectionTitle>Stack</SectionTitle>
            </SectionHeader>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee className="py-4" pauseOnHover>
              {stack.map((item) => (
                <div
                  className="flex w-fit flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-110"
                  key={item.name}
                >
                  <item.icon className="size-6" />
                  <span className="inline-block font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {item.name}
                  </span>
                </div>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 bg-linear-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/4 bg-linear-to-l from-background" />
          </div>

          <div className="flex items-center justify-between border-border border-t bg-muted/10 px-4 py-3">
            <span className="font-mono text-[8px] text-muted-foreground/60 uppercase">
              Core Tools: {stack.length}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="size-1 animate-pulse bg-green-600 dark:bg-green-400" />
              <span className="font-mono text-[8px] text-muted-foreground/60 uppercase">
                Deployed
              </span>
            </div>
          </div>
        </PageContent>
      </PageWrapper>
    </section>
  );
}
