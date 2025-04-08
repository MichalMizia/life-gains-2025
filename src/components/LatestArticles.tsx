import { ArticleMeta, getAllArticles } from "@/lib/articles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LatestArticlesProps {}

const LatestArticles = ({}: LatestArticlesProps) => {
  const [articles, setArticles] = useState<ArticleMeta[]>([]);

  useEffect(() => {
    setArticles(getAllArticles());
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      className="relative isolate overflow-hidden bg-bg py-16 sm:py-24 lg:py-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container-md">
        <header className="flex items-center justify-center gap-2 flex-col">
          <a
            href="/blog"
            title="Czytaj więcej"
            className="text-base/7 relative top-1 font-semibold !text-accent-200"
          >
            Czytaj więcej
          </a>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Ostatnie wpisy
          </h2>
        </header>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {articles.slice(0, 6).map((article) => (
            <motion.a
              href={`/blog/${article.frontmatter.slug}`}
              variants={itemVariants}
              key={article.slug}
              className="flex-1 min-h-[200px] relative group overflow-hidden rounded-sm p-4 border-2 border-white/5 after:h-[100px] after:w-[2px] after:absolute after:bg-gradient-to-b after:from-transparent after:via-25% after:to-transparent after:via-accent-200 after:left-[-1px] after:opacity-0 after:duration-500 after:top-[65%] after:transition-all hover:after:opacity-100 hover:after:top-1/4"
            >
              <img
                className="absolute w-full h-full -z-10 left-0 top-0 group-hover:scale-110 transition-all duration-500 object-cover opacity-20"
                src={`${article.frontmatter.image}`}
              />
              <div className="text-gray-300">
                <p className="font-semibold text-sm text-accent-200">
                  {article.frontmatter.date.getDate()}{" "}
                  {article.frontmatter.date.toLocaleString("default", {
                    month: "long",
                  })}{" "}
                  {article.frontmatter.date.getFullYear()}
                </p>
                <h3 className="font-semibold text-h4 leading-snug h-[4rem] text-white mb-2 tracking-tight line-clamp-2 text-pretty">
                  {article.frontmatter.title}
                </h3>
                <p className="text-base/7 line-clamp-4">
                  {article.frontmatter.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LatestArticles;
