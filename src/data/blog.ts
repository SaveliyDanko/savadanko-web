type BlogLanguage = "en" | "ru";

interface BlogArticleSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface BlogArticleContent {
  label: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  lead: string;
  sections: BlogArticleSection[];
}

export interface BlogArticle {
  slug: string;
  tags: string[];
  content: Record<BlogLanguage, BlogArticleContent>;
}

// Add a new article by appending an item here.
// Each unique slug automatically gets its own page at /blog/<slug>.
export const blogArticles: BlogArticle[] = [
  {
    slug: "article-1",
    tags: ["blog", "notes", "placeholder"],
    content: {
      en: {
        label: "Placeholder article",
        title: "article-1: Building the foundation for future blog posts",
        excerpt:
          "This is the first placeholder article. It also demonstrates how the blog is now structured: every post lives in one typed registry and automatically gets its own route.",
        publishedAt: "April 2, 2026",
        readingTime: "3 min read",
        lead:
          "The blog now uses a single source of truth for article content. Add a new object with a unique slug, fill in the localized content, and the card plus the article page will appear automatically.",
        sections: [
          {
            title: "What is already set up",
            paragraphs: [
              "The /blog page is driven by a typed article registry instead of hardcoded cards.",
              "Every article has its own slug, so opening a card takes you to a dedicated page like /blog/article-1.",
            ],
            bullets: [
              "One data file for list content and full article content",
              "Automatic route pattern for every new slug",
              "Localized text support for English and Russian",
            ],
          },
          {
            title: "How to add the next article",
            paragraphs: [
              "Duplicate this object inside blogArticles and change the slug to something unique.",
              "Then update the title, excerpt, metadata, tags, and the section content for both languages.",
            ],
            bullets: [
              "Set slug: 'article-2' or any readable URL-safe value",
              "Fill en and ru content blocks",
              "Save the file and the new article will appear in the list automatically",
            ],
          },
          {
            title: "What can be improved later",
            paragraphs: [
              "If you want, the next step can be adding cover images, a related articles block, or markdown-based authoring. The current structure is intentionally simple so updates stay easy.",
            ],
          },
        ],
      },
      ru: {
        label: "Заглушка",
        title: "article-1: основа для будущих статей блога",
        excerpt:
          "Это первая статья-заглушка. Одновременно она показывает новую структуру блога: каждая публикация живёт в одном типизированном реестре и автоматически получает собственный маршрут.",
        publishedAt: "2 апреля 2026",
        readingTime: "3 мин чтения",
        lead:
          "Теперь блог использует единый источник данных для карточки статьи и её полной страницы. Достаточно добавить новый объект с уникальным slug, заполнить локализованный контент, и статья сразу появится в списке и откроется по отдельному адресу.",
        sections: [
          {
            title: "Что уже настроено",
            paragraphs: [
              "Страница /blog теперь строится из типизированного реестра статей, а не из жёстко зашитых карточек.",
              "У каждой статьи есть свой slug, поэтому при клике по карточке открывается отдельная страница вида /blog/article-1.",
            ],
            bullets: [
              "Один data-файл для карточек и полного содержимого статьи",
              "Автоматический маршрут для каждого нового slug",
              "Поддержка локализованного текста на русском и английском",
            ],
          },
          {
            title: "Как добавить следующую статью",
            paragraphs: [
              "Скопируй этот объект внутри blogArticles и замени slug на уникальный.",
              "После этого обнови заголовок, excerpt, метаданные, теги и секции контента для обеих локалей.",
            ],
            bullets: [
              "Задай slug: 'article-2' или другой читаемый URL-safe идентификатор",
              "Заполни блоки en и ru",
              "Сохрани файл, и новая статья автоматически появится в списке",
            ],
          },
          {
            title: "Что можно улучшить позже",
            paragraphs: [
              "Следующим шагом сюда можно добавить обложки, блок похожих статей или markdown-авторинг. Текущая структура специально сделана простой, чтобы статьи было удобно обновлять.",
            ],
          },
        ],
      },
    },
  },
];

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getBlogArticlePath(slug: string) {
  return `/blog/${slug}`;
}
