# Обзор проекта

Портфолио-сайт Savely Danko: страницы, блог, контакты. Статический SPA с EN/RU локализацией.

**Стек:** React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · React Router v7

---

## Страницы и маршруты

| Маршрут | Компонент | Содержимое |
|---------|-----------|------------|
| `/` | `HomePage` | Hero + About + CoreExpertise + Projects + TechStack |
| `/about` | `AboutPage` | Биография, образование, принципы, резюме |
| `/work` | `WorkPage` | Полный список проектов |
| `/blog` | `BlogPage` | Список статей с карточками |
| `/blog/:slug` | `BlogArticlePage` | Отдельная статья по slug |
| `/contact` | `ContactPage` | Форма (открывает mailto), email, соцсети |
| `/privacy` | `PrivacyPage` | Политика обработки персональных данных (EN/RU) |
| `*` | `NotFoundPage` | 404 |

Ссылка на `/privacy` размещена в футере рядом с копирайтом.

---

## Структура src/

```
src/
├── main.tsx                    # Точка входа
├── app/
│   ├── App.tsx                 # Роутер, Header/Footer, scroll-to-top
│   ├── SiteMeta.tsx            # <title>, description, og-теги — обновляются на каждой странице
│   └── providers/
│       ├── LanguageProvider.tsx # Контекст EN/RU, хранится в localStorage
│       └── ThemeProvider.tsx    # Контекст dark/light, хранится в localStorage
├── pages/                      # Тонкие оркестраторы — только собирают секции
├── sections/                   # Крупные блоки страниц (см. ниже)
├── components/
│   ├── ui/                     # Дизайн-примитивы
│   ├── layout/                 # Каркас: Header, Footer, Section
│   └── common/                 # Зарезервировано для доменных компонентов
├── data/                       # Весь контент сайта (см. ниже)
├── i18n/                       # Переводы EN/RU
├── config/
│   └── site.ts                 # URL, название сайта, base path
├── constants/
│   ├── navigation.ts           # Ссылки навигации
│   └── socials.ts              # Ссылки на соцсети
├── hooks/index.ts              # Зарезервировано для кастомных хуков
├── utils/cn.ts                 # Утилита слияния className
├── types/index.ts              # Общий тип SocialLink
└── styles/globals.css          # Tailwind @theme: цвета, анимации
```

---

## Секции (src/sections/)

| Секция | Файл | Что рендерит |
|--------|------|--------------|
| Hero | `Hero/Hero.tsx` | Заголовок, бейдж, CTA-кнопки, анимированные навыки по орбите, счётчики |
| About | `About/About.tsx` | Краткое описание, статистика опыта |
| About (полный) | `About/AboutShowcase.tsx` | Биография, принципы, образование, фото, скачать резюме |
| CoreExpertise | `CoreExpertise/CoreExpertise.tsx` | 8 областей компетенций с иконками и описаниями |
| Projects | `Projects/Projects.tsx` | 3 featured-проекта (использует ProjectsShowcase) |
| Projects (общий) | `Projects/ProjectsShowcase.tsx` | Переиспользуемый список проектов — карточки с логотипом, стеком, ссылкой |
| TechStack | `TechStack/TechStack.tsx` | Бегущая строка с технологиями + категории по доменам |

---

## Данные (src/data/)

| Файл | Что хранит |
|------|-----------|
| `projects.ts` | Массив проектов: название, категория, описание, стек, ссылка, логотип |
| `skills.ts` | Строки marquee (18 технологий) + 7 категорий стека (68+ технологий) |
| `coreExpertise.ts` | 8 областей компетенций: иконка, заголовок, описание |
| `blog.ts` | Статьи блога: slug, теги, контент EN/RU (разделы, абзацы, списки) |
| `aboutPage.ts` | Биография, принципы, образование, пути к фото и резюме |
| `contactPage.ts` | Email, локация, ссылки соцсетей |
| `techIcons.ts` | Маппинг имён технологий на иконки |

---

## Компоненты (src/components/)

### ui/ — дизайн-примитивы

| Компонент | Назначение |
|-----------|-----------|
| `Button.tsx` | Кнопка с вариантами стилей |
| `Badge.tsx` | Маленький лейбл (primary / secondary) |
| `TechnologyBadge.tsx` | Бейдж технологии с иконкой |
| `SectionHeading.tsx` | Заголовок секции + подпись + лейбл |
| `OrbitingSkills.tsx` | Анимированные иконки навыков по орбите (используется в Hero) |

### layout/ — каркас страницы

