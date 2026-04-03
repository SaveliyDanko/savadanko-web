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
    slug: "rag-in-simple-words",
    tags: ["ai", "rag", "llm", "retrieval", "architecture"],
    content: {
      en: {
        label: "AI",
        title: "RAG in Plain English",
        excerpt:
          "A practical explanation of Retrieval-Augmented Generation: what it is, why it matters, and how to build LLM systems that answer with your data instead of confident guesses.",
        publishedAt: "April 3, 2026",
        readingTime: "7 min read",
        lead:
          "RAG is one of those terms that quickly became part of every AI conversation, but in practice it is much simpler than it sounds. At its core, RAG is a way to make a language model answer not only from its general training, but also from the specific documents, knowledge base, or product data that matter for your system.",
        sections: [
          {
            title: "Why plain LLM answers are often not enough",
            paragraphs: [
              "A large language model is excellent at producing fluent text, but it does not automatically know your company's documentation, current internal processes, or the latest version of your product rules. If you ask it a question in a production setting, it may answer beautifully and still be wrong.",
              "This is the core business problem RAG tries to solve. Instead of asking the model to guess from memory, we first retrieve relevant context from trusted sources and only then ask the model to generate the response.",
            ],
          },
          {
            title: "What RAG actually is",
            paragraphs: [
              "RAG stands for Retrieval-Augmented Generation. The name sounds academic, but the flow is straightforward: a user asks a question, the system searches through a collection of documents, selects the most relevant fragments, and passes them to the LLM together with the prompt.",
              "So the model is no longer answering in a vacuum. It answers with evidence in front of it. That is why a good RAG system usually feels less like a generic chatbot and more like a knowledgeable assistant that can cite the right information from your own data.",
            ],
            bullets: [
              "Retrieval finds the relevant knowledge",
              "Augmentation injects that knowledge into the prompt",
              "Generation produces the final answer based on that context",
            ],
          },
          {
            title: "A simple mental model",
            paragraphs: [
              "Imagine an experienced engineer during a meeting. Without documents, they answer from memory. With documents open on the second screen, they answer faster, more accurately, and with less improvisation. RAG does the same for an LLM.",
              "The important detail is that the model does not become magically smarter on its own. The system around the model becomes smarter because it knows where to search, what to retrieve, and how to present that material back to the model.",
            ],
          },
          {
            title: "How the pipeline usually works in practice",
            paragraphs: [
              "A production RAG pipeline usually starts long before the user asks anything. First, documents are collected: PDFs, wiki pages, tickets, database exports, API specs, policies, manuals, and other sources. Then those materials are cleaned, split into chunks, enriched with metadata, and transformed into embeddings for retrieval.",
              "At query time, the user question is turned into a search query. The system retrieves relevant chunks, optionally reranks them, and builds a prompt that includes both the question and the retrieved context. Only then does the model generate the answer.",
            ],
            bullets: [
              "Ingestion and chunking",
              "Embedding and indexing",
              "Retrieval and reranking",
              "Prompt construction",
              "Generation and post-processing",
            ],
          },
          {
            title: "Where the real quality comes from",
            paragraphs: [
              "A lot of teams focus on the model first, but RAG quality often depends more on the retrieval system than on the LLM itself. If you retrieve the wrong chunks, the model will confidently summarize the wrong thing. If you retrieve noisy context, the answer quality drops even when the model is strong.",
              "That is why good RAG engineering is mostly about information architecture: how you chunk documents, how you store metadata, how you filter by source, how you rerank results, and how you decide whether the system has enough evidence to answer at all.",
            ],
          },
          {
            title: "What makes RAG useful for real products",
            paragraphs: [
              "RAG is especially valuable when answers must reflect changing, proprietary, or domain-specific knowledge. Internal documentation changes, product rules evolve, API contracts are versioned, compliance policies get updated. Retraining a model for every such change is slow and expensive. Updating the retrieval layer is far more practical.",
              "That is why RAG is used in support assistants, internal knowledge chat, enterprise search, incident copilots, onboarding tools, contract analysis systems, and AI layers over product documentation.",
            ],
          },
          {
            title: "Common mistakes",
            paragraphs: [
              "The first mistake is treating RAG as 'add a vector database and everything works'. In reality, weak chunking, duplicated sources, poor metadata, and missing reranking can make the answers worse instead of better.",
              "The second mistake is forcing the model to answer every question. Sometimes the best response is: 'I do not have enough evidence in the retrieved documents.' A trustworthy system is not the one that always answers. It is the one that knows when not to pretend.",
            ],
            bullets: [
              "Chunks are too large or too small",
              "Metadata is missing, so retrieval is noisy",
              "No reranking, so the most useful passages stay buried",
              "No source grounding or citations",
              "No fallback when retrieval confidence is low",
            ],
          },
          {
            title: "RAG in one sentence",
            paragraphs: [
              "If you want the shortest explanation, it is this: RAG is a way to connect an LLM to the right knowledge at the right moment.",
              "That is why RAG matters so much in professional systems. It moves AI from interesting demos toward reliable, context-aware, domain-grounded products.",
            ],
          },
        ],
      },
      ru: {
        label: "AI",
        title: "RAG простыми словами",
        excerpt:
          "Практичное объяснение Retrieval-Augmented Generation: что это такое, зачем это нужно и как заставить LLM отвечать не догадками, а на основе ваших данных.",
        publishedAt: "3 апреля 2026",
        readingTime: "7 мин чтения",
        lead:
          "RAG — один из тех терминов, которые очень быстро стали звучать на каждом разговоре про AI, хотя по сути идея довольно простая. RAG — это способ заставить языковую модель отвечать не только из своего общего обучения, но и на основе конкретных документов, базы знаний или продуктовых данных, которые важны именно для вашей системы.",
        sections: [
          {
            title: "Почему обычного ответа LLM часто недостаточно",
            paragraphs: [
              "Большая языковая модель отлично генерирует связный текст, но она не обязана знать внутреннюю документацию вашей компании, актуальные процессы, свежую версию бизнес-правил или последние изменения в продукте. Если просто задать ей вопрос в production-сценарии, она может ответить красиво, но неправильно.",
              "Именно эту бизнес-проблему и решает RAG. Вместо того чтобы просить модель «вспомнить» ответ из памяти, мы сначала находим релевантный контекст в доверенных источниках, а уже потом просим модель сформировать ответ.",
            ],
          },
          {
            title: "Что такое RAG на самом деле",
            paragraphs: [
              "RAG расшифровывается как Retrieval-Augmented Generation. Звучит академично, но сама схема очень понятна: пользователь задаёт вопрос, система ищет по набору документов, выбирает самые релевантные фрагменты и передаёт их в prompt вместе с вопросом.",
              "То есть модель больше не отвечает в вакууме. Она отвечает, имея перед собой фактическую опору. Поэтому хороший RAG ощущается не как абстрактный чат-бот, а как ассистент, который умеет отвечать по вашим данным и опираться на конкретные источники.",
            ],
            bullets: [
              "Retrieval находит релевантные знания",
              "Augmentation добавляет эти знания в prompt",
              "Generation формирует финальный ответ на основе контекста",
            ],
          },
          {
            title: "Простая аналогия",
            paragraphs: [
              "Представьте опытного инженера на встрече. Без документов он отвечает по памяти. С открытыми спецификациями, заметками и схемами он отвечает точнее, увереннее и меньше импровизирует. RAG делает для LLM примерно то же самое.",
              "Важно понимать: сама модель от этого не становится «магически умнее». Умнее становится система вокруг неё, потому что она умеет искать нужные знания, правильно их отбирать и вовремя подкладывать модели.",
            ],
          },
          {
            title: "Как выглядит пайплайн на практике",
            paragraphs: [
              "Production-RAG начинается задолго до первого пользовательского вопроса. Сначала мы собираем источники: PDF-файлы, wiki-страницы, тикеты, выгрузки из базы, API-спеки, регламенты, инструкции и другие документы. Затем очищаем их, режем на чанки, обогащаем метаданными и переводим в embeddings для поиска.",
              "Когда приходит вопрос пользователя, система превращает его в поисковый запрос, находит релевантные чанки, при необходимости делает reranking и только потом формирует prompt, где есть и вопрос, и найденный контекст. После этого модель генерирует ответ.",
            ],
            bullets: [
              "Ingestion и chunking документов",
              "Embedding и индексация",
              "Retrieval и reranking",
              "Сборка prompt",
              "Generation и постобработка ответа",
            ],
          },
          {
            title: "Откуда на самом деле берётся качество",
            paragraphs: [
              "Многие команды сначала думают о модели, но качество RAG очень часто зависит не столько от LLM, сколько от retrieval-слоя. Если вы достали не те чанки, модель будет уверенно пересказывать не то. Если контекст шумный, сильная модель всё равно даст слабый ответ.",
              "Поэтому хорошая RAG-система — это в большой степени задача информационной архитектуры: как вы режете документы, какие храните метаданные, как фильтруете по источникам, как делаете reranking и как решаете, достаточно ли у системы оснований, чтобы вообще отвечать.",
            ],
          },
          {
            title: "Почему RAG полезен в реальных продуктах",
            paragraphs: [
              "RAG особенно полезен там, где ответы должны зависеть от изменяемых, внутренних или доменно-специфичных знаний. Внутренняя документация обновляется, бизнес-правила меняются, API-контракты версионируются, compliance-политики переписываются. Дообучать модель под каждое такое изменение долго и дорого. Обновлять retrieval-слой намного практичнее.",
              "Именно поэтому RAG используют в support-ассистентах, внутренних knowledge chat-системах, enterprise search, incident copilots, onboarding-инструментах, системах анализа документов и AI-слое поверх продуктовой документации.",
            ],
          },
          {
            title: "Типичные ошибки",
            paragraphs: [
              "Первая ошибка — думать, что RAG = 'подключили vector database и всё заработало'. На практике плохой chunking, дублирующиеся источники, слабые метаданные и отсутствие reranking легко делают ответы хуже, а не лучше.",
              "Вторая ошибка — заставлять модель отвечать всегда. Иногда лучший ответ — это честное: 'У меня недостаточно данных в найденных документах'. Надёжная система не та, которая отвечает на всё подряд, а та, которая понимает, когда не стоит притворяться уверенной.",
            ],
            bullets: [
              "Чанки слишком большие или слишком мелкие",
              "Нет метаданных, поэтому retrieval шумный",
              "Нет reranking, и лучшие фрагменты остаются ниже в выдаче",
              "Нет привязки ответа к источникам",
              "Нет fallback-сценария при низкой уверенности retrieval-слоя",
            ],
          },
          {
            title: "RAG в одной фразе",
            paragraphs: [
              "Если объяснять совсем коротко, то RAG — это способ подключить LLM к правильным знаниям в правильный момент.",
              "И именно поэтому RAG так важен для профессиональных систем: он переводит AI из разряда красивых демо в сторону надёжных, контекстных и действительно полезных продуктов.",
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
