import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  image: ImageWidget;
  altText: string;
}

export interface Link {
  title: string;
  href: string;
}

export interface Props {
  logoSrc?: string; // Logo image URL as a string
  leftlinks?: Array<Link>;
  rightlinks?: Array<Link>;
}

function Logo({
  logoSrc,
  lcp,
  alt,
}: {
  logoSrc: ImageWidget;
  lcp?: boolean;
  alt: string;
}) {
  return (
    <a href="#" class="block">
      {" "}
      {/* href can be set to a navigation link if needed */}
      <Picture class=" w-10 h-10" preload={lcp}>
        <Source
          media="(min-width: 768px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={logoSrc}
          width={120}
          height={120}
        />
        <img
          class=" object-contain  h-full max-h-10 "
          loading={lcp ? "eager" : "lazy"}
          src={logoSrc}
          alt={alt}
        />
      </Picture>
    </a>
  );
}

export default function NavBar({
  logoSrc = "/default-logo.svg", // Default logo image URL
  leftlinks = [
    { title: "Categorias", href: "/categorias" },
    { title: "Black Friday", href: "/ofertas" },
  ],
  rightlinks = [
    { title: "Sobre", href: "/about" },
    { title: "Entrar", href: "/contact" },
  ],
}: Props) {
  return (
    <div
      class="fixed bottom-8 bg-[#9cbf5b] max-w-full inset-x-3 z-50 px-4 mx-4"
      aria-label="navigation"
    >
      <div class="md:py-7 md:h-3 relative flex w-full items-center justify-between flex-col">
        <div class="w-full flex justify-between items-center h-full px-4">
          {/* Left Links */}
          <ul class="hidden md:flex items-center md:h-16 flex-1 gap-x-3">
            {leftlinks.map((link, index) => (
              <li key={index} class="cursor-pointer">
                <a
                  target="_blank"
                  href={link.href}
                  aria-label={link.title}
                  class="link cursor-pointer uppercase font-medium text-[#472531]"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Logo */}
          {logoSrc && (
            <div class="flex items-center justify-center flex-grow-0">
              <Logo logoSrc={logoSrc} lcp={true} alt="" />
            </div>
          )}

          {/* Right Links */}
          <ul class="hidden md:flex items-center justify-end md:h-16 flex-1 gap-x-3">
            {rightlinks.map((link, index) => (
              <li key={index} class="cursor-pointer">
                <a
                  target="_blank"
                  href={link.href}
                  aria-label={link.title}
                  class="link uppercase font-medium text-[#472531]"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
