import Projects from '@/components/Projects';
import About from '@/components/About';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import projects from '@/data/projects.js';
import otherWorks from '@/data/otherWorks.js';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata: Metadata = {
  title: '...',
  description: '...',
};

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
    </>
  );
}
