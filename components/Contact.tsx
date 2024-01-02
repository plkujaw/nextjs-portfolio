import React from 'react';

type Props = {};

export default function Contact({}: Props) {
  return (
    <section
      className="contact bg-gray-light text-gray-dark"
      id="contact"
    >
      <div className="container">
        <h2 className="text-fs-title leading-none">Get in touch</h2>
        <ul className="text-fs-list">
          <li>
            <a
              className="inactive-dark"
              href="mailto:hello@kubajawor.dev"
              target="_blank"
            >
              - email
            </a>
          </li>
          <li>
            <a
              className="inactive-dark"
              href="https://instagram.com/plkujaw"
              target="_blank"
            >
              - instagram
            </a>
          </li>
          <li>
            <a
              className="inactive-dark"
              href="https://linkedin.com/in/kubajawor"
              target="_blank"
            >
              - linkedin
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
