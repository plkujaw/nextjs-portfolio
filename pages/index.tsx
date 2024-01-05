import Projects from '@/components/Projects';
import About from '@/components/About';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import projects from '@/data/projects.js';
import otherWorks from '@/data/otherWorks.js';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Projects data={projects} />
        {/* <Projects works={{ other: true }} data={otherWorks} /> */}
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