| Компонент | Назначение |
|-----------|-----------|
| `Header.tsx` | Навигация, переключатели языка и темы, мобильное меню, прогресс-бар скролла |
| `Footer.tsx` | Соцсети, копирайт, ссылка на политику конфиденциальности |
| `Section.tsx` | Обёртка с единым padding для всех секций |

---

## Локализация (src/i18n/)

- Два файла: `en.ts` и `ru.ts` — одинаковая структура объекта `Translations`
- Язык по умолчанию: **RU** (определяется в `LanguageProvider`)
- Переключатель: в шапке сайта, выбор сохраняется в `localStorage`
- Доступ к переводам: `const t = useTranslation()` → `t.hero.title`, `t.projects.items[0]` и т.д.
- Тексты секций — в `i18n/`, контент проектов/блога — в `data/` (у каждой сущности свои поля `en`/`ru`)

---

## Конфигурация

| Файл | Назначение |
|------|-----------|
| `src/config/site.ts` | Имя сайта, URL, base path для субдиректорий; читает `VITE_*` переменные |
| `src/constants/navigation.ts` | 4 пункта навигации с href |
| `src/constants/socials.ts` | GitHub, Telegram |
| `.env.production.example` | Шаблон переменных окружения для продакшн-сборки |
| `src/styles/globals.css` | Цветовая тема (`@theme`): фон `#09090b`, primary `#8b5cf6` |

---

## Быстрый справочник

| Задача | Файл |
|--------|------|
| Изменить текст на сайте | `src/i18n/ru.ts` или `src/i18n/en.ts` |
| Добавить / изменить проект | `src/data/projects.ts` + `src/i18n/*.ts` (projects.items) |
| Добавить / изменить статью блога | `src/data/blog.ts` → см. `docs/blog-guide.md` |
| Изменить биографию / образование | `src/data/aboutPage.ts` |
| Изменить email / соцсети | `src/data/contactPage.ts` и `src/constants/socials.ts` |
| Изменить технологии в стеке | `src/data/skills.ts` |
| Редактировать политику конфиденциальности | `src/i18n/ru.ts` и `src/i18n/en.ts` → ключ `privacy` |
| Добавить новую страницу | `src/pages/NewPage.tsx` + маршрут в `src/app/App.tsx` |
| Добавить новую секцию | `src/sections/Name/Name.tsx` + `index.ts` |
| Изменить цвета / шрифты | `src/styles/globals.css` (`@theme`) |
| Изменить пункты навигации | `src/constants/navigation.ts` |
| Задеплоить на VPS | см. `docs/deploy-guide.md` |
| Открыть админ-панель | `/admin/` (локально: `http://localhost:5174/admin/`) → см. ниже |

---

---

## Админ-панель (admin/)

CMS-интерфейс для управления контентом без правки кода.

```
admin/
├── backend/          # Express API + JWT auth (порт 3001)
│   ├── server.ts     # Точка входа
│   ├── routes/       # auth, projects, blog, publish
│   ├── middleware/   # JWT-проверка
│   ├── data/         # projects.json, blog.json — runtime-хранилище
│   ├── store.ts      # Чтение/запись JSON-файлов
│   └── types.ts      # Общие интерфейсы Project, BlogArticle
└── frontend/         # React SPA (Vite, порт 5174, base: /admin/)
    └── src/
        ├── pages/    # Login, ProjectsPage, BlogPage
        ├── components/
        │   ├── forms/          # ProjectForm, BlogArticleForm
        │   └── PublishButton   # Запускает сборку сайта
        └── lib/api.ts          # Typed fetch-клиент
```

**Принцип работы:**
1. Бэкенд читает/пишет JSON в `admin/backend/data/`
2. Кнопка «Publish» вызывает `POST /api/publish` — генерирует `src/data/projects.ts`, `src/data/blog.ts`, обновляет `src/i18n/*.ts` и запускает `npm run build`
3. Nginx раздаёт новую статику без рестарта

**Локальный запуск:**
```bash
# Терминал 1
cd admin/backend && cp .env.example .env  # заполнить пароль и JWT_SECRET
npm run dev

# Терминал 2
cd admin/frontend && npm run dev
# Открыть http://localhost:5174/admin/
```

**На продакшне** бэкенд работает как systemd-сервис `savadanko-admin`, фронтенд отдаётся Nginx как статика из `admin/frontend/dist/`. Подробнее — `docs/deploy-guide.md`.

---

## Связанные документы

- `docs/blog-guide.md` — как добавлять и редактировать статьи блога
- `docs/deploy-guide.md` — деплой на VPS через Ansible (Nginx + SSL + admin panel)
- `.env.production.example` — переменные окружения для продакшн-сборки
- `admin/backend/.env.example` — переменные для бэкенда админ-панели
