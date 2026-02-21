import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Patents from "@/components/Patents";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://davinyoung.com/#profilepage",
  mainEntity: { "@id": "https://davinyoung.com/#person" },
  name: "Davin Young | Staff Software Engineer, Founder & Patent Holder",
  description:
    "Portfolio of Davin Young, a full-stack engineer building enterprise platforms, cloud infrastructure, e-commerce, and scalable systems.",
  url: "https://davinyoung.com",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Patents />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
