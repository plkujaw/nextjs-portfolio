import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

type Props = {};

export default function About({}: Props) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const translateY = scrollY / 6; // Adjust the factor for the desired parallax effect

      if (imageRef.current) {
        imageRef.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${translateY}, 0, 1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section
      initial={{ top: '6rem' }}
      animate={{ top: 0 }}
      transition={{ delay: 1.9, duration: 0.75 }}
      id="about"
      className="about bg-gray-light text-gray-dark relative py-0"
    >
      <div className="container">
        <div className="inner overflow-hidden relative">
          <div className="hidden lg:block absolute h-screen top-0 left-0 lg:w-1/2">
            <img
              ref={imageRef}
              src="/images/me1.jpeg"
              alt="A man with long hair wearing a baseball cap, exuding a casual yet stylish vibe."
              loading="lazy"
              className="object-cover w-full h-full absolute top-0 left-0 object-center"
              style={{ top: '-15%' }}
            />
          </div>
          <article className="py-[5rem] md:w-1/2 ml-auto md:pl-8">
            <p>
              With over two years of commercial experience across modern
              front-end frameworks like
              <span className="text-gray-medium"> React/Next.js</span> and
              <span className="text-gray-medium"> Vue/Nuxt</span> (with{' '}
              <span className="text-gray-medium">TypeScript</span>), and more
              than five years of professional experience in{' '}
              <span className="text-gray-medium">WordPress</span> and{' '}
              <span className="text-gray-medium">PHP</span>, I combine hands-on
              technical skills with clear communication and a practical approach
              to problem-solving.
            </p>
            <p>
              Fluent in leveraging{' '}
              <span className="text-gray-medium">AI-assisted</span> and{' '}
              <span className="text-gray-medium">agentic development</span>{' '}
              workflows, I use emerging tools to{' '}
              <span className="text-gray-medium">accelerate delivery</span> and{' '}
              <span className="text-gray-medium">enhance creativity</span>{' '}
              across the product lifecycle.
            </p>
            <p>
              I work closely with teams and stakeholders to{' '}
              <span className="text-gray-medium">
                turn ideas into useful, maintainable products that make sense
              </span>{' '}
              for both users and the business.
            </p>
          </article>
        </div>
      </div>
    </motion.section>
  );
}
