<h1 align="center">🌐 CLODE-AI</h1>
<p align="center">Інтелектуальний перекладач на базі Gemini AI, побудований з використанням Next.js та TypeScript</p>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/SashaChun/CLODE-AI?color=blue" />
  <img src="https://img.shields.io/github/last-commit/SashaChun/CLODE-AI" />
  <img src="https://img.shields.io/github/license/SashaChun/CLODE-AI" />
</p>

---

## 📖 Опис проєкту

**CLODE-AI** — це сучасний AI-перекладач, що використовує потужну модель **Gemini AI** для забезпечення швидкого та точного перекладу тексту в реальному часі. Розроблений на основі **Next.js**, **TypeScript** та **Tailwind CSS**, інтерфейс є інтуїтивним, адаптивним і придатним для інтеграції у будь-який веб-застосунок.

---

## ⚙️ Функціонал

- 🚀 **Швидкий переклад** — миттєва обробка тексту
- 🧠 **Сучасна технологія** — модель Gemini AI
- 🎯 **Простота у використанні** — інтуїтивний інтерфейс
- 🌍 **Кросплатформеність** — працює в різних браузерах та на пристроях
- 🗣️ **Багатомовна підтримка** — широкий набір мов для перекладу

---

## 🖼️ Зображення

![Демо](https://github.com/user-attachments/assets/1ed2696a-e902-4b65-8b19-8d581d64f1af)

---

## 🛠️ Технології

- **Next.js** — SSR та генерація статичних сторінок
- **Gemini AI** — сучасна AI-модель перекладу
- **TypeScript** — надійна типізація для JavaScript
- **Tailwind CSS** — стиль сучасного UI

---

## 📦 Встановлення

Щоб розгорнути проєкт локально:

```bash
# 1. Клонуй репозиторій
git clone https://github.com/SashaChun/CLODE-AI.git

# 2. Перейди в директорію проєкту
cd CLODE-AI

# 3. Встанови залежності
npm install

# 4. Створи файл .env.local на основі .env.example (якщо є)
# та додай свій ключ API Gemini
echo "GOOGLE_GENAI_API_KEY=your_api_key_here" > .env.local

# 5. Запусти застосунок у режимі розробки
npm run dev
