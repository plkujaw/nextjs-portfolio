import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function Intro({}: Props) {
  return (
    <section
      className="intro flex flex-col justify-end pb-[2rem] pt-10 md:pt-20"
      style={{ minHeight: 'calc(100svh - 8rem)' }}
    >
      <div className="container">
        <div className="text-fs-copy ml-auto sm:w-4/5 leading-none">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-[1em]"
          >
            Hi{' '}
            <img
              src="/images/wave.svg"
              alt="Waving Hand Emoji"
              className="inline-block w-[1em] align-text-top wave"
              width={32}
              height={32}
              loading="lazy"
            />
            , I&apos;m Kuba Jawor, a{' '}
            <span className="text-outline">
              design and sustainability-oriented
            </span>{' '}
            developer.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
            className="mb-[1em]"
          >
            I work mostly with{' '}
            <span className="text-outline">
              WordPress and front-end stack, {''}
            </span>
            creating bespoke solutions and products.
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
