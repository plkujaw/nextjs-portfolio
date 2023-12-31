import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const detectMobile = () => {
      const userAgent = window.navigator.userAgent;
      const isMobileDevice =
        /(Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Mobile|Kindle|Silk|PlayBook|Xoom|Palm|Symbian|Nokia|LG|Samsung|SonyEricsson|Nexus|HTC|Motorola|Dell|Asus|Fujitsu|HP|ZTE|Mobi|Tablet|Mobile|mini|Sony|CriOS|Chrome|FxiOS|Firefox|Opera Mini|OPiOS|Edg|EdgA|UCBrowser).*AppleWebKit.*|(BlackBerry|Baiduspider|Googlebot|Yahoo! Slurp|Bingbot|Facebook|Twitter|LinkedIn|Pinterest|WhatsApp).*Mobile.*/.test(
          userAgent
        );

      setIsMobile(isMobileDevice);
      document.body.classList.toggle('mobile', isMobileDevice);
    };

    detectMobile();

    const handleResize = () => {
      detectMobile();
    };

    window.addEventListener('resize', handleResize);

    const cursorContainer = document.querySelector(
      '#cursor-container'
    ) as HTMLElement;

    if (!document.body.classList.contains('mobile')) {
      document.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        if (cursorContainer) {
          cursorContainer.style.left = `${x}px`;
          cursorContainer.style.top = `${y}px`;
        }
      });
    }

    const handleMouseDown = () => {
      document.body.classList.add('cursor-down');
    };

    const handleMouseUp = () => {
      document.body.classList.remove('cursor-down');
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const handleLinkHover = () => {
      document.body.classList.add('cursor-hover');
    };

    const handleLinkLeave = () => {
      document.body.classList.remove('cursor-hover');
    };

    const links = document.querySelectorAll('a, button');

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home | kubajawor.dev</title>
        <meta
          name="description"
          content="Kuba Jawor, a design and sustainability oriented developer."
          key="desc"
        />
        <meta
          property="og:title"
          content="Kuba Jawor | kubajawor.dev"
        />
        <meta
          property="og:description"
          content="Kuba Jawor, a design and sustainability oriented developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kubajawor.dev" />
        <meta
          property="og:image"
          content="https://kubajawor.dev/images/og-kj.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
