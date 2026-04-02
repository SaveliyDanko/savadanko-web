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

export const blogArticles: BlogArticle[] = [
  {
    slug: "literature-and-anna-karenina",
    tags: ["literature", "culture", "reflection", "tolstoy"],
    content: {
      en: {
        label: "Literature",
        title: "On Literature and Anna Karenina",
        excerpt:
          "A reflection on literature as a way to inherit human experience, feel other lives from within, and broaden our inner world through Tolstoy's Anna Karenina.",
        publishedAt: "April 2, 2026",
        readingTime: "5 min read",
        lead:
          "I am writing this post while turning the pages of one of Leo Tolstoy's great works. Anna Karenina inspired me to share a few thoughts on literature as an essential part of culture and art.",
        sections: [
          {
            title: "Writing as accumulated human experience",
            paragraphs: [
              "Writing is a way of transmitting information, experience, and observations accumulated by humanity. Why do we seek this knowledge, analyze it, and draw conclusions from it? As rationalist philosophers noted, knowledge is reached not only through empirical experience, but also through reason.",
              "Writing makes the formation and development of that knowledge dramatically faster because it allows us to rely on the experience and discoveries of other people rather than starting from zero every time.",
            ],
          },
          {
            title: "Literature as empathy and self-expression",
            paragraphs: [
              "Knowledge should not be understood only as something practical and tangible. Writing allows people to share not just facts, but also emotional experience. Every literary character and every story gives us the opportunity to live through other lives and to imagine ourselves in circumstances we may never encounter directly.",
              "Life rarely gives us enough time to learn everything through our own experience alone. Learning from our own mistakes is valuable, but learning from the lives of others can be even more meaningful. Literature lets us mentally inhabit hundreds of roles and situations, enriching us spiritually and emotionally.",
              "It also opens a space for self-expression not only for the author, but for the reader. Reading is deeply multifaceted: each of us interprets the same scenes differently. Because of that, an author can transmit a whole spectrum of emotions, while the reader deepens and expands them through personal experience.",
              "Perhaps more than cinema or music, literature gives freedom to imagination. We can picture the appearance of characters in our own way, imagine their voices and intonations, and sense emotions hidden between the lines.",
            ],
          },
          {
            title: "Why Anna Karenina remains powerful",
            paragraphs: [
              "Literature is not merely a vehicle for knowledge. It is also a unique opportunity for every reader to come into contact with human feeling and inner conflict, to enrich perception, and to widen personal horizons. Tolstoy's Anna Karenina is a vivid example of that power.",
              "Tolstoy masterfully conveys the difficult emotions and inner contradictions of his characters. While reading, we feel Anna's passion and her struggle with society and with herself. We sympathize with Levin in his search for the meaning of life and happiness. Through doubt and suffering, he moves toward harmony.",
              "These characters invite us to reflect on love, duty, freedom, and purpose. That is the true strength of literature: it lets us live an entire life alongside its heroes, feel their joys and pains, and discover an echo of their stories within our own souls.",
              "As no other art form quite can, literature connects us to deep layers of human experience and makes us wiser, more sensitive, and inwardly richer.",
              "P.S. There are probably still a few echoes and vibes here from school essays in the eleventh grade.",
            ],
          },
        ],
      },
      ru: {
        label: "Литература",
        title: "О литературе и «Анне Карениной»",
        excerpt:
          "Размышление о литературе как о способе передачи человеческого опыта, чувств и культуры, вдохновлённое чтением «Анны Карениной» Льва Толстого.",
        publishedAt: "2 апреля 2026",
        readingTime: "5 мин чтения",
        lead:
          "Этот пост я пишу, перелистывая страницы величественного произведения Льва Николаевича Толстого. «Анна Каренина» пробудила во мне желание поделиться мыслями о литературе как о важной части культуры и искусства.",
        sections: [
          {
            title: "Письменность как накопленный опыт человечества",
            paragraphs: [
              "Письменность — способ передачи информации, опыта и наблюдений, накопленных человечеством. Зачем человечеству получать эту информацию, анализировать её и делать выводы? Как отмечали философы-рационалисты, знание достигается не только эмпирическим путём, но и благодаря разуму.",
              "Именно письменность позволяет нам значительно ускорить формирование и развитие этого знания, используя опыт и открытия других людей.",
            ],
          },
          {
            title: "Литература как сопереживание и самовыражение",
            paragraphs: [
              "Однако не стоит воспринимать знание лишь как нечто прикладное и осязаемое. Письменность позволяет людям делиться не только фактами, но и чувственным опытом. Каждый литературный герой, каждая история открывает перед нами возможность прожить чужие жизни, почувствовать себя на месте героя в самых разных обстоятельствах.",
              "Жизнь редко предоставляет возможность учиться исключительно через собственный опыт. Учиться на собственных ошибках полезно, но куда ценнее извлекать уроки из опыта других. Литература позволяет нам мысленно проживать сотни образов и ситуаций, обогащая себя духовно и эмоционально.",
              "Кроме того, литература открывает возможность для самовыражения не только автору, но и читателю. Читательский опыт удивительно многогранен: каждый из нас по-своему воспринимает и интерпретирует описанные ситуации. Благодаря таким индивидуальным особенностям восприятия автор может передать целый спектр эмоций, а читатель — почувствовать его ещё глубже и разнообразнее, обогащая это своим уникальным жизненным опытом.",
              "Литература, пожалуй, в большей степени, чем кинематограф или музыка, даёт простор нашему воображению. Мы можем по-своему представлять облик героев, наполнять их образы разными оттенками, фантазировать об их интонациях, мелодиях голосов и переживаниях, скрытых за строками.",
            ],
          },
          {
            title: "Почему «Анна Каренина» так сильно действует",
            paragraphs: [
              "Литература — это не просто способ передачи знаний, но и уникальная возможность для каждого читателя прикоснуться к человеческим чувствам и переживаниям, обогатить своё восприятие и расширить горизонты. «Анна Каренина» Льва Толстого — яркий тому пример.",
              "Толстой мастерски передаёт сложные эмоции и внутренние конфликты своих героев. Читая страницы, мы ощущаем страсть Анны, её борьбу с обществом и собой. Мы сочувствуем Левину в его поисках смысла жизни и счастья. Через терзания и сомнения он находит гармонию.",
              "Эти образы побуждают нас размышлять о природе любви, долга, свободы и предназначения. Именно в этом сила литературы: она позволяет прожить целую жизнь вместе с героями, почувствовать их радости и боли, представить себе мир их глазами и найти в их историях отклик в собственной душе.",
              "Как ни один другой вид искусства, литература соединяет нас с глубокими пластами человеческого опыта, делая нас мудрее, тоньше и богаче.",
              "P.S. Какие-то отголоски и вайбы сочинений 11 класса.",
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
