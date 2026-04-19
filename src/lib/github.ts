import { cacheLife, cacheTag } from "next/cache";
import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { USER } from "@/data/user";

export interface GitHubContributionsResponse {
  contributions: Activity[];
}

export async function getGitHubContributions(): Promise<Activity[]> {
  "use cache";
  cacheLife("days");
  cacheTag("github-contributions");

  try {
    const res = await fetch(
      `${process.env.GITHUB_CONTRIBUTIONS_API_URL}/v4/${USER.social.github.username}?y=last`
    );
    const data = (await res.json()) as GitHubContributionsResponse;
    return data.contributions;
  } catch (error) {
    console.error(error);
    return [];
  }
}
