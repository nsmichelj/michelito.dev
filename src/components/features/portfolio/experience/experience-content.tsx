export interface Project {
  name: string;
  responsibilities: string[];
}

export function ExperienceContent({
  responsibilities,
}: {
  responsibilities: Project[] | string[];
}) {
  return (
    <ul className="space-y-4">
      {responsibilities.map((item, i) => {
        const isProject = typeof item !== "string";

        const key = isProject ? item.name : `res-${i}`;
        const displayName = isProject ? item.name : item;

        return (
          <li className="space-y-2" key={key}>
            <div className="flex gap-2 text-muted-foreground text-sm">
              <span className="font-mono text-foreground/70">
                {(i + 1).toString().padStart(2, "0")}
              </span>

              <div className="flex flex-col">
                <span
                  className={isProject ? "font-semibold text-foreground" : ""}
                >
                  {displayName}
                </span>

                {isProject && item.responsibilities && (
                  <ul className="mt-2 ml-4 list-inside list-disc space-y-1">
                    {item.responsibilities.map((subRes) => (
                      <li
                        className="text-muted-foreground text-sm leading-relaxed"
                        key={subRes}
                      >
                        {subRes}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
