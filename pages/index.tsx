import Projects from '@/components/Projects';
import About from '@/components/About';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
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
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
