import FeaturedJobs from "./components/FeaturedJobs";
import Hero from "./components/Hero";
import JobCategory from "./components/JobCategory";

export default function Home() {
  return (
    <main>
      <Hero />
      <JobCategory />
      <FeaturedJobs />
    </main>
  );
}
