import GlowCard from "@/components/GlowCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowDownWideNarrow,
  AwardIcon,
  CalendarCheck,
  GaugeIcon,
  Scale,
} from "lucide-react";

interface ProgramPageProps {}

const ProgramPage = ({}: ProgramPageProps) => {
  return (
    <main className="">
      <section className="py-8 md:py-10 lg:py-12 min-h-[calc(100dvh-90px)] flex items-center">
        <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-br from-neon/10 via-transparent to-accent-200/5"></div>
        <div className="container-md flex flex-col-reverse xl:flex-row items-center justify-center gap-x-8 gap-y-8">
          <div className="flex-1 max-w-3xl mx-auto">
            <p className="text-base/7 relative top-1 left-0.5 font-semibold text-accent-200">
              Out now!
            </p>
            <motion.h1
              initial={{ opacity: 0, translateX: -200 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ once: true, duration: 0.5, ease: "easeInOut" }}
              className={cn("font-bold text-h1 sm:text-size-step-4 text-white")}
            >
              Break Out Program
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, translateX: -200 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{
                once: true,
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.25,
              }}
              className="md:text-body lg:text-lg/8 mt-4 md:mt-6"
            >
              Przebij się przez stagnację w trójboju siłowym dzięki darmowemu
              planowi dla średniozaawansowanych!{" "}
              <b>Różnorodność jest kluczowa</b> - w planie znajdziesz ćwiczenia,
              które pomogą Ci osiągnąć lepszą mobilność i stabilność oraz
              zbudować bardziej atletyczną sylwetkę. <br />
              Decydując się na ten plan, przekonasz się że, odejście od
              monotonnych treningów skupionych wyłącznie na trójboju często
              prowadzi do <b>większych postępów w totalu</b>.
            </motion.p>
            <p></p>
            <motion.div
              initial={{ opacity: 0, translateX: -200 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{
                once: true,
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="gap-4 mt-3 md:mt-5 lg:mt-7 flex-col-reverse items-stretch sm:flex-row flex justify-stretch w-full sm:justify-start"
            >
              <Button
                variant="primary"
                className="flex-1 max-w-[400px] font-serif text-2xl md:text-h4"
              >
                <a href="#get-it-now">Chcę darmowy plan!</a>
              </Button>
            </motion.div>
          </div>
          <div className="flex-[1.2] flex items-center justify-center">
            <img
              src={"/images/program.webp"}
              alt="BreakOut Program Preview"
              className="!w-full !h-fit !m-auto"
            />
          </div>
        </div>
      </section>
      <section
        id="features"
        className="relative isolate py-10 md:py-16 lg:py-20 overflow-hidden"
      >
        <div className="absolute right-[15px] top-0 -z-[5] [background-size:30px_30px] [background-image:radial-gradient(white_2px,_transparent_0)] hidden lg:block w-[200px] h-[50%]"></div>
        <div className="">
          <img
            src={"/images/MP_bench.jpg"}
            alt="Bench Press"
            className="w-full h-full object-cover absolute brightness-[0.3] -z-10 inset-0"
          />
        </div>
        <div className="container-md">
          <h2
            style={{ fontSize: "var(--size-step-4)" }}
            className="text-white font-bold mb-8"
          >
            Cechy
          </h2>
          <ul className="grid gap-2 nav:grid-cols-2 max-w-[810px] xl:max-w-[1220px] flex-[2] xl:grid-cols-3">
            <GlowCard className="!h-32 max-w-[400px] mx-auto nav:mx-0 !w-full">
              <div className="card-info-title px-5 py-4">
                <h3 className="text-h3 gap-1 font-bold text-white">
                  <GaugeIcon
                    className="stroke-zinc-300 inline -translate-y-0.5 mr-1.5 w-6 h-6"
                    strokeWidth={2.5}
                  />
                  Intermediate
                </h3>
                <h4>
                  Stworzony dla trójboistów którzy zaczynają odczuwać pierwsze
                  znaki stagnacji.
                </h4>
              </div>
            </GlowCard>
            <GlowCard className="!h-32 max-w-[400px] !w-full mx-auto nav:mx-0">
              <div className="card-info-title px-5 py-4">
                <h3 className="text-h3 gap-1 font-bold text-white">
                  <CalendarCheck
                    className="stroke-zinc-300 inline -translate-y-0.5 mr-1.5 w-6 h-6"
                    strokeWidth={2.5}
                  />
                  6 Tygodni
                </h3>
                <h4>
                  Idealny czas na blok po zawodach, lub po zakończeniu peaku.
                </h4>
              </div>
            </GlowCard>
            <li className="nav:row-span-2 row-start-5 nav:row-start-auto w-full max-w-[400px] nav:max-w-none mx-auto nav:mx-0">
              <GlowCard className="!w-full !h-full">
                <div className="card-info-title px-5 py-4">
                  <h3 className="text-h3 gap-1 font-bold text-white">
                    <Scale
                      className="stroke-zinc-300 inline -translate-y-0.5 mr-1.5 w-6 h-6"
                      strokeWidth={2.5}
                    />
                    Skala trójbojowa
                  </h3>
                  <ul className="grid gap-4">
                    <li className="flex flex-col items-stretch justify-start gap-2">
                      <div className="flex items-center justify-between w-full">
                        <h4>Kulturystyka</h4>
                        <h4>Trójbój</h4>
                      </div>
                      <Progress
                        value={33}
                        className="bg-gradient-to-l rotate-180 border border-zinc-300/30 from-red-500 via-yellow-500 to-green-500"
                      />
                    </li>
                    <li className="flex flex-col items-stretch justify-start gap-2">
                      <div className="flex items-center justify-between w-full">
                        <h4>Początkujący</h4>
                        <h4>Zaawansowany</h4>
                      </div>
                      <Progress
                        value={55}
                        className="bg-gradient-to-l rotate-180 border border-zinc-300/30 from-red-500 via-yellow-500 to-green-500"
                      />
                    </li>
                    <li className="flex flex-col items-stretch justify-start gap-2">
                      <div className="flex items-center justify-between w-full">
                        <h4></h4>
                        <h4>Wyniki</h4>
                      </div>
                      <Progress
                        value={0}
                        className="bg-gradient-to-l rotate-180 border border-zinc-300/30 from-red-500 via-yellow-500 to-green-500"
                      />
                    </li>
                  </ul>
                </div>
              </GlowCard>
            </li>
            <GlowCard className="xxl:!h-32 mx-auto nav:mx-0 !h-32 xl:!h-36 max-w-[400px] !w-full">
              <div className="card-info-title px-5 py-4">
                <h3 className="text-h3 gap-1 font-bold text-white">
                  <AwardIcon
                    className="stroke-zinc-300 inline -translate-y-0.5 mr-1.5 w-6 h-6"
                    strokeWidth={2.5}
                  />
                  Siła/Objętość
                </h3>
                <h4>Nacisk na budowanie zarówno siły i sprawności.</h4>
              </div>
            </GlowCard>
            <GlowCard className="xxl:!h-32 mx-auto nav:mx-0 !h-32 nav:!h-36 max-w-[400px] !w-full">
              <div className="card-info-title px-5 py-4">
                <h3 className="text-h3 gap-1 font-bold text-white">
                  <ArrowDownWideNarrow
                    className="stroke-zinc-300 inline -translate-y-0.5 mr-1.5 w-6 h-6"
                    strokeWidth={2.5}
                  />
                  Autoregulacja
                </h3>
                <h4>Trenuj zgodnie ze swoimi możliwościami przy użyciu RPE.</h4>
              </div>
            </GlowCard>
          </ul>
        </div>
      </section>

      <section className="py-8 md:py-10 lg:py-12">
        <div className="container-md">
          <header>
            <h2
              className={cn(
                "font-bold text-h1 sm:text-size-step-4 text-white text-center mb-4 lg:mb-8"
              )}
            >
              FAQ
            </h2>
            <h2
              aria-hidden
              style={{ fontSize: "var(--size-step-4)" }}
              className="text-white md:hidden font-bold mb-8"
            >
              FAQ
            </h2>
          </header>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-[660px] mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h3 className="text-white font-semibold text-h4">
                  How to Warm Up?
                </h3>
              </AccordionTrigger>
              <AccordionContent className="prose text-zinc-200 prose-strong:font-[500] prose-strong:text-white">
                <p className="">
                  <span className="text-body font-[500] text-white">
                    Squat:{" "}
                  </span>
                  Here we are not slacking, your workout will be as efficient as
                  your body feeling and we are going to use an intense warm up
                  to prepare your body and mind to squat heavy. Start with
                  superset:
                </p>
                <ul className="">
                  <li>Seated adductor stretches</li>
                  <li>World's greatest stretch</li>
                </ul>{" "}
                Then go into
                <ul>
                  <li>2x15 Kettlebel swing</li>
                  <li>2x6 Hip CARS</li>
                  <li>2x6 long pause goblet squats</li>
                  <li>2x5 long jumps</li>
                </ul>
                <p>
                  This warmup should only take you a couple of minutes but it
                  will be effective in increasing your body temperature and
                  priming your nervous system. Try to move with intent, go deep
                  into mobilizations and explode in dynamic movements.
                </p>
                <p>
                  <span className="text-body font-[500] text-white">
                    Bench:{" "}
                  </span>
                  We'll start of with general shoulder mobility work, get a
                  miniband or regular band and perform:
                </p>
                <ul>
                  <li>band pull aparts</li>
                  <li>banded shoulder external rotations</li>
                </ul>
                <p>
                  One of the requirements for a strong and stable bench press is
                  a strong back, we need to perform drills that will activate
                  the same neural pathways used by our back in the bench press.
                </p>
                Perform this superset:
                <ul>
                  <li>
                    <strong>Trap y raise</strong> done standing on toes and
                    supporting yourself on the wall, focus on squeezing your mid
                    back
                  </li>
                  <li>
                    <strong>Lat pullovers</strong> with a band, put your
                    shoulder blade as deep down as possible, think about hiding
                    it in your back pocket of pants
                  </li>
                  <li>
                    <strong>Overhead barbell hold</strong> for shoulder
                    stability
                  </li>
                </ul>
                Now we're ready to bench
                <p>
                  <span className="text-body font-[500] text-white">
                    Deadlift:
                  </span>{" "}
                  Here our warmup will be a combination of the squat and bench
                  because we need to feel preparedeness in our hips as well as
                  our back, to achieve this, choose 3 drills from the squat
                  section, preferably with one that addresses the hip flexor
                  mobility/stability and lat pullovers from the bench section,
                  supplement it with dead bugs (also a great activation for core
                  bracing on squats) and, if you pull sumo, try doing a few sets
                  of moderately heavy hip abductions, you'll find yourself with
                  a greater ability to open into the bottom position. Now you
                  are ready to pull
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h3 className="text-white font-semibold text-h4">
                  How to use it?
                </h3>
              </AccordionTrigger>
              <AccordionContent>Work in progress.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h3 className="text-white font-semibold text-h4">
                  What is the progression?
                </h3>
              </AccordionTrigger>
              <AccordionContent>Work in progress.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <NewsletterSignup />
      <div className="" id="get-it-now"></div>
    </main>
  );
};

export default ProgramPage;
