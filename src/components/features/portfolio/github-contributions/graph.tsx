"use client";

import { format } from "date-fns";
import Link from "next/link";
import {
  type Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";

export function GithubContributionsGraph({
  contributions,
}: {
  contributions: Activity[];
}) {
  return (
    <ContributionGraph
      blockMargin={3}
      blockRadius={2}
      blockSize={10.5}
      className="mx-auto overflow-x-auto font-heading"
      data={contributions}
    >
      <ContributionGraphCalendar className="py-0" title="GitHub Contributions">
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  className={cn(
                    'data-[level="0"]:fill-indigo-50 dark:data-[level="0"]:fill-indigo-700/10',
                    'data-[level="1"]:fill-indigo-100 dark:data-[level="1"]:fill-indigo-700/20',
                    'data-[level="2"]:fill-indigo-200 dark:data-[level="2"]:fill-indigo-700/40',
                    'data-[level="3"]:fill-indigo-300 dark:data-[level="3"]:fill-indigo-700/60',
                    'data-[level="4"]:fill-indigo-400 dark:data-[level="4"]:fill-indigo-700/80'
                  )}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </g>
            </TooltipTrigger>
            <TooltipContent className="font-sans">
              <p>
                {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                on {format(new Date(activity.date), "dd/MM/yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div className="font-mono text-muted-foreground">
              <span className="text-foreground">
                {totalCount.toLocaleString("en")}
              </span>{" "}
              contributions in <span className="text-foreground">{year}</span>{" "}
              on{" "}
              <Link
                className="link-underline text-foreground"
                href={USER.social.github.url}
                rel="noopener"
                target="_blank"
              >
                GitHub
              </Link>
              .
            </div>
          )}
        </ContributionGraphTotalCount>
        <ContributionGraphLegend>
          {({ level }) => (
            <div
              className="group relative flex h-3 w-3 items-center justify-center"
              data-level={level}
            >
              <div
                className={cn(
                  "h-full w-full rounded-xs border border-border",
                  level === 0 ? "bg-indigo-50 dark:bg-indigo-700/10" : "",
                  level === 1 ? "bg-indigo-100 dark:bg-indigo-700/20" : "",
                  level === 2 ? "bg-indigo-200 dark:bg-indigo-700/40" : "",
                  level === 3 ? "bg-indigo-300 dark:bg-indigo-700/60" : "",
                  level === 4 ? "bg-indigo-400 dark:bg-indigo-700/80" : ""
                )}
              />
              <span className="absolute -top-8 hidden rounded bg-popover px-2 py-1 text-popover-foreground text-xs shadow-md group-hover:block">
                Level {level}
              </span>
            </div>
          )}
        </ContributionGraphLegend>
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}

export function GithubContributionsGraphFallback() {
  return <Skeleton className="h-42.5 w-full" />;
}
