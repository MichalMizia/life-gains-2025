import content from "../config/content.json";

interface HeroHomeProps {}

const HeroHome = ({}: HeroHomeProps) => {
  return (
    <div className="relative isolate">
      <section className="w-[94%] max-w-[1440px] pt-12 pb-16 lg:w-[91%] flex justify-center md:justify-between gap-12 lg:gap-20 xl:gap-28 items-center mx-auto md:ml-auto md:mx-0">
        <div className="flex-[1.25] justify-center gap-4 pb-6 md:pb-0 self-center justify-self-center md:mt-0 flex flex-col max-w-[min(90dvw,560px)] mx-auto md:mx-0 items-center md:items-start md:max-w-4xl">
          <h1 className="font-bold text-pretty max-w-screen text-h1 sm:text-size-step-4 text-white text-center md:text-left leading-[1.15]">
            {content.home.title}
          </h1>
          <p className="md:text-body lg:text-lg/8 mt-4 md:mt-6">
            Cześć, nazywam się Michał Mizia. Jestem aktywnym zawodnikiem
            trójboju siłowego, pasjonatem różnego rodzaju sportów oraz studentem
            informatyki. Przez 5 lat mojej przygody z treningiem siłowym
            nieustannie poszerzałem wiedzę, a przez ostatni rok miałem
            przyjemność pomagać trójboistom w spełnianiu ich sportowych marzeń.
            Liczę na to że wiedza którą się tu dzielę, pomoże wam w osiągnięciu{" "}
            <b>Life-Gains</b>.
          </p>
          <div className="flex justify-start gap-2 md:gap-4 mt-3 md:mt-5 lg:mt-7">
            <button className="neon-button w-full flex-1 max-w-[300px] font-serif text-lg md:text-h4">
              <a className="px-2" href="/program">
                Darmowy&nbsp;Plan
              </a>
            </button>
            <button className="neon-button flex-1 neon-green w-full max-w-[300px] font-serif text-lg md:text-h4">
              <a className="px-2" href="/contact">
                Prowadzenie
              </a>
            </button>
          </div>
        </div>
        <div className="flex-1 self-stretch xl:self-center hidden md:block after:rounded-sm z-[2] after:-z-10 after:transition-all before:absolute before:bg-black before:opacity-[.15] hover:before:opacity-0 before:transition-opacity before:duration-300 before:ease-linear before:inset-0 before:w-full before:h-full before:z-[3] hover:after:translate-x-1 hover:after:-translate-y-1 after:right-4 after:top-4 relative after:absolute after:w-full after:h-full isolate after:border-2 after:border-accent-200">
          <img
            // src={"/images/europeans-deadlift.webp"}
            src={"/images/UPE_Deadlift.jpg"}
            alt=""
            className="w-full h-full  object-cover rounded-sm"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroHome;
