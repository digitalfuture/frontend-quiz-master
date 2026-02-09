import type { Question } from '../types/quiz';

export const questions: Question[] = [
  // 1. JavaScript Core
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
      { id: 'a', text: { en: 'A function that remembers variables from its outer scope even after the outer function has finished executing', ru: 'Функция, которая запоминает переменные из своей внешней области видимости даже после того, как внешняя функция завершила выполнение' } },
      { id: 'b', text: { en: 'Closing a browser tab', ru: 'Закрытие вкладки браузера' } },
      { id: 'c', text: { en: 'A private class method', ru: 'Приватный метод класса' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 4,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Функции и замыкания',
    question: {
      en: 'How does the "this" context work in arrow functions?',
      ru: 'Как работает контекст "this" в стрелочных функциях?'
    },
    options: [
      { id: 'a', text: { en: 'It refers to the element that triggered the event', ru: 'Он ссылается на элемент, вызвавший событие' } },
      { id: 'b', text: { en: 'Arrow functions do not have their own "this"; they inherit it from the lexical scope', ru: 'У стрелочных функций нет своего "this", они наследуют его из лексического окружения' } },
      { id: 'c', text: { en: 'It always refers to the global object (window)', ru: 'Он всегда ссылается на глобальный объект (window)' } }
    ],
    correctOptionId: 'b'
  },
  {
    id: 5,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Асинхронность',
    question: {
      en: 'What is the difference between microtasks and macrotasks in the Event Loop?',
      ru: 'В чем разница между микрозадачами и макрозадачами в Event Loop?'
    },
    options: [
      { id: 'a', text: { en: 'Microtasks (Promises) are executed after every macrotask and before the next rendering', ru: 'Микрозадачи (Promise) выполняются после каждой макрозадачи и перед следующим рендерингом' } },
      { id: 'b', text: { en: 'Macrotasks are faster than microtasks', ru: 'Макрозадачи работают быстрее микрозадач' } },
      { id: 'c', text: { en: 'There is no difference, the browser chooses the order', ru: 'Разницы нет, браузер сам выбирает порядок' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 6,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Асинхронность',
    question: {
      en: 'What does Promise.allSettled do?',
      ru: 'Что делает метод Promise.allSettled?'
    },
    options: [
      { id: 'a', text: { en: 'Waits for all promises to finish, regardless of whether they were fulfilled or rejected', ru: 'Ожидает завершения всех промисов, независимо от того, были они выполнены или отклонены' } },
      { id: 'b', text: { en: 'Rejects if at least one promise is rejected', ru: 'Отклоняется, если хотя бы один промис отклонен' } },
      { id: 'c', text: { en: 'Returns only successfully fulfilled promises', ru: 'Возвращает только успешно выполненные промисы' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 7,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Модули',
    question: {
      en: 'What is Tree Shaking?',
      ru: 'Что такое Tree Shaking?'
    },
    options: [
      { id: 'a', text: { en: 'A way to organize folders', ru: 'Способ организации папок' } },
      { id: 'b', text: { en: 'The process of removing unused code from the final bundle during build', ru: 'Процесс удаления неиспользуемого кода из итоговой сборки при сборке проекта' } },
      { id: 'c', text: { en: 'A type of data structure', ru: 'Тип структуры данных' } }
    ],
    correctOptionId: 'b'
  },

  // 2. TypeScript
  {
    id: 8,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Основы типизации',
    question: {
      en: 'Why is the "unknown" type safer than "any"?',
      ru: 'Почему тип "unknown" безопаснее, чем "any"?'
    },
    options: [
      { id: 'a', text: { en: 'It is not safer, they are identical', ru: 'Он не безопаснее, они идентичны' } },
      { id: 'b', text: { en: 'Operations on "unknown" are forbidden until you narrow or cast the type', ru: 'Любые операции над "unknown" запрещены, пока вы не сузите или не приведете его к конкретному типу' } },
      { id: 'c', text: { en: 'unknown takes up less memory', ru: 'unknown занимает меньше памяти' } }
    ],
    correctOptionId: 'b'
  },
  {
    id: 9,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Основы типизации',
    question: {
      en: 'What is a Discrimination Union?',
      ru: 'Что такое Discrimination Union (дискриминирующее объединение)?'
    },
    options: [
      { id: 'a', text: { en: 'A way to ban certain types', ru: 'Способ запретить определенные типы' } },
      { id: 'b', text: { en: 'A pattern where objects in a union have a common literal property used as a type guard', ru: 'Паттерн, где объекты в объединении имеют общее литеральное свойство, используемое для сужения типа' } },
      { id: 'c', text: { en: 'A type of database join', ru: 'Тип объединения баз данных' } }
    ],
    correctOptionId: 'b'
  },
  {
    id: 10,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'What does the "infer" keyword do in TypeScript?',
      ru: 'Что делает ключевое слово "infer" в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'It allows you to declare a type variable within a conditional type to be inferred', ru: 'Оно позволяет объявить переменную типа внутри условного типа для её автоматического определения' } },
      { id: 'b', text: { en: 'It forces a type to be treated as another', ru: 'Оно заставляет рассматривать тип как другой' } },
      { id: 'c', text: { en: 'It is used to import types', ru: 'Оно используется для импорта типов' } }
    ],
    correctOptionId: 'a'
  },

  // 3. HTML & Semantics
  {
    id: 11,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Семантическая верстка',
    question: {
      en: 'What is the main difference between <article> and <section>?',
      ru: 'В чем основная разница между <article> и <section>?'
    },
    options: [
      { id: 'a', text: { en: '<article> is for self-contained content; <section> is for grouping related content', ru: '<article> предназначен для независимого контента; <section> — для группировки связанного контента' } },
      { id: 'b', text: { en: 'They are the same', ru: 'Они одинаковы' } },
      { id: 'c', text: { en: '<section> is always larger than <article>', ru: '<section> всегда больше по размеру, чем <article>' } }
    ],
    correctOptionId: 'a'
  },

  // 4. CSS
  {
    id: 12,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Flexbox',
    question: {
      en: 'How does flex-shrink work?',
      ru: 'Как работает свойство flex-shrink?'
    },
    options: [
      { id: 'a', text: { en: 'It defines how much an item will shrink relative to others if space is limited', ru: 'Оно определяет, насколько пропорционально элемент будет уменьшаться, если места в контейнере недостаточно' } },
      { id: 'b', text: { en: 'It hides elements', ru: 'Оно скрывает элементы' } },
      { id: 'c', text: { en: 'It reduces the image quality', ru: 'Оно уменьшает качество изображений' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 13,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'CSS Grid',
    question: {
      en: 'What is the difference between auto-fill and auto-fit in Grid?',
      ru: 'В чем разница между auto-fill и auto-fit в Grid?'
    },
    options: [
      { id: 'a', text: { en: 'auto-fill creates empty tracks; auto-fit collapses empty tracks to fill the available space', ru: 'auto-fill создает пустые колонки; auto-fit схлопывает пустые колонки, чтобы контент занял все место' } },
      { id: 'b', text: { en: 'auto-fit is only for mobile', ru: 'auto-fit используется только для мобильных' } },
      { id: 'c', text: { en: 'There is no difference', ru: 'Разницы нет' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 14,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'CSS-переменные',
    question: {
      en: 'What is the advantage of using CSS Variables (Custom Properties) over SCSS variables?',
      ru: 'В чем преимущество CSS-переменных перед переменными SCSS?'
    },
    options: [
      { id: 'a', text: { en: 'CSS variables can be updated at runtime via JavaScript and respect the cascade', ru: 'CSS-переменные можно изменять на лету через JS, и они учитывают каскад стилей в браузере' } },
      { id: 'b', text: { en: 'CSS variables are faster to compile', ru: 'CSS-переменные быстрее компилируются' } },
      { id: 'c', text: { en: 'SCSS variables are no longer supported', ru: 'Переменные SCSS больше не поддерживаются' } }
    ],
    correctOptionId: 'a'
  },

  // 5. Browser API
  {
    id: 15,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'DOM и события',
    question: {
      en: 'What is Event Delegation?',
      ru: 'Что такое делегирование событий (Event Delegation)?'
    },
    options: [
      { id: 'a', text: { en: 'A pattern where a single event listener on a parent manages events for all its children', ru: 'Паттерн, при котором один обработчик на родительском элементе управляет событиями всех его дочерних элементов' } },
      { id: 'b', text: { en: 'Delegating work to a Web Worker', ru: 'Делегирование работы веб-воркеру' } },
      { id: 'c', text: { en: 'Stopping an event from bubbling', ru: 'Прекращение всплытия события' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 16,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Производительность',
    question: {
      en: 'What is the purpose of IntersectionObserver?',
      ru: 'Для чего используется IntersectionObserver?'
    },
    options: [
      { id: 'a', text: { en: 'To track when an element enters or leaves the browser viewport (e.g., for lazy loading)', ru: 'Для отслеживания момента, когда элемент входит в область видимости или покидает её (например, для ленивой загрузки)' } },
      { id: 'b', text: { en: 'To observe changes in variables', ru: 'Для наблюдения за изменением переменных' } },
      { id: 'c', text: { en: 'To measure the distance between two elements', ru: 'Для изменения расстояния между двумя элементами' } }
    ],
    correctOptionId: 'a'
  },

  // 7. Vue / Generic UI
  {
    id: 17,
    category: 'Vue.js',
    section: '7. Vue.js',
    topic: 'Composition API',
    question: {
      en: 'What is the difference between ref() and reactive() in Vue 3?',
      ru: 'В чем разница между ref() и reactive() во Vue 3?'
    },
    options: [
      { id: 'a', text: { en: 'ref() is for primitives and objects; reactive() is only for objects and doesn\'t require .value', ru: 'ref() для примитивов и объектов; reactive() только для объектов и не требует обращения через .value' } },
      { id: 'b', text: { en: 'reactive() is faster', ru: 'reactive() работает быстрее' } },
      { id: 'c', text: { en: 'ref() is only for class components', ru: 'ref() используется только для классовых компонентов' } }
    ],
    correctOptionId: 'a'
  },

  // 10. HTTP & API
  {
    id: 18,
    category: 'HTTP',
    section: '10. HTTP и работа с API',
    topic: 'HTTP протокол',
    question: {
      en: 'What is the main difference between HTTP/1.1 and HTTP/2?',
      ru: 'В чем главное отличие HTTP/2 от HTTP/1.1?'
    },
    options: [
      { id: 'a', text: { en: 'HTTP/2 supports multiplexing (multiple requests over one TCP connection) and is binary', ru: 'HTTP/2 поддерживает мультиплексирование (множество запросов в одном соединении) и является бинарным' } },
      { id: 'b', text: { en: 'HTTP/1.1 is faster', ru: 'HTTP/1.1 работает быстрее' } },
      { id: 'c', text: { en: 'HTTP/2 doesn\'t support JSON', ru: 'HTTP/2 не поддерживает JSON' } }
    ],
    correctOptionId: 'a'
  },

  // 11. Security
  {
    id: 19,
    category: 'Security',
    section: '11. Безопасность фронтенда',
    topic: 'Основные уязвимости',
    question: {
      en: 'How can you protect your application from XSS (Cross-Site Scripting)?',
      ru: 'Как защитить приложение от XSS (Cross-Site Scripting)?'
    },
    options: [
      { id: 'a', text: { en: 'By sanitizing user input and escaping it before rendering it in the DOM', ru: 'Путем очистки пользовательского ввода и его экранирования перед вставкой в DOM-дерево' } },
      { id: 'b', text: { en: 'By using HTTPS only', ru: 'Используя только HTTPS-соединение' } },
      { id: 'c', text: { en: 'By hiding the source code', ru: 'Скрывая исходный код приложения' } }
    ],
    correctOptionId: 'a'
  },

  // 13. Performance
  {
    id: 20,
    category: 'Performance',
    section: '13. Производительность',
    topic: 'Core Web Vitals',
    question: {
      en: 'What does the CLS (Cumulative Layout Shift) metric measure?',
      ru: 'Что измеряет метрика CLS (Cumulative Layout Shift)?'
    },
    options: [
      { id: 'a', text: { en: 'Visual stability: it measures the total score of all unexpected layout shifts on a page', ru: 'Визуальную стабильность: суммарный показатель неожиданных сдвигов контента на странице' } },
      { id: 'b', text: { en: 'The time it takes to load the largest element', ru: 'Время загрузки самого большого элемента' } },
      { id: 'c', text: { en: 'The speed of user input handling', ru: 'Скорость обработки ввода пользователя' } }
    ],
    correctOptionId: 'a'
  },
  // Batch 2: Advanced Topics
  {
    id: 21,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Прототипы и ООП',
    question: {
      en: 'What is the main difference between proto and prototype?',
      ru: 'В чем основная разница между __proto__ и prototype?'
    },
    options: [
      { id: 'a', text: { en: '__proto__ is on the object instance; prototype is on the constructor function', ru: '__proto__ есть у каждого инстанса объекта; prototype — только у функции-конструктора' } },
      { id: 'b', text: { en: 'They are the same', ru: 'Они идентичны' } },
      { id: 'c', text: { en: 'prototype is for ES6 classes only', ru: 'prototype используется только в ES6 классах' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 22,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What does the Nullish Coalescing Operator (??) do?',
      ru: 'Что делает оператор Nullish Coalescing (??)?'
    },
    options: [
      { id: 'a', text: { en: 'Returns the right-hand side if the left-hand side is null or undefined', ru: 'Возвращает правый операнд, если левый равен null или undefined' } },
      { id: 'b', text: { en: 'Returns the right-hand side if the left-hand side is any falsy value (0, "", false)', ru: 'Возвращает правый операнд, если левый является любым ложным значением (0, "", false)' } },
      { id: 'c', text: { en: 'It is a ternary operator shortcut', ru: 'Это сокращение для тернарного оператора' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 23,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'How does the Omit utility type work?',
      ru: 'Как работает утилита Omit в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'It constructs a type by picking all properties from Type and then removing Keys', ru: 'Она создает новый тип, выбирая все свойства из Type и удаляя указанные ключи (Keys)' } },
      { id: 'b', text: { en: 'It makes all properties optional', ru: 'Она делает все свойства необязательными' } },
      { id: 'c', text: { en: 'It hides properties from the console', ru: 'Она скрывает свойства из консоли' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 24,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Основы CSS',
    question: {
      en: 'Which CSS selector has the highest specificity?',
      ru: 'У какого CSS-селектора самый высокий приоритет (специфичность)?'
    },
    options: [
      { id: 'a', text: { en: 'ID selector (#id)', ru: 'ID селектор (#id)' } },
      { id: 'b', text: { en: 'Class selector (.class)', ru: 'Классовый селектор (.class)' } },
      { id: 'c', text: { en: 'Tag selector (div)', ru: 'Селектор по тегу (div)' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 25,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Позиционирование',
    question: {
      en: 'How does "position: sticky" behave?',
      ru: 'Как работает "position: sticky"?'
    },
    options: [
      { id: 'a', text: { en: 'Acts like relative until it reaches a scroll threshold, then "sticks" like fixed within its parent', ru: 'Ведет себя как relative до порога прокрутки, затем "прилипает" как fixed, но только внутри родителя' } },
      { id: 'b', text: { en: 'Always stays in the same place on the screen', ru: 'Всегда остается в одном и том же месте на экране' } },
      { id: 'c', text: { en: 'Moves the element to the top of the body', ru: 'Перемещает элемент в самое начало тега body' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 26,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Другие API',
    question: {
      en: 'What is a Web Worker?',
      ru: 'Что такое Web Worker?'
    },
    options: [
      { id: 'a', text: { en: 'A script that runs in the background, separate from the main execution thread', ru: 'Сценарий, выполняемый в фоновом режиме, отдельно от основного потока выполнения' } },
      { id: 'b', text: { en: 'A tool for automating browser actions', ru: 'Инструмент для автоматизации действий в браузере' } },
      { id: 'c', text: { en: 'A part of the browser that saves cookies', ru: 'Часть браузера, отвечающая за сохранение кеша' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 27,
    category: 'HTTP',
    section: '10. HTTP и работа с API',
    topic: 'HTTP протокол',
    question: {
      en: 'What is a CORS Preflight request?',
      ru: 'Что такое Preflight запрос в CORS?'
    },
    options: [
      { id: 'a', text: { en: 'An OPTIONS request sent by the browser to check if the server permits the actual request', ru: 'Запрос методом OPTIONS, отправляемый браузером для проверки разрешений сервера' } },
      { id: 'b', text: { en: 'A request to load images faster', ru: 'Запрос на ускоренную загрузку изображений' } },
      { id: 'c', text: { en: 'A way to refresh authorization tokens', ru: 'Способ обновления токенов авторизации' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 28,
    category: 'Security',
    section: '11. Безопасность фронтенда',
    topic: 'Основные уязвимости',
    question: {
      en: 'What is CSRF (Cross-Site Request Forgery)?',
      ru: 'Что такое CSRF (Cross-Site Request Forgery)?'
    },
    options: [
      { id: 'a', text: { en: 'An attack that tricks an authenticated user into performing unwanted actions on a different site', ru: 'Атака, при которой залогиненный пользователь совершает нежелательное действие на другом сайте без своего ведома' } },
      { id: 'b', text: { en: 'Stealing cookies via JavaScript', ru: 'Кража куки-файлов через JavaScript' } },
      { id: 'c', text: { en: 'A type of DDoS attack', ru: 'Тип DDoS-атаки' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 29,
    category: 'Performance',
    section: '13. Производительность',
    topic: 'Оптимизация загрузки',
    question: {
      en: 'What is the "Critical Rendering Path"?',
      ru: 'Что такое "Критический путь рендеринга" (Critical Rendering Path)?'
    },
    options: [
      { id: 'a', text: { en: 'The sequence of steps the browser goes through to convert HTML, CSS, and JS into pixels on the screen', ru: 'Последовательность шагов, которые проходит браузер для превращения кода в пиксели на экране' } },
      { id: 'b', text: { en: 'A tool for checking page speed', ru: 'Инструмент для проверки скорости страницы' } },
      { id: 'c', text: { en: 'A way to prioritize images', ru: 'Способ приоритезации изображений' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 30,
    category: 'Architecture',
    section: '17. Архитектура фронтенда',
    topic: 'Паттерны и подходы',
    question: {
      en: 'What is Atomic Design?',
      ru: 'Что такое методология Atomic Design?'
    },
    options: [
      { id: 'a', text: { en: 'A design system methodology splitting UI into Atoms, Molecules, Organisms, Templates, and Pages', ru: 'Методология создания дизайн-систем, разделяющая интерфейс на Атомы, Молекулы, Организмы, Шаблоны и Страницы' } },
      { id: 'b', text: { en: 'A way to speed up JS execution', ru: 'Способ ускорения выполнения JS' } },
      { id: 'c', text: { en: 'A type of database architecture', ru: 'Тип архитектуры баз данных' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 31,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Типы данных и структуры',
    question: {
      en: 'What is the main advantage of WeakMap over Map?',
      ru: 'В чем главное преимущество WeakMap перед Map?'
    },
    options: [
      { id: 'a', text: { en: 'WeakMap doesn\'t prevent garbage collection of its keys (objects)', ru: 'WeakMap не препятствует сборке мусора для своих ключей (объектов)' } },
      { id: 'b', text: { en: 'WeakMap is faster for iterating', ru: 'WeakMap быстрее перебирается в цикле' } },
      { id: 'c', text: { en: 'WeakMap supports primitive keys', ru: 'WeakMap поддерживает примитивные ключи' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 32,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Основы типизации',
    question: {
      en: 'What does the "never" type represent in TypeScript?',
      ru: 'Что представляет собой тип "never" в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'A value that will never occur (e.g., function that always throws an error)', ru: 'Значение, которое никогда не возникнет (например, функция, которая всегда выбрасывает ошибку)' } },
      { id: 'b', text: { en: 'An alias for the "null" type', ru: 'Псевдоним для типа "null"' } },
      { id: 'c', text: { en: 'A type that can be anything', ru: 'Тип, который может быть чем угодно' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 33,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Адаптивность и респонсивность',
    question: {
      en: 'What is the difference between "em" and "rem" units?',
      ru: 'В чем разница между единицами измерения "em" и "rem"?'
    },
    options: [
      { id: 'a', text: { en: 'rem is relative to the root (html) font-size; em is relative to the parent element font-size', ru: 'rem зависит от размера шрифта корня (html); em — от размера шрифта родительского элемента' } },
      { id: 'b', text: { en: 'em is only for margins, rem for font-size', ru: 'em только для отступов, rem — для шрифтов' } },
      { id: 'c', text: { en: 'There is no difference in modern browsers', ru: 'В современных браузерах разницы нет' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 34,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Работа с данными',
    question: {
      en: 'Which storage allows storing the largest amount of data?',
      ru: 'Какое хранилище позволяет хранить наибольший объем данных?'
    },
    options: [
      { id: 'a', text: { en: 'IndexedDB', ru: 'IndexedDB' } },
      { id: 'b', text: { en: 'localStorage', ru: 'localStorage' } },
      { id: 'c', text: { en: 'Cookies', ru: 'Cookies' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 35,
    category: 'Architecture',
    section: '17. Архитектура фронтенда',
    topic: 'Работа с формами',
    question: {
      en: 'What is the main difference between Controlled and Uncontrolled components in terms of forms?',
      ru: 'В чем основная разница между управляемыми и неуправляемыми компонентами в формах?'
    },
    options: [
      { id: 'a', text: { en: 'Controlled components have their state managed by the UI framework; Uncontrolled rely on the DOM itself', ru: 'Состояние управляемых компонентов контролируется фреймворком; неуправляемые полагаются на сам DOM' } },
      { id: 'b', text: { en: 'Uncontrolled components are faster', ru: 'Неуправляемые компоненты работают быстрее' } },
      { id: 'c', text: { en: 'Controlled components don\'t support validation', ru: 'Управляемые компоненты не поддерживают валидацию' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 36,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What is a JavaScript Proxy?',
      ru: 'Что такое Proxy в JavaScript?'
    },
    options: [
      { id: 'a', text: { en: 'An object that wraps another object and intercepts operations like reading or writing properties', ru: 'Объект, который оборачивает другой объект и позволяет перехватывать операции обращения к нему' } },
      { id: 'b', text: { en: 'A local network server', ru: 'Локальный сетевой сервер' } },
      { id: 'c', text: { en: 'A way to make code execution faster', ru: 'Способ ускорить выполнение кода' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 37,
    category: 'HTTP',
    section: '10. HTTP и работа с API',
    topic: 'HTTP протокол',
    question: {
      en: 'What does the 304 Not Modified status code mean?',
      ru: 'Что означает статус-код 304 Not Modified?'
    },
    options: [
      { id: 'a', text: { en: 'The resource has not changed since the last request, and the browser can use the cached version', ru: 'Ресурс не изменился с момента последнего запроса, браузер может использовать версию из кеша' } },
      { id: 'b', text: { en: 'The page was deleted', ru: 'Страница была удалена' } },
      { id: 'c', text: { en: 'The server is currently unavailable', ru: 'Сервер временно недоступен' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 38,
    category: 'Testing',
    section: '12. Тестирование',
    topic: 'Основы тестирования',
    question: {
      en: 'What is the "Testing Pyramid"?',
      ru: 'Что такое "Пирамида тестирования"?'
    },
    options: [
      { id: 'a', text: { en: 'A strategy suggesting many unit tests, fewer integration tests, and even fewer E2E tests', ru: 'Стратегия, при которой юнит-тестов должно быть много, интеграционных — меньше, а E2E — совсем мало' } },
      { id: 'b', text: { en: 'A way to structure test folders', ru: 'Способ организации папок с тестами' } },
      { id: 'c', text: { en: 'A type of performance test', ru: 'Тип нагрузочного тестирования' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 39,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Функции и замыкания',
    question: {
      en: 'What is Currying in JavaScript?',
      ru: 'Что такое каррирование в JavaScript?'
    },
    options: [
      { id: 'a', text: { en: 'Transforming a function with multiple arguments into a sequence of functions with single arguments', ru: 'Трансформация функции со многими аргументами в последовательность функций с одним аргументом' } },
      { id: 'b', text: { en: 'A way to speed up recursion', ru: 'Способ ускорения рекурсии' } },
      { id: 'c', text: { en: 'A tool for measuring performance', ru: 'Инструмент для замеры производительности' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 40,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'DOM и события',
    question: {
      en: 'What is a DocumentFragment?',
      ru: 'Что такое DocumentFragment?'
    },
    options: [
      { id: 'a', text: { en: 'A lightweight "virtual" DOM node that can minimize reflows by grouping DOM updates', ru: 'Легкий "виртуальный" узел DOM, позволяющий минимизировать перерисовки при групповом обновлении элементов' } },
      { id: 'b', text: { en: 'A part of a CSS file', ru: 'Часть CSS-файла' } },
      { id: 'c', text: { en: 'A tool for saving files', ru: 'Инструмент для сохранения файлов' } }
    ],
    correctOptionId: 'a'
  }
];

