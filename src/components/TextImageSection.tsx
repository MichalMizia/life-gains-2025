import { cn } from "@/lib/utils";
import { BinaryIcon, DumbbellIcon } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    name: "Treningi",
    description:
      "Większość mojej kariery w trójboju prowadziłem się samemu, tak jest też obecnie. Moje największe sukcesy to 1 Miejsce w Wyciskaniu na Mistrzostwach Europy w Trójboju, 2-krotne Mistrzostwo Polski, w tym raz Open oraz 6 rekordów Polski. Wyniki z ostatnich zawodów jakimi były Uniwersyteckie Mistrzostwa Europy to 225-167.5-287.5 które dało 680kg w totalu i 🥈 w martwym ciągu.",
    icon: DumbbellIcon,
  },
  {
    name: "Informatyka",
    description: (
      <>
        Obecnie studiuję informatykę na Politechnice Warszawskiej jednak moje
        zainteresowanie zaczęło się już w liceum. Nie ukrywam że jednym z celów
        stworzenia tej strony była zabawa z frontend developmentem od poziomu
        zerowego, jednak przerodziło się to w jedną z moich zajawek. Również na
        Life Gains przygotowałem{" "}
        <a
          href="/portfolio"
          className="translate-link font-semibold text-white"
        >
          Portfolio
        </a>{" "}
        moich projektów.
      </>
    ),
    icon: BinaryIcon,
  },
  // {
  //   name: "Prowadzenie Treningowe.",
  //   description:
  //     "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  //   icon: ChartNoAxesCombined,
  // },
];

interface TextImageSectionProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export function TextImageSection({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  imagePosition,
  className,
  ...props
}: TextImageSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    // @ts-expect-error
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      {...props}
      className={cn(
        "overflow-hidden bg-bg text-gray-300 py-24 sm:py-32",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={cn(
            "mx-auto grid max-w-2xl grid-flow-row grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          )}
        >
          {imagePosition === "left" && (
            <motion.img
              alt={imageAlt}
              src={image}
              width={2432}
              height={1442}
              className="w-[30rem] md:aspect-[1.5] max-h-[700px] object-cover max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 md:w-[57rem] md:-mr-4 lg:-mr-0 relative md:-translate-x-[25rem]"
              variants={animationVariants}
            />
          )}
          <div
            className={cn(imagePosition === "right" ? "lg:pr-8" : "lg:pl-8")}
          >
            <div className="lg:max-w-lg">
              <h2 className="text-xs sm:text-sm/7 font-semibold text-accent-200">
                {subtitle}
              </h2>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                {title}
              </p>
              <p className="mt-6 text-lg/8">{description}</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-accent-200"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {imagePosition === "right" && (
            <motion.img
              alt={imageAlt}
              src={image}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              variants={animationVariants}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
