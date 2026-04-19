import { AboutMeSection } from "@/components/features/portfolio/about-me";
import { EducationSection } from "@/components/features/portfolio/education";
import { ProfileContent } from "@/components/features/portfolio/profile-content";
import { ProfileHeader } from "@/components/features/portfolio/profile-header";
import { ProjectsSection } from "@/components/features/portfolio/projects";
import { StackSection } from "@/components/features/portfolio/stack";
import { WorkExperienceSection } from "@/components/features/portfolio/work-experience";
import { SectionDivider } from "@/components/shared/section-divider";

export default function Home() {
  return (
    <>
      <ProfileHeader />
      <ProfileContent />
      <SectionDivider />
      <AboutMeSection />
      <SectionDivider />
      <WorkExperienceSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <StackSection />
      <SectionDivider />
    </>
  );
}
