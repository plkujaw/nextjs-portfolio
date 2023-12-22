import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function Intro({}: Props) {
  return (
    <section
      className="intro flex flex-col justify-end pb-[8rem] pt-20"
      style={{ minHeight: 'calc(100vh - 8rem)' }}
    >
      <div className="container">
        <div className="text-fs-copy ml-auto sm:w-10/12 leading-none">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-[1em]"
          >
            Hi 👋🏻, I&apos;m Kuba Jawor, a{' '}
            <span className="text-outline">design-oriented</span> web
            developer.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
          >
            I work mostly with{' '}
            <span className="text-outline">WordPress</span> and
            front-end stack, creating{' '}
            <span className="text-outline">custom</span> solutions and
            platforms.
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
