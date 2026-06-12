import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

interface HomePageProps {
  params: {
    lang: string;
  };
}

export function generateStaticParams() {
  return [
    { lang: "fr" },
    { lang: "en" },
    { lang: "sw" },
  ];
}

export default function HomePage({ params: { lang } }: HomePageProps) {
  return (
    <>
      <Header currentLocale={lang} />
      <main className="relative w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Leadership />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
