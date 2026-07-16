# QuizParty MVP

## Описание проекта

QuizParty — веб-приложение для проведения онлайн-квизов в режиме реального времени.

Проект разработан в рамках учебной практики как MVP (Minimum Viable Product).

Система предусматривает две роли:

- Организатор — создает и запускает квизы.
- Участник — подключается к комнате по коду и проходит квиз.

---

# Возможности

## Организатор

- Регистрация
- Авторизация
- Создание квиза
- Добавление вопросов
- Запуск комнаты
- Просмотр лидерборда

## Участник

- Авторизация
- Подключение по коду комнаты
- Прохождение квиза
- Просмотр результатов
- История участия

---

# Используемые технологии

## Frontend

- React
- React Router
- JavaScript
- HTML5
- CSS3

## Backend

- Node.js
- Express

## База данных

- SQL (схема базы данных)

## Инструменты разработки

- Visual Studio Code
- Git
- GitHub
- Figma

---

# Структура проекта

```
QuizParty-MVP
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── assets
│   │   └── App.jsx
│   └── package.json
│
├── server
│   ├── routes
│   ├── controllers
│   ├── models
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── database
│   └── schema.sql
│
└── README.md
```

---

# Запуск проекта

## Frontend

```bash
cd client
npm install
npm run dev
```

Frontend будет доступен по адресу:

```
http://localhost:5173
```

---

## Backend

```bash
cd server
npm install
npm run dev
```

Backend будет доступен по адресу:

```
http://localhost:5000
```

---

# Структура базы данных

Проект включает следующие сущности:

- Users
- Quizzes
- Questions
- Answers
- Rooms
- Results

Схема базы данных находится в файле:

```
database/schema.sql
```

---

# Макеты интерфейса

Макеты пользовательского интерфейса разработаны в Figma.

Ссылка:

(https://www.figma.com/design/9XkUMRE2yMDFRZEyyHNinZ/QUIZPARTY?node-id=0-1&t=QadZFSfAIRnoO88O-1)

---

# Репозиторий

GitHub:

(https://github.com/wealldiealone/QuizParty-MVP)

---

# Статус проекта

Проект реализован в формате MVP.

В текущей версии реализованы:

- пользовательский интерфейс;
- маршрутизация страниц;
- серверная часть на Express;
- базовая структура REST API;
- схема базы данных.

Полная интеграция с базой данных и поддержка взаимодействия в реальном времени (WebSocket) не реализованы и могут быть добавлены в следующих версиях проекта.

---