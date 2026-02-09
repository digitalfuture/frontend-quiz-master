import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    title: 'JS Middle Developer Quiz',
    start: 'Start Quiz',
    next: 'Next Question',
    prev: 'Previous',
    finish: 'Finish',
    score: 'Your Score',
    correct: 'Correct!',
    incorrect: 'Wrong Answer',
    options: 'Options',
    restart: 'Restart Quiz',
    progress: 'Question {current} of {total}',
    category: 'Category',
    check: 'Check Answer',
    congrats: 'Congratulations!',
    resultText: 'You have completed the quiz. Here is how you did:',
    welcome: 'Test your knowledge of JavaScript, TypeScript, and modern web development.'
  },
  ru: {
    title: 'Тест для Middle JS разработчика',
    start: 'Начать тест',
    next: 'Следующий вопрос',
    prev: 'Предыдущий',
    finish: 'Завершить',
    score: 'Ваш результат',
    correct: 'Верно!',
    incorrect: 'Неверно',
    options: 'Варианты',
    restart: 'Начать заново',
    progress: 'Вопрос {current} из {total}',
    category: 'Категория',
    check: 'Проверить',
    congrats: 'Поздравляем!',
    resultText: 'Вы прошли тест. Вот ваши результаты:',
    welcome: 'Проверьте свои знания JavaScript, TypeScript и современной веб-разработки.'
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

export default i18n;
