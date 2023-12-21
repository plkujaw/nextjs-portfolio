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
    <section id="about" className="bg-gray-light text-gray-dark">
      <div className="container">
        <div className="inner md:flex md:gap-5 md:items-center overflow-hidden relative">
          <div className="hidden md:block absolute h-screen top-0 left-0 md:w-1/2">
            <img
              ref={imageRef}
              src="/images/me.jpeg"
              alt="me"
              loading="lazy"
              className="object-cover w-full h-full absolute top-0 left-0 object-center"
              style={{ top: '-15%' }}
            />
          </div>
          <article className="md:w-1/2 ml-auto md:pl-8">
            <p>
              Sunt sit odit consequuntur enim tenetur, obcaecati dolor
              nulla, ut ea. Minima, ipsam debitis. Sunt sit odit
              consequuntur enim tenetur, obcaecati dolor nulla, ut ea.
              Minima, ipsam debitis.
            </p>{' '}
            <p>
              Sunt sit odit consequuntur enim tenetur, obcaecati dolor
              nulla, ut ea. Minima, ipsam debitis. Sunt sit odit
              consequuntur enim tenetur, obcaecati dolor nulla, ut ea.
              Minima, ipsam debitis.
            </p>{' '}
            <p>
              Sunt sit odit consequuntur enim tenetur, obcaecati dolor
              nulla, ut ea. Minima, ipsam debitis. Sunt sit odit
              consequuntur enim tenetur, obcaecati dolor nulla, ut ea.
              Minima, ipsam debitis.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
