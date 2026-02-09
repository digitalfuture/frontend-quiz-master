import type { Question } from '../types/quiz';

export const questions: Question[] = [
  // 1. JavaScript Core - Типы данных и структуры
  {
    id: 1,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Типы данных и структуры',
    question: {
      en: 'What primitive data types exist in JavaScript?',
      ru: 'Какие примитивные типы данных существуют в JavaScript?'
    },
    options: [
      { id: 'a', text: { en: 'string, number, boolean, null, undefined, symbol, bigint', ru: 'string, number, boolean, null, undefined, symbol, bigint' } },
      { id: 'b', text: { en: 'string, number, array, object, function', ru: 'string, number, array, object, function' } },
      { id: 'c', text: { en: 'int, float, double, char, boolean', ru: 'int, float, double, char, boolean' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 2,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Типы данных и структуры',
    question: {
      en: 'What is the main difference between null and undefined?',
      ru: 'В чем основная разница между null и undefined?'
    },
    options: [
      { id: 'a', text: { en: 'They are identical and can be used interchangeably', ru: 'Они идентичны и могут использоваться взаимозаменяемо' } },
      { id: 'b', text: { en: 'undefined means a variable has been declared but has no value; null is an assigned value representing "no value"', ru: 'undefined означает, что переменная объявлена, но не имеет значения; null — это присвоенное значение, представляющее "отсутствие значения"' } },
      { id: 'c', text: { en: 'null is for numbers, undefined is for strings', ru: 'null — для чисел, undefined — для строк' } }
    ],
    correctOptionId: 'b'
  },
  {
    id: 3,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Функции и замыкания',
    question: {
      en: 'What is a closure in JavaScript?',
      ru: 'Что такое замыкание (closure)?'
    },
    options: [
      { id: 'a', text: { en: 'A function that remembers variables from its outer scope', ru: 'Функция, которая запоминает переменные из своей внешней области видимости' } },
      { id: 'b', text: { en: 'Closing a browser tab', ru: 'Закрытие вкладки браузера' } },
      { id: 'c', text: { en: 'A private class method', ru: 'Приватный метод класса' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 4,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Прототипы и ООП',
    question: {
      en: 'How does prototypal inheritance work in JavaScript?',
      ru: 'Как работает прототипное наследование в JavaScript?'
    },
    options: [
      { id: 'a', text: { en: 'Objects inherit directly from other objects through a prototype link', ru: 'Объекты наследуют напрямую от других объектов через ссылку на прототип' } },
      { id: 'b', text: { en: 'It uses classes just like Java or C++', ru: 'Используются классы так же, как в Java или C++' } },
      { id: 'c', text: { en: 'It is not possible to inherit in JavaScript', ru: 'В JavaScript невозможно наследование' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 5,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Асинхронность',
    question: {
      en: 'What is the Event Loop?',
      ru: 'Что такое Event Loop?'
    },
    options: [
      { id: 'a', text: { en: 'A mechanism that manages memory', ru: 'Механизм управления памятью' } },
      { id: 'b', text: { en: 'A mechanism that handles asynchronous callbacks in a single-threaded environment', ru: 'Механизм, обрабатывающий асинхронные колбэки в однопоточной среде' } },
      { id: 'c', text: { en: 'A CSS feature for loops', ru: 'Функция CSS для циклов' } }
    ],
    correctOptionId: 'b'
  },
  {
    id: 6,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Основы типизации',
    question: {
      en: 'What is the difference between "type" and "interface" in TypeScript?',
      ru: 'В чем разница между "type" и "interface" в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'Interfaces support declaration merging, types do not', ru: 'Интерфейсы поддерживают объединение объявлений, типы — нет' } },
      { id: 'b', text: { en: 'Types are faster', ru: 'Типы быстрее' } },
      { id: 'c', text: { en: 'There is no difference', ru: 'Разницы нет' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 7,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Семантическая верстка',
    question: {
      en: 'Why is semantic HTML important?',
      ru: 'Почему важна семантическая верстка?'
    },
    options: [
      { id: 'a', text: { en: 'For accessibility (SEO, screen readers)', ru: 'Для доступности (SEO, экранные дикторы)' } },
      { id: 'b', text: { en: 'It makes the CSS load faster', ru: 'Она ускоряет загрузку CSS' } },
      { id: 'c', text: { en: 'It is required by browser standards', ru: 'Это требуется стандартами браузера' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 8,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Flexbox',
    question: {
      en: 'How does flex-grow work?',
      ru: 'Как работает свойство flex-grow?'
    },
    options: [
      { id: 'a', text: { en: 'It defines how much an item will grow relative to others if there is space', ru: 'Оно определяет, насколько элемент будет увеличиваться относительно других при наличии свободного места' } },
      { id: 'b', text: { en: 'It increases the border size', ru: 'Оно увеличивает размер рамки' } },
      { id: 'c', text: { en: 'It makes the font larger', ru: 'Оно увеличивает шрифт' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 9,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'DOM и события',
    question: {
      en: 'What is Event Bubbling?',
      ru: 'Что такое всплытие событий (Event Bubbling)?'
    },
    options: [
      { id: 'a', text: { en: 'Events trigger from the element up to the root', ru: 'События срабатывают от элемента вверх до корня' } },
      { id: 'b', text: { en: 'Events trigger from the root down to the element', ru: 'События срабатывают от корня вниз к элементу' } },
      { id: 'c', text: { en: 'Events only trigger on the element itself', ru: 'События срабатывают только на самом элементе' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 10,
    category: 'Architecture',
    section: '17. Архитектура фронтенда',
    topic: 'Паттерны и подходы',
    question: {
      en: 'What is Feature-Sliced Design (FSD)?',
      ru: 'Что такое Feature-Sliced Design (FSD)?'
    },
    options: [
      { id: 'a', text: { en: 'A methodology for organizing frontend code by features, layers, and segments', ru: 'Методология организации фронтенд-кода по фичам, слоям и сегментам' } },
      { id: 'b', text: { en: 'A tool for slicing images', ru: 'Инструмент для нарезки изображений' } },
      { id: 'c', text: { en: 'A way to optimize React rendering', ru: 'Способ оптимизации рендеринга React' } }
    ],
    correctOptionId: 'a'
  }
];
