import { PageContent, PageWrapper } from "@/components/layout/containers";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import TextParticles from "@/components/ui/particles-text";

export function ProfileHeader() {
  return (
    <div>
      <PageWrapper>
        <PageContent>
          <div className="absolute inset-0 top-0 right-0 left-0 z-0 h-25 overflow-hidden">
            <FlickeringGrid
              className="h-full w-full"
              color="#6B7280"
              gridGap={2}
              squareSize={2}
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-2xl overflow-hidden text-center">
            <div className="h-60">
              <TextParticles
                colors={["#6B7280"]}
                fontSize={70}
                gap={5}
                particleSize={1}
                text="MICHELITO"
              />
            </div>
          </div>
        </PageContent>
        <div className="absolute bottom-0 left-0 z-1 h-px w-full bg-border" />
      </PageWrapper>
    </div>
  );
}
