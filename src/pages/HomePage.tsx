import HeroHome from "@/components/HeroHome";
import LatestArticles from "@/components/LatestArticles";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { TextImageSection } from "@/components/TextImageSection";

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <main className="relative isolate">
      <div className="md:hidden">
        <img
          src={"/images/UPE_Deadlift.jpg"}
          alt=""
          className="md:hidden brightness-50 aspect-[0.75] absolute w-screen inset-0 object-cover -z-10"
        />
      </div>
      <HeroHome />

      {/*  */}
      <TextImageSection
        title="O mnie"
        subtitle="Mistrzostwa Europy jako Student Politechniki Warszawskiej"
        description=""
        image="/images/UPE_decoration1.jpg"
        imageAlt="Mistrzostwa Europy jako Student Politechniki Warszawskiej"
        imagePosition="left"
      />

      <LatestArticles />

      <NewsletterSignup />
    </main>
  );
};

export default HomePage;
