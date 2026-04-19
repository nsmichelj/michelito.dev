import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { PageContent, PageWrapper } from "@/components/layout/containers";
import { BoxCorner } from "@/components/shared/box-corner";
import { SectionEyebrow } from "@/components/shared/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TextFlip } from "@/components/ui/text-flip";
import { USER } from "@/data/user";

export function ProfileContent() {
  return (
    <section>
      <PageWrapper>
        <PageContent>
          <div className="flex h-full items-center gap-4 p-4">
            <Avatar className="size-24 md:size-32">
              <AvatarImage alt={USER.fullName} className="" src={USER.avatar} />
              <AvatarFallback>{USER.initials}</AvatarFallback>
            </Avatar>
            <div className="flex w-full flex-col gap-4">
              <div className="space-y-1">
                <div>
                  <SectionEyebrow>Ready to work</SectionEyebrow>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-3xl">{USER.fullName}</h1>
                    <BadgeCheck className="size-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>

                <TextFlip
                  className="text-balance font-mono text-muted-foreground text-sm"
                  interval={2.5}
                  variants={{
                    initial: { y: -10, opacity: 0 },
                    animate: { y: -1, opacity: 1 },
                    exit: { y: 10, opacity: 0 },
                  }}
                >
                  {USER.flipTitles}
                </TextFlip>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary text-sm">
                    +{USER.experience.years}
                  </span>
                  <span className="text-muted-foreground">
                    Years of Experience
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary text-sm">
                    +{USER.experience.projects}
                  </span>
                  <span className="text-muted-foreground">
                    Projects Completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-border border-t">
            <div className="grid grid-cols-3">
              <Link
                className="flex items-center justify-center px-2 py-3 hover:bg-muted/30"
                href={USER.social.github.url}
                target="_blank"
              >
                <GitHubIcon className="size-5" />
              </Link>
              <Link
                className="flex items-center justify-center border-border border-x px-2 py-3 hover:bg-muted/30"
                href={USER.social.x.url}
                target="_blank"
              >
                <XIcon className="size-5" />
              </Link>
              <Link
                className="flex items-center justify-center px-2 py-3 hover:bg-muted/30"
                href={USER.social.linkedin.url}
                target="_blank"
              >
                <LinkedInIcon className="size-5" />
              </Link>
            </div>
          </div>

          <BoxCorner position="bottom-left" />
          <BoxCorner position="bottom-right" />
          <BoxCorner position="top-left" />
          <BoxCorner position="top-right" />
        </PageContent>
      </PageWrapper>
    </section>
  );
}
