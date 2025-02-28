// src/app/page.jsx
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header spans full width */}
      <Header />
      
      {/* Main content - needs explicit centering */}
      <main className="flex-grow">
        {/* Each section is full width but content is centered */}
        <Hero />
        <About />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}