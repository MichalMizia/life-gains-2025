import { ArticleMeta, getAllArticles } from "@/lib/articles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BlogPageProps {}

const BlogPage = ({}: BlogPageProps) => {
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [filteredArticles, setFilteredArticles] = useState<ArticleMeta[]>([]);

  useEffect(() => {
    const allArticles = getAllArticles();
    setArticles(allArticles);
    setFilteredArticles(allArticles); // Initialize filtered articles
  }, []);

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter articles based on the search query
    const filtered = articles.filter(
      (article) =>
        article.frontmatter.title.toLowerCase().includes(query) ||
        article.frontmatter.description.toLowerCase().includes(query)
    );
    setFilteredArticles(filtered);
  };

  return (
    <main className="pt-8 sm:py-8 md:py-10 lg:py-14">
      <div className="container-md">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h1 className="text-h1 sm:text-5xl font-bold mb-2 text-white">
              Blog
            </h1>
            {/* <p className="max-w-lg md:max-w-xl lg:max-w-2xl">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p> */}
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Wyszukaj artykuły...
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Wyszukaj artykuły..."
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-accent-200 sm:text-sm/6"
              />
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            <div className="hidden lg:block"></div>
            <div className="flex flex-col items-start">
              <dt className="text-base font-semibold text-white">Trójbój</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Hej, obecnie piszę tu głównie o tym jak zostać lepszym
                trójboistą jednak planuje wprowadzić więcej różnorodnych
                materiałów.
              </dd>
            </div>
            {/* <div className="flex flex-col items-start">
              <dt className="text-base font-semibold text-white">No spam</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div> */}
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-10"
        />
      </div>

      <div className="container-md z-10 mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4">
          {filteredArticles.map((article) => (
            <Link
              to={`/blog/${article.frontmatter.slug}`}
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
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
