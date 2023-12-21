import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <svg
          id="cursor-container"
          width="46"
          height="40"
          viewBox="0 0 64 40"
        >
          <g id="cursor">
            <circle
              id="main"
              cx="28"
              cy="15"
              r="14"
              stroke="#222222"
              strokeWidth="3"
            ></circle>
          </g>
        </svg>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
