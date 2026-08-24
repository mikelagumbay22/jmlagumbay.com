import { EMAIL, LINKEDIN_URL, GITHUB_URL } from "../constants";

export default function Footer() {
  return (
    <footer className="w-full bg-onyx-black border-t border-border-subtle">
      <div className="flex flex-col md:flex-row justify-between items-center py-stack-lg px-gutter max-w-container-max mx-auto">
        <div className="font-label-caps text-label-caps text-on-surface mb-4 md:mb-0">
          JM LAGUMBAY
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4 md:mb-0 text-center">
          © 2026 JM Lagumbay. Built with React &amp; Tailwind.
        </p>
        <ul className="flex gap-6 font-body-md text-body-md">
          <li>
            <a
              className="text-on-surface-variant hover:text-electric-lime transition-colors focus:outline-none focus:ring-1 focus:ring-electric-lime rounded"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-on-surface-variant hover:text-electric-lime transition-colors focus:outline-none focus:ring-1 focus:ring-electric-lime rounded"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-on-surface-variant hover:text-electric-lime transition-colors focus:outline-none focus:ring-1 focus:ring-electric-lime rounded"
              href={`mailto:${EMAIL}`}
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}


