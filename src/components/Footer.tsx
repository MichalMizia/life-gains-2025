import { LucideGithub, LucideInstagram, MailIcon, Youtube } from "lucide-react";
import Logo from "/images/logo.webp";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-gray-900 z-20">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://life-gains.com/" className="flex items-center">
              <img src={Logo} className="h-20 me-3" alt="LifeGains Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                LifeGains
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div className="md:mr-8">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 grid gap-4 grid-cols-2 dark:text-gray-400 font-medium">
                <li className="">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="/portfolio" className="hover:underline">
                    Portfolio
                  </a>
                </li>
                <li className="">
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.privacypolicygenerator.info/live.php?token=vj8vtJbelhzyn2exJay9lem1V2t0IYLO"
                    target="_blank"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://lifeGains.com/" className="hover:underline">
              LifeGains™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Youtube size={17} />
              <span className="sr-only">Youtube channel</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-4"
            >
              <MailIcon size={16} />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-4"
            >
              <LucideInstagram size={16} />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-4"
            >
              <LucideGithub size={16} />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
