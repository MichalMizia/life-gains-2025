import { HTMLProps, ReactNode } from "react";
// components
import "@/css/global.css";
import { cn } from "../lib/utils";
import Navbar from "@/components/Navbar";
import DesktopIcons from "@/components/DesktopIcons";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import OGImage from "/images/og/home-og.png";

interface LayoutProps extends HTMLProps<HTMLBodyElement> {
  children: ReactNode;
}

const Layout = ({ children, className, ...props }: LayoutProps) => {
  const location = useLocation();
  const isArticlePage =
    location.pathname.startsWith("/blog/") && location.pathname !== "/blog/";

  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="e4VVtChZ4E3kzw0DVP_--Ub91rkjn4t9RixbgYsjJCQ"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Life gains to osobisty blog dedykowany poprawie w wielu aspektach, jednak szczegolnie w trójboju siłowy. Znajdziesz tu artykuły o treningu, diecie i suplementacji. Przełam stagnację i osiągnij swoje cele w trójboju siłowym!"
        />
        <meta
          name="keywords"
          content="powerlifting,strength training,fitness gains,powerlifting tips,strength training techniques,powerlifting routines,building strength,endurance workouts,personal records,transformation,fitness progress,lifting,gym, strength and conditioning,strength transformations,fitness community,powerlifting workouts,powerlifting competitions,strength and nutrition,fitness motivation,powerlifting mindset,injury prevention,competition preparation,powerlifting exercises,strength achievements, bodybuilding, dieticians, powerlifting inspiration, about me, competitions, siłownia, trójbój, zawody, blog o trójboju, dieta, trening siłowy, kulturystyka, wyciskanie leżąc, przysiad, martwy ciąg, jak trenować"
        />
        <meta name="author" content="Michal Mizia" />
        <title>Life Gains - Podróż po Trójboju</title>
        <meta property="og:title" content="Life Gains - Podróż po Trójboju" />
        <meta property="og:site_name" content="Life Gains" />
        <meta property="og:url" content="life-gains.com" />
        <meta
          property="og:description"
          content="Life gains to osobisty blog dedykowany poprawie w wielu aspektach, jednak szczegolnie w trójboju siłowy. Znajdziesz tu artykuły o treningu, diecie i suplementacji. Przełam stagnację i osiągnij swoje cele w trójboju siłowym!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OGImage} />
      </Helmet>
      <main
        {...props}
        className={cn(
          "bg-bg relative isolate sans overflow-x-hidden min-h-screen text-gray-300",
          className!
        )}
      >
        <div className="max-w-[1660px] w-screen mx-auto min-[2000px]:shadow-2xl min-[2000px]:shadow-white/30">
          <Navbar />
          <DesktopIcons dark={isArticlePage} />
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
