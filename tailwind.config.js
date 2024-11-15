/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // добавьте путь к HTML-файлам
    "./src/**/*.{js,ts,jsx,tsx}", // если используете React/Vue
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
