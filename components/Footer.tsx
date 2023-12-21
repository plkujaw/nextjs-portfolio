type Props = {};

export default function Footer({}: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-gray-light text-gray-dark">
      <div className="container">
        <div className="text-sm py-5 text-center md:text-left">
          <p className="">
            © {currentYear}{' '}
            <span>
              Bulit using Next.js, TailwindCSS and{' '}
              <a
                href="https://www.collletttivo.it/typefaces/apfel-grotezk"
                className="relative link-underline inline-block"
              >
                Apfel Grotezk
              </a>{' '}
              font
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
