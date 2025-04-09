import { useParams } from "react-router-dom";
import { remark } from "remark";
import html from "remark-html";
import { useEffect, useState } from "react";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import Sticky from "react-stickynode";
import { Helmet } from "react-helmet";

interface ArticlePageProps {}

export const ArticlePage = ({}: ArticlePageProps) => {
  const { slug } = useParams();
  const [contentHtml, setContentHtml] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const article = getArticleBySlug(slug || "");
  const latestArticles = getAllArticles()
    .filter((article) => article.frontmatter.slug != slug)
    .slice(0, 4);

  useEffect(() => {
    async function processMarkdown() {
      const processedContent = await remark()
        .use(html)
        .process(article.content);
      setContentHtml(processedContent.toString());
    }
    processMarkdown();
  }, [article.content]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>Life Gains - {article.frontmatter.title}</title>
        <meta name="description" content={article.frontmatter.description} />
        <meta property="og:title" content={article.frontmatter.title} />
        <meta
          property="og:description"
          content={article.frontmatter.description}
        />
        <meta property="og:image" content={`/${article.frontmatter.image}`} />
      </Helmet>
      <div className="mx-auto bg-white">
        {/* Progress Bar */}
        <div className="progress-container !z-[100]">
          <div
            className="progress-bar"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Header Section */}
        <div className="w-screen bg-bg h-96 relative flex items-center justify-center">
          <img
            className="w-full h-full absolute left-0 top-0 object-cover opacity-20"
            src={`/${article.frontmatter.image}`}
            alt={article.frontmatter.title}
          />
          <header className="max-w-2xl container-md mx-auto text-center z-10">
            <p className="font-semibold relative top-1 text-sm text-accent-200">
              {article.frontmatter.date.getDate()}{" "}
              {article.frontmatter.date.toLocaleString("default", {
                month: "long",
              })}{" "}
              {article.frontmatter.date.getFullYear()}
              {" - "}
              {article.frontmatter.timeToRead} read
            </p>
            <h1 className="font-bold text-h1 px-2 py-3 text-white leading-tight">
              {article.frontmatter.title}
            </h1>
            <p className="text-gray-300 mb-6 italic">
              {article.frontmatter.description}
            </p>
          </header>
        </div>

        <div className="container-md mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Article Content */}
            <div
              className="prose prose-lg max-w-3xl article-main"
              dangerouslySetInnerHTML={{ __html: contentHtml || "" }}
            ></div>
          </div>

          {/* Sidebar */}
          <Sticky
            enabled={true}
            bottomBoundary={".article-main"}
            top={20}
            className="z-[0]"
          >
            <aside className="sticky top-0 -z-10">
              <h2 className="text-xl text-black font-bold mb-4">
                Latest Articles
              </h2>
              <ul className="space-y-4 grid">
                {latestArticles.map((latestArticle) => (
                  <a
                    href={`/blog/${latestArticle.frontmatter.slug}`}
                    key={latestArticle.slug}
                    className="flex-1 w-full relative group overflow-hidden rounded-sm p-4 border-2 border-white/5 after:h-[100px] after:w-[2px] after:absolute after:bg-gradient-to-b after:from-transparent after:via-25% after:to-transparent after:via-accent-200 after:left-[-1px] after:opacity-0 after:duration-500 after:top-[65%] after:transition-all hover:after:opacity-100 hover:after:top-1/4"
                  >
                    <img
                      className="absolute w-full h-full -z-10 left-0 top-0 group-hover:scale-110 transition-all duration-500 object-cover brightness-50"
                      src={`/${latestArticle.frontmatter.image}`}
                    />
                    <div className="text-gray-300">
                      <p className="font-semibold text-sm text-accent-200">
                        {latestArticle.frontmatter.date.getDate()}{" "}
                        {latestArticle.frontmatter.date.toLocaleString(
                          "default",
                          {
                            month: "long",
                          }
                        )}{" "}
                        {latestArticle.frontmatter.date.getFullYear()}
                      </p>
                      <h3 className="font-semibold text-h4 leading-snug text-white tracking-tight line-clamp-4 text-pretty">
                        {latestArticle.frontmatter.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </ul>
            </aside>
          </Sticky>
        </div>
      </div>
    </>
  );
};
