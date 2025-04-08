export interface Frontmatter {
  title: string;
  date: Date;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  timeToRead: string;
  author: string;
  slug: string;
}

export interface ArticleMeta {
  frontmatter: Frontmatter;
  slug: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

const articlesContext = import.meta.glob("/src/articles/*.md", {
  as: "raw",
  eager: true,
});

const parseFrontmatter = (mdString: string) => {
  const strings = mdString.split("---").filter(Boolean);
  const frontmatter = strings[0].trim();
  const content = strings[1].trim();
  const items = frontmatter.split("\n").filter(Boolean);
  const data: Record<string, string | string[] | Date> = {};
  items.forEach((item) => {
    const [key, value] = item.split(":").map((i) => i.trim());
    // check if item is array
    if (!value) return;
    if (value.includes("[") && value.includes("]")) {
      const arrayValue = value
        .replace("[", "")
        .replace("]", "")
        .split(",")
        .map((i) => i.trim());
      data[key] = arrayValue;
      return;
    }
    // check if item is date
    if (value.length === 10 && !isNaN(Date.parse(value))) {
      const dateValue = new Date(value);
      data[key] = dateValue;
      return;
    }

    data[key] = value;
  });

  return { frontmatter: data, content };
};

export function getAllArticles() {
  return Object.entries(articlesContext)
    .filter(([path, _]) => {
      return path !== "/src/articles/Projects.md";
    })
    .map(([path, fileContents]) => {
      const { frontmatter } = parseFrontmatter(fileContents as string);
      return {
        frontmatter,
        slug: path.split("/").pop()?.replace(".md", "") || "",
      } as unknown as ArticleMeta;
    })
    .sort(
      (a, b) =>
        (b.frontmatter.date as Date).getTime() -
        (a.frontmatter.date as Date).getTime()
    );
}

export function getArticleBySlug(slug: string) {
  const article = Object.entries(articlesContext).find(([_, contents]) => {
    const { frontmatter } = parseFrontmatter(contents as string);
    const articleSlug = frontmatter.slug;
    return articleSlug === slug;
  });

  if (!article) {
    throw new Error(`Article with slug "${slug}" not found.`);
  }

  const { frontmatter, content } = parseFrontmatter(article[1] as string);

  return { frontmatter: frontmatter as unknown as Frontmatter, content };
}

export const getPortfolioData = () => {
  const filePath = "/src/articles/Projects.md"; // Path to the Markdown file
  const rawMarkdown = articlesContext[filePath] as string;

  const strings = rawMarkdown.split("---").filter(Boolean);
  const frontmatter = strings[0].trim();
  const titles = frontmatter.split(":").filter(Boolean);
  const items = titles[1]
    .split("\n")
    .filter(Boolean)
    .slice(2, -1)
    .map((title) => title.trim().replace(/^"|"$/g, "").replace('",', ""));

  const content = strings[1].trim();
  const sections = content.split(";;").map((section) => section.trim());

  const portfolioItems = items.map((title, index) => ({
    title,
    content: sections[index] || "",
  }));
  return portfolioItems;
};
