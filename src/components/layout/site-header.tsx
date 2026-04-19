import Link from "next/link";
import { GitHubIcon } from "@/components/icons";
import { PageContent, PageWrapper } from "@/components/layout/containers";
import { BorderLine } from "@/components/shared/border-line";
import { BoxCorner } from "@/components/shared/box-corner";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SOURCE_CODE_URL } from "@/data/config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen bg-background/80 pt-2 backdrop-blur">
      <PageWrapper>
        <PageContent>
          <div className="relative h-12 w-full px-4">
            <div className="flex h-full items-center justify-between">
              <Link href="/">
                <span className="font-bold font-heading text-lg">
                  Michelito
                </span>
              </Link>

              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button asChild size="icon" variant="ghost">
                      <Link className="text-foreground" href={SOURCE_CODE_URL}>
                        <GitHubIcon />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-mono text-sm">Star on GitHub</p>
                  </TooltipContent>
                </Tooltip>

                <Separator
                  className="data-vertical:h-4 data-vertical:self-center"
                  orientation="vertical"
                />
                <ThemeToggle />
              </div>
            </div>

            <BoxCorner position="top-left" />
            <BoxCorner position="top-right" />
            <BoxCorner position="bottom-left" />
            <BoxCorner position="bottom-right" />
          </div>
        </PageContent>

        <BorderLine position="top" />
        <BorderLine position="bottom" />
      </PageWrapper>
    </header>
  );
}
