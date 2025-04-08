import { getPortfolioData } from "@/lib/articles";

interface PortfolioPageProps {}

const links: Record<string, string> = {
  "Document Managament App With Face Authentication (ESP32 Electronic lock, Next.JS Frontend, Face-Api, MongoDB)":
    "https://github.com/MichalMizia/security--",
  "Life Gains (React.JS, Static Site Generation from Markdown)": "",
  "Intro To Artificiall Intelligence Projects (9 mini projects, Python, ML)":
    "https://github.com/MichalMizia/wsi-projects",
  "Barbell Path and Speed Tracking (Python, OpenCV, ArUco Marker)":
    "https://github.com/MichalMizia/BarbellSpeed",
  "Coachbase - App for connecting personal trainers with clients (Next.Js, MongoDb)":
    "https://github.com/MichalMizia/coachbase",
  "Powerlifting data analysis notebook (Python, pandas, EDA)":
    "https://github.com/MichalMizia/powerlifting_eda",
  "Chess Move Generation (C++)":
    "https://github.com/MichalMizia/chess_slowest_movegen",
  "Sharity - Marketplace for selling files (University Project, Spring Boot, React.JS, SwaggerDocumentation, PostgreSQL)":
    "https://github.com/MichalMizia/sharity",
  "Client Websites - Tango National Championship w/ Stripe (now down), Climbing Grade Calculator with advanced Excel Formulas, Multilingual":
    "https://fgrav.com/",
};

const PortfolioPage = ({}: PortfolioPageProps) => {
  const portfolioItems = getPortfolioData();

  return (
    <main className="pt-8 sm:py-8 relative md:py-10 lg:py-14">
      <div className="container-md mb-6 lg:mb-8">
        <h1 className="text-h1 sm:text-5xl font-bold mb-2">Portfolio</h1>
        <p className="max-w-lg md:max-w-2xl lg:max-w-4xl">
          Welcome to the portfolio part of my personal website! You may be
          wondering why have I switched to English now? Well most of my
          programming endeavors have been in English, so I thought it would be a
          good idea to keep it that way. I am a fourth semester Computer Science
          student at the Warsaw University of Technology. If you are interested,
          take a look at some of the stuff that I have built.
        </p>
      </div>

      {/* <div className="absolute hidden lg:flex top-10 right-30">
        <img src="/images/mugshot.png" className="h-50 rounded-full" />
      </div> */}

      <div className="container-md px-4">
        <ul className="grid items-between justify-between w-full gap-2 list-disc">
          {portfolioItems.map((item) => (
            <li
              key={item.title}
              className="!text-accent-200 translate-link w-fit !overflow-visible cursor-pointer"
            >
              <a href={links[item.title] || ""}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PortfolioPage;
