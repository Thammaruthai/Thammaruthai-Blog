import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/navbar";
import { HeroSection } from "./components/herosextion";
import { Footer } from "./components/footer";
import { ArticlesSection } from "./components/articles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticlesSection />
      <Footer />
    </>
  );
}

export default App;
