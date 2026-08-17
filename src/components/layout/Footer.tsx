import { LINKEDIN_URL } from "../../data/content";

const links = [
  { href: "#experience", label: "Professional Experience" },
  { href: "#projects", label: "Personal Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-serif text-2xl italic font-medium tracking-normal text-ink">Sauvik Banerjee</div>
            <div className="mt-2 text-sm text-mute">Content, Growth, Marketing</div>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="link-underline text-sm font-medium text-mute hover:text-ink">
                {link.label}
              </a>
            ))}
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link-underline text-sm font-medium text-mute hover:text-ink">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-mute-dark">© 2026 Sauvik Banerjee</span>
          <span className="text-xs text-mute-dark">Built with intent, one metric at a time.</span>
        </div>
      </div>
    </footer>
  );
}
