import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function Intro({}: Props) {
  return (
    <section className="intro flex flex-col justify-center pb-[2rem] pt-10 md:pt-20 min-h-[calc(40dvh-8rem)] lg:min-h-[calc(100dvh-8rem)]">
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
            <span className="text-outline">user- and product-focused</span>{' '}
            developer.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
            className="mb-[1em]"
          >
            I build with <span className="text-outline">React, Next.js</span>{' '}
            and <span className="text-outline">TypeScript</span>{' '}
            working closely with teams to bring{' '}
            <span className="text-outline">useful, thoughtful products</span> to
            life.
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
