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
      className="bg-gray-light text-gray-dark relative"
    >
      <div className="container">
        <div className="inner md:flex md:gap-5 md:items-center overflow-hidden relative">
          <div className="hidden md:block absolute h-screen top-0 left-0 md:w-1/2">
            <img
              ref={imageRef}
              src="/images/me11.jpeg"
              alt="me"
              loading="lazy"
              className="object-cover w-full h-full absolute top-0 left-0 object-center"
              style={{ top: '-15%' }}
            />
          </div>
          <article className="md:w-1/2 ml-auto md:pl-8">
            <p>
              Positively driven web developer with a good eye for
              detail and{' '}
              <span className="text-gray-medium">
                design and layout aesthetics,
              </span>{' '}
              committed to building solid, beautiful and
              <span className="text-gray-medium"> user-focused </span>
              digital products.
            </p>{' '}
            <p>
              Experienced in using{' '}
              <span className="text-gray-medium">
                WordPress, PHP, JavaScript
              </span>{' '}
              who constantly embraces opportunities to expand the
              current skill set.
            </p>
            <p>
              Sustainable lifestyle enthusiast advocating for the
              importance of digital responsibility by{' '}
              <a
                href="https://www.lattimoreandfriends.com/blog/building-wordpress-websites-in-a-sustainable-way"
                target="_blank"
                className="relative text-gray-medium inactive link-underline inline-block"
              >
                actively promoting
              </a>{' '}
              the concept and implementation of sustainable web
              development.
            </p>
          </article>
        </div>
      </div>
    </motion.section>
  );
}
