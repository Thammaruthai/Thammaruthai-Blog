import { NavBar } from "../components/navbar";
import { HeroSection } from "../components/herosextion";
import { Footer } from "../components/footer";
import { ArticlesSection } from "../components/articles";

export function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticlesSection />
      <Footer />
    </>
  );
}
