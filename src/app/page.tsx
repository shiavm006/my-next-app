import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import HomeProjects from "@/components/HomeProjects";
import WorkEx from "@/components/WorkEx";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      {/* <FeaturedCourses /> */}
      {/* <UpcomingWebinars /> */}
      <WorkEx />
      {/* <MusicSchoolTestimonialCard /> */}
      <HomeProjects />
      <Instructors />
      <Footer />
    </main>
  );
}
