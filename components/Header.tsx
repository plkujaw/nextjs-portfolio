import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

type Props = {};

export default function Header({}: Props) {
  useEffect(() => {
    const handleNavItemClick = (e: Event) => {
      e.preventDefault();
      const target = (e.target as HTMLAnchorElement).dataset.scrollTo;
      const targetSection = document.querySelector(`#${target}`);
      if (targetSection) {
        targetSection.scrollIntoView();
      }
    };

    const navItems = Array.from(document.querySelectorAll('nav a'));
    navItems.forEach((navItem) => {
      navItem.addEventListener('click', handleNavItemClick);
    });

    return () => {
      navItems.forEach((navItem) => {
        navItem.removeEventListener('click', handleNavItemClick);
      });
    };
  }, []);

  return (
    <header
      className="sticky top-0 py-4 bg-gray-dark z-10"
      id="header"
    >
      <div className="container">
        <nav>
          <ul className="flex flex-row items-center justify-center sm:justify-end gap-[8%] sm:gap-[10%] text-2xl sm:text-3xl">
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.75 }}
              className="leading-none"
            >
              <a
                className="tracking-wider"
                data-scroll-to="about"
                rel="noindex"
              >
                About
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.75 }}
              className="leading-none"
            >
              <a
                className="tracking-wider"
                data-scroll-to="projects"
                rel="noindex"
              >
                Projects
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.75 }}
              className="leading-none"
            >
              <a
                className="tracking-wider"
                data-scroll-to="contact"
                rel="noindex"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
