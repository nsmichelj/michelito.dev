import Link from "next/link";
import { PageContent, PageWrapper } from "@/components/layout/containers";
import { BoxCorner } from "@/components/shared/box-corner";
import { SOURCE_CODE_URL } from "@/data/config";
import { USER } from "@/data/user";
import { GitHubIcon, LinkedInIcon, XIcon } from "../icons";
import { BorderLine } from "../shared/border-line";

export function SiteFooter() {
  return (
    <footer className="bg-background pb-2">
      <PageWrapper>
        <PageContent>
          <div className="flex h-full items-center gap-4">
            <div className="flex w-full flex-col gap-4">
              <div className="space-y-1 py-10">
                <p className="text-center font-mono text-muted-foreground text-sm">
                  Built by{" "}
                  <Link
                    className="text-foreground hover:text-primary"
                    href={USER.social.x.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {USER.nickname}
                  </Link>{" "}
                  with ❤️, the source code is available on{" "}
                  <Link
                    className="text-foreground hover:text-primary"
                    href={SOURCE_CODE_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </p>
                <p className="text-center font-mono text-muted-foreground text-sm">
                  Inspired by chanhdai.com
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-px w-full bg-border" />
                <div className="w-max">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Link
                      className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                      href={USER.social.github.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GitHubIcon className="size-5" />
                    </Link>

                    <Link
                      className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                      href={USER.social.x.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <XIcon className="size-5" />
                    </Link>

                    <Link
                      className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                      href={USER.social.linkedin.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <LinkedInIcon className="size-5" />
                    </Link>
                  </div>
                </div>
                <div className="h-px w-full bg-border" />
              </div>

              <div>
                <h2 className="select-none bg-linear-to-t from-foreground via-foreground/50 to-transparent bg-clip-text text-center font-black font-mono text-[10vw] text-transparent uppercase leading-none tracking-[0.2em] opacity-10 transition-opacity duration-1000 hover:opacity-30 md:text-[6rem]">
                  {USER.nickname}
                </h2>
              </div>
            </div>
          </div>

          <BoxCorner position="bottom-left" />
          <BoxCorner position="bottom-right" />
        </PageContent>
        <BorderLine position="bottom" />
      </PageWrapper>
    </footer>
  );
}
