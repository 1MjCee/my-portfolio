import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Header component */}
      <Header />

      {/* Main content */}
      <main>
        {/* Hero section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About section */}
        <section id="about" className="py-16">
          <div className="max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="bg-gray-100 py-16">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <Projects />
          </div>
        </section>

        {/* Contact section */}
        <section
          id="contact"
          className="flex items-center justify-center py-16 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
