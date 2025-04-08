import { useState } from "react";
// import Logo from "/images/logo_new.png";
import Logo from "/images/logo.webp";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

interface NavbarProps {
  filled?: boolean;
}

const links = {
  en: [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/blog",
      name: "Blog",
    },
    {
      link: "/portfolio",
      name: "Portfolio",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ],
  pl: [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/blog",
      name: "Blog",
    },
    {
      link: "/portfolio",
      name: "Portfolio",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ],
};

const Navbar = ({ filled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const location = useLocation();

  return (
    <header
      className={cn(
        "py-4 z-20 ",
        filled
          ? "bg-gray-900 bg-gradient-to-r from-bg via-black to-bg"
          : "bg-gradient-to-r from-bg via-25% via-gray-900 to-bg"
      )}
    >
      <nav className="container-md mx-auto flex items-center justify-between">
        <a
          href="/"
          className="flex items-center justify-start gap-2 flex-1 relative -left-2"
        >
          <img src={Logo} alt="Logo" className="h-20" />
          <p className="font-serif text-accent-200 flex flex-col items-start justify-center">
            <span className="relative -bottom-0.5">Michal</span>{" "}
            <span className="relative -top-0.5 tracking-wide">Mizia</span>
          </p>
        </a>
        <ul
          className={cn(
            "items-center relative font-serif top-0.5 flex nav:flex-row mobile-nav pb-2 justify-center flex-1 gap-4 lg:gap-x-6",
            isMenuOpen ? "opened" : ""
          )}
        >
          {links.en.map((element) => (
            <li
              key={element.name}
              className={`translate-link px-1 text-h3 nav:text-lg tracking-wide font-[500] hover:!text-white w-fit ${
                element.link === "/"
                  ? location.pathname === "/"
                    ? "text-white font-[600]"
                    : "!text-zinc-300"
                  : location.pathname?.includes(element.link)
                  ? "text-white font-[600]"
                  : "!text-zinc-300"
              }`}
            >
              <a href={element.link}>{element.name}</a>
            </li>
          ))}
          <a
            href="/program"
            className="nav:hidden mx-auto justify-self-center w-full max-w-xs"
          >
            <Button
              variant="primary"
              className="!text-h4 mt-[40px] nav:m-0 nav:!text-lg h-full w-full"
            >
              Chcę Darmowy Plan!
            </Button>
          </a>
        </ul>
        <section className="hidden nav:flex items-center gap-2 justify-end flex-1">
          {/* <Button
            variant="primary"
            className="text-lg font-normal flex items-center justify-center gap-1"
          >
            &#127463; Lang
          </Button> */}
          <Button variant="primary" className="font-serif text-lg px-7">
            <a href="/program">Chcę Darmowy Plan!</a>
          </Button>
        </section>
        <button
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className={`${
            isMenuOpen ? "mobile-nav-toggle close" : "mobile-nav-toggle"
          } nav:hidden`}
          onClick={() => setIsMenuOpen((val) => !val)}
        >
          <span className="menu-element"></span>
          <span className="menu-element"></span>
          <span className="menu-element"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
