import React from 'react';

type Props = {};

export default function Contact({}: Props) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="text-fs-title">Get in touch</h2>
        <ul className="text-fs-list text-gray-light">
          <li>
            <a
              className="inactive"
              href="mailto:hello@kubajawor.dev"
              target="_blank"
            >
              - email
            </a>
          </li>
          <li>
            <a
              className="inactive"
              href="https://instagram.com/plkujaw"
              target="_blank"
            >
              - instagram
            </a>
          </li>
          <li>
            <a
              className="inactive"
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
