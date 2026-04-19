import { Suspense } from "react";
import { getGitHubContributions } from "@/lib/github";
import {
  GithubContributionsGraph,
  GithubContributionsGraphFallback,
} from "./graph";

export async function GithubContributions() {
  const contributions = await getGitHubContributions();
  return (
    <div className="p-4">
      <Suspense fallback={<GithubContributionsGraphFallback />}>
        <div className="space-y-2">
          <span className="inline-block font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Public Activity · Last 12 months
          </span>
          <GithubContributionsGraph contributions={contributions} />
        </div>
      </Suspense>
    </div>
  );
}
