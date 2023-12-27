import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': 'hsl(0,0%,20%)',
        'gray-medium': 'hsl(0,0%,46%)',
        'gray-light': 'hsl(0,0%,98%)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      fontSize: {
        'fs-copy': 'clamp(2rem,5vw,4rem)',
        'fs-list': 'clamp(2.2rem,5vw,3.8rem)',
        'fs-title': 'clamp(3.2rem,8vw,6rem)',
        'fs-body': 'clamp(1.4rem,2.5vw,2rem)',
        'fs-medium': '1.4rem',
        'fs-normal': '1.2rem',
      },
      fontFamily: {
        regular: ['ApfelGrotezk Regular'],
        medium: ['ApfelGrotezk Medium'],
      },
    },
    plugins: [],
  },
};
export default config;
