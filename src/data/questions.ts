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
  },
  // Batch 3: Expanding Knowledge
  {
    id: 41,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Функции и замыкания',
    question: {
      en: 'What is the difference between call, apply, and bind?',
      ru: 'В чем разница между методами call, apply и bind?'
    },
    options: [
      { id: 'a', text: { en: 'call/apply invoke the function immediately (apply takes arguments as an array), bind returns a new function', ru: 'call/apply вызывают функцию сразу (apply принимает аргументы массивом), bind возвращает новую функцию' } },
      { id: 'b', text: { en: 'bind invokes the function immediately', ru: 'bind вызывает функцию немедленно' } },
      { id: 'c', text: { en: 'apply is only for strings', ru: 'apply используется только для строк' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 42,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Функции и замыкания',
    question: {
      en: 'What is an IIFE (Immediately Invoked Function Expression)?',
      ru: 'Что такое IIFE (Immediately Invoked Function Expression)?'
    },
    options: [
      { id: 'a', text: { en: 'A function that runs as soon as it is defined, often used to create a private scope', ru: 'Функция, которая выполняется сразу после определения, часто используется для создания приватной области видимости' } },
      { id: 'b', text: { en: 'A function that repeats itself', ru: 'Функция, которая повторяет сама себя' } },
      { id: 'c', text: { en: 'An error handling pattern', ru: 'Паттерн обработки ошибок' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 43,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Функции и замыкания',
    question: {
      en: 'What is a "Pure Function"?',
      ru: 'Что такое "Чистая функция"?'
    },
    options: [
      { id: 'a', text: { en: 'A function that returns the same result for the same arguments and has no side effects', ru: 'Функция, которая возвращает один и тот же результат для тех же аргументов и не имеет побочных эффектов' } },
      { id: 'b', text: { en: 'A function written without comments', ru: 'Функция, написанная без комментариев' } },
      { id: 'c', text: { en: 'A function that only uses local variables', ru: 'Функция, использующая только локальные переменные' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 44,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Асинхронность',
    question: {
      en: 'What are Generators in JavaScript?',
      ru: 'Что такое генераторы в JavaScript?'
    },
    options: [
      { id: 'a', text: { en: 'Functions that can be paused and resumed using the "yield" keyword', ru: 'Функции, выполнение которых можно приостанавливать и возобновлять с помощью "yield"' } },
      { id: 'b', text: { en: 'A tool for generating random numbers', ru: 'Инструмент для генерации случайных чисел' } },
      { id: 'c', text: { en: 'A way to compile modern JS into old JS', ru: 'Способ компиляции нового JS в старый' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 45,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Асинхронность',
    question: {
      en: 'What is AbortController used for?',
      ru: 'Для чего используется AbortController?'
    },
    options: [
      { id: 'a', text: { en: 'To cancel asynchronous operations, such as Fetch API requests', ru: 'Для отмены асинхронных операций, например, запросов Fetch API' } },
      { id: 'b', text: { en: 'To stop the browser from closing', ru: 'Для предотвращения закрытия браузера' } },
      { id: 'c', text: { en: 'To reset the application state', ru: 'Для сброса состояния приложения' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 46,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Основы типизации',
    question: {
      en: 'What are Intersection Types (&)?',
      ru: 'Что такое пересечения типов (Intersection Types, &)?'
    },
    options: [
      { id: 'a', text: { en: 'A way to combine multiple types into one (e.g., merging two interfaces)', ru: 'Способ объединения нескольких типов в один (например, слияние двух интерфейсов)' } },
      { id: 'b', text: { en: 'A way to choose one of many types', ru: 'Способ выбора одного из нескольких типов' } },
      { id: 'c', text: { en: 'A type of array in TypeScript', ru: 'Тип массива в TypeScript' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 47,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Основы типизации',
    question: {
      en: 'What is a Custom Type Guard?',
      ru: 'Что такое пользовательский Type Guard?'
    },
    options: [
      { id: 'a', text: { en: 'A function that uses a type predicate (parameterName is Type) to narrow down a type', ru: 'Функция, использующая предикат типа (parameterName is Type) для сужения типа' } },
      { id: 'b', text: { en: 'An error validator', ru: 'Валидатор ошибок' } },
      { id: 'c', text: { en: 'A way to hide private properties', ru: 'Способ скрыть приватные свойства' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 48,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'What does the ReturnType utility type do?',
      ru: 'Что делает утилита ReturnType в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'Constructs a type consisting of the return type of a function', ru: 'Создает тип, состоящий из типа возвращаемого значения функции' } },
      { id: 'b', text: { en: 'Checks if a function returns anything', ru: 'Проверяет, возвращает ли функция что-либо' } },
      { id: 'c', text: { en: 'Forces a function to return an object', ru: 'Заставляет функцию возвращать объект' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 49,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Формы и доступность',
    question: {
      en: 'What is the difference between aria-label and aria-describedby?',
      ru: 'В чем разница между aria-label и aria-describedby?'
    },
    options: [
      { id: 'a', text: { en: 'aria-label provides a brief name; aria-describedby references an element with a longer description', ru: 'aria-label задает краткое имя; aria-describedby ссылается на элемент с более длинным описанием' } },
      { id: 'b', text: { en: 'aria-label is for links only', ru: 'aria-label только для ссылок' } },
      { id: 'c', text: { en: 'There is no difference', ru: 'Разницы нет' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 50,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Мультимедиа и встраивание',
    question: {
      en: 'What is the purpose of loading="lazy" for images?',
      ru: 'Для чего нужен атрибут loading="lazy" у изображений?'
    },
    options: [
      { id: 'a', text: { en: 'To defer loading of off-screen images until the user scrolls near them', ru: 'Для отложенной загрузки изображений, которые находятся вне экрана, до момента прокрутки к ним' } },
      { id: 'b', text: { en: 'To compress images on the fly', ru: 'Для сжатия изображений на лету' } },
      { id: 'c', text: { en: 'To hide broken images', ru: 'Чтобы скрывать битые изображения' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 51,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Основы CSS',
    question: {
      en: 'What is the "Stacking Context"?',
      ru: 'Что такое "Stacking Context" (контекст наложения)?'
    },
    options: [
      { id: 'a', text: { en: 'A hierarchy that determines the stacking order of elements along the z-axis', ru: 'Иерархия, определяющая порядок наложения элементов вдоль оси Z' } },
      { id: 'b', text: { en: 'A way to align items in Flexbox', ru: 'Способ выравнивания элементов в Flexbox' } },
      { id: 'c', text: { en: 'A tool for managing CSS order', ru: 'Инструмент управления порядком CSS' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 52,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'CSS-переменные и современный CSS',
    question: {
      en: 'What is the power of the :has() selector in CSS?',
      ru: 'В чем сила селектора :has() в CSS?'
    },
    options: [
      { id: 'a', text: { en: 'It serves as a "parent selector", styling an element based on its descendants', ru: 'Он служит "родительским селектором", позволяя стилизовать элемент в зависимости от его потомков' } },
      { id: 'b', text: { en: 'It checks if an element has an ID', ru: 'Он проверяет, есть ли у элемента ID' } },
      { id: 'c', text: { en: 'It is a replacement for JavaScript', ru: 'Это замена для JavaScript' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 53,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Производительность и наблюдатели',
    question: {
      en: 'Why use requestAnimationFrame instead of setTimeout for animations?',
      ru: 'Почему для анимаций лучше использовать requestAnimationFrame вместо setTimeout?'
    },
    options: [
      { id: 'a', text: { en: 'It synchronizes your script with the browser\'s refresh rate, resulting in smoother animations', ru: 'Он синхронизирует выполнение скрипта с частотой обновления экрана, что делает анимации плавнее' } },
      { id: 'b', text: { en: 'setTimeout is deprecated', ru: 'setTimeout устарел' } },
      { id: 'c', text: { en: 'It works even when the tab is closed', ru: 'Он работает, даже когда вкладка закрыта' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 54,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Другие API',
    question: {
      en: 'What is postMessage used for?',
      ru: 'Для чего используется метод postMessage?'
    },
    options: [
      { id: 'a', text: { en: 'To communicate between different browsing contexts (like windows, iframes, or workers) safely', ru: 'Для безопасного обмена сообщениями между разными контекстами браузера (окна, iframe, воркеры)' } },
      { id: 'b', text: { en: 'To send emails from JavaScript', ru: 'Для отправки писем из JavaScript' } },
      { id: 'c', text: { en: 'To save large files to the server', ru: 'Для сохранения больших файлов на сервер' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 55,
    category: 'React',
    section: '6. React (если используется)',
    topic: 'Основы React',
    question: {
      en: 'What is "Reconciliation" in React?',
      ru: 'Что такое "Reconciliation" (согласование) в React?'
    },
    options: [
      { id: 'a', text: { en: 'The algorithm React uses to diff the Virtual DOM and update only the necessary parts of the real DOM', ru: 'Алгоритм, который React использует для сравнения Virtual DOM и обновления только нужных частей реального DOM' } },
      { id: 'b', text: { en: 'A way to fetch data', ru: 'Способ загрузки данных' } },
      { id: 'c', text: { en: 'A tool for managing transitions', ru: 'Инструмент для управления переходами' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 56,
    category: 'React',
    section: '6. React (если используется)',
    topic: 'React Hooks',
    question: {
      en: 'What is the main difference between useEffect and useLayoutEffect?',
      ru: 'В чем главная разница между useEffect и useLayoutEffect?'
    },
    options: [
      { id: 'a', text: { en: 'useLayoutEffect runs synchronously after DOM mutations but before the browser has a chance to paint', ru: 'useLayoutEffect выполняется синхронно после изменений в DOM, но до того, как браузер успел отрисовать экран' } },
      { id: 'b', text: { en: 'useEffect is for classes', ru: 'useEffect предназначен для классов' } },
      { id: 'c', text: { en: 'There is no functional difference', ru: 'Функциональной разницы нет' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 57,
    category: 'Vue.js',
    section: '7. Vue.js',
    topic: 'Vue Router и управление состоянием',
    question: {
      en: 'What is the main difference between Getters and Actions in Pinia?',
      ru: 'В чем основная разница между Getters и Actions в Pinia?'
    },
    options: [
      { id: 'a', text: { en: 'Getters are for derived state (cached like computed); Actions are for methods and side effects (async)', ru: 'Getters для вычисляемого состояния (кешируются); Actions для методов и побочных эффектов (могут быть асинхронными)' } },
      { id: 'b', text: { en: 'Actions cannot be asynchronous', ru: 'Actions не могут быть асинхронными' } },
      { id: 'c', text: { en: 'Getters are for updating state', ru: 'Getters нужны для обновления состояния' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 58,
    category: 'HTTP',
    section: '10. HTTP и работа с API',
    topic: 'REST API',
    question: {
      en: 'What is the semantic difference between PUT and PATCH?',
      ru: 'В чем семантическая разница между методами PUT и PATCH?'
    },
    options: [
      { id: 'a', text: { en: 'PUT replaces the entire resource; PATCH applies partial updates to it', ru: 'PUT полностью заменяет ресурс; PATCH применяет частичные изменения' } },
      { id: 'b', text: { en: 'PATCH replaces everything', ru: 'PATCH заменяет всё полностью' } },
      { id: 'c', text: { en: 'PUT is only for creating resources', ru: 'PUT нужен только для создания ресурсов' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 59,
    category: 'Security',
    section: '11. Безопасность фронтенда',
    topic: 'Безопасность',
    question: {
      en: 'Why should you use the HttpOnly flag on cookies?',
      ru: 'Зачем использовать флаг HttpOnly для куки-файлов?'
    },
    options: [
      { id: 'a', text: { en: 'To prevent client-side JavaScript from accessing the cookie, mitigating XSS attacks', ru: 'Чтобы запретить клиентскому JavaScript доступ к куки, снижая риск XSS-атак' } },
      { id: 'b', text: { en: 'To make the cookie load faster', ru: 'Для ускорения обработки куки' } },
      { id: 'c', text: { en: 'To allow cross-domain sharing of cookies', ru: 'Чтобы разрешить передачу куки между доменами' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 60,
    category: 'Performance',
    section: '13. Производительность',
    topic: 'Оптимизация рантайма',
    question: {
      en: 'What is the difference between Debounce and Throttle?',
      ru: 'В чем разница между Debounce и Throttle?'
    },
    options: [
      { id: 'a', text: { en: 'Debounce waits for silence; Throttle limits execution to once per fixed time interval', ru: 'Debounce ждет "паузы" в действиях; Throttle ограничивает выполнение одним разом в заданный интервал времени' } },
      { id: 'b', text: { en: 'They are the same', ru: 'Они идентичны' } },
      { id: 'c', text: { en: 'Throttle is for scrolling only', ru: 'Throttle нужен только для прокрутки' } }
    ],
    correctOptionId: 'a'
  },
  // Batch 4: Refining Skills
  {
    id: 61,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What is the main difference between Spread and Rest operators?',
      ru: 'В чем основная разница между операторами Spread и Rest?'
    },
    options: [
      { id: 'a', text: { en: 'Spread expands an array into elements; Rest collects multiple elements into a single array', ru: 'Spread разбивает массив на элементы; Rest собирает несколько элементов в один массив' } },
      { id: 'b', text: { en: 'They are the same operator used in different languages', ru: 'Это один и тот же оператор, используемый в разных языках' } },
      { id: 'c', text: { en: 'Rest is for objects only', ru: 'Rest используется только для объектов' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 62,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Типы данных и структуры',
    question: {
      en: 'What is a WeakSet and how does it differ from a Set?',
      ru: 'Что такое WeakSet и чем он отличается от Set?'
    },
    options: [
      { id: 'a', text: { en: 'WeakSet only stores objects and allows them to be garbage-collected if no other references exist', ru: 'WeakSet хранит только объекты и позволяет сборщику мусора удалять их, если на них больше нет ссылок' } },
      { id: 'b', text: { en: 'WeakSet is faster than Set', ru: 'WeakSet работает быстрее, чем Set' } },
      { id: 'c', text: { en: 'WeakSet supports primitive values', ru: 'WeakSet поддерживает примитивные значения' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 63,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Функции и замыкания',
    question: {
      en: 'What is Tail Call Optimization (TCO)?',
      ru: 'Что такое оптимизация хвостового вызова (Tail Call Optimization)?'
    },
    options: [
      { id: 'a', text: { en: 'A feature where the engine reuses the current stack frame for a function call if it is the last action', ru: 'Возможность движка переиспользовать текущий кадр стека, если вызов функции является последним действием' } },
      { id: 'b', text: { en: 'A way to make loops faster', ru: 'Способ ускорения циклов' } },
      { id: 'c', text: { en: 'An optimization for string concatenation', ru: 'Оптимизация для конкатенации строк' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 64,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What is the difference between Object.freeze() and Object.seal()?',
      ru: 'В чем разница между Object.freeze() и Object.seal()?'
    },
    options: [
      { id: 'a', text: { en: 'freeze makes an object immutable; seal prevents adding/removing properties but allows changing existing ones', ru: 'freeze делает объект неизменяемым; seal запрещает добавление/удаление свойств, но позволяет менять существующие' } },
      { id: 'b', text: { en: 'seal makes everything read-only', ru: 'seal делает всё доступным только для чтения' } },
      { id: 'c', text: { en: 'There is no difference in ES6', ru: 'В ES6 разницы нет' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 65,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Типы данных и структуры',
    question: {
      en: 'Why does 0.1 + 0.2 not equal 0.3 in JavaScript?',
      ru: 'Почему 0.1 + 0.2 не равно 0.3 в JavaScript?'
    },
    options: [
      { id: 'a', text: { en: 'Due to the binary representation of floating-point numbers (IEEE 754 precision issues)', ru: 'Из-за особенностей представления чисел с плавающей точкой в двоичной системе (стандарт IEEE 754)' } },
      { id: 'b', text: { en: 'It is a bug in the V8 engine', ru: 'Это баг в движке V8' } },
      { id: 'c', text: { en: 'JavaScript variables are always strings internally', ru: 'Переменные в JS всегда являются строками внутри' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 66,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'What does the "satisfies" operator do in TypeScript?',
      ru: 'Что делает оператор "satisfies" в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'Validates that an expression matches a type WITHOUT changing the resulting type of that expression', ru: 'Проверяет соответствие выражения типу, НЕ меняя при этом результирующий тип этого выражения' } },
      { id: 'b', text: { en: 'It is a shorter version of the "extends" keyword', ru: 'Это сокращенная версия ключевого слова "extends"' } },
      { id: 'c', text: { en: 'It automatically imports missing types', ru: 'Он автоматически импортирует недостающие типы' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 67,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Основы типизации',
    question: {
      en: 'What is a "const assertion" (as const) in TypeScript?',
      ru: 'Что такое "const assertion" (as const) в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'It signals to the compiler that the expression should be treated as its most specific literal type', ru: 'Указывает компилятору, что выражение должно рассматриваться как максимально конкретный литеральный тип' } },
      { id: 'b', text: { en: 'It turns a variable into a constant', ru: 'Это превращает переменную в константу' } },
      { id: 'c', text: { en: 'It prevents the variable from being exported', ru: 'Это предотвращает экспорт переменной' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 68,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'TypeScript в проекте',
    question: {
      en: 'What is the purpose of declaration files (.d.ts)?',
      ru: 'Для чего нужны файлы объявлений (.d.ts)?'
    },
    options: [
      { id: 'a', text: { en: 'To provide type information for libraries written in plain JavaScript', ru: 'Для описания типов библиотек, написанных на чистом JavaScript' } },
      { id: 'b', text: { en: 'To store the application constants', ru: 'Для хранения констант приложения' } },
      { id: 'c', text: { en: 'To speed up the compilation process', ru: 'Для ускорения процесса компиляции' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 69,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Мультимедиа и встраивание',
    question: {
      en: 'What is the advantage of using the <picture> element?',
      ru: 'В чем преимущество использования элемента <picture>?'
    },
    options: [
      { id: 'a', text: { en: 'It allows defining multiple sources for an image depending on screen resolution or format support', ru: 'Он позволяет задавать разные источники для изображения в зависимости от разрешения или форматов' } },
      { id: 'b', text: { en: 'It makes images load instantly', ru: 'Он заставляет изображения грузиться мгновенно' } },
      { id: 'c', text: { en: 'It is the only way to show icons', ru: 'Это единственный способ отобразить иконки' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 70,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Безопасность',
    question: {
      en: 'What is a Content Security Policy (CSP)?',
      ru: 'Что такое Content Security Policy (CSP)?'
    },
    options: [
      { id: 'a', text: { en: 'A security header preventing unauthorized scripts and data from being executed or loaded', ru: 'Заголовок безопасности, предотвращающий выполнение или загрузку сторонних скриптов и данных' } },
      { id: 'b', text: { en: 'A tool for managing user passwords', ru: 'Инструмент для управления паролями пользователей' } },
      { id: 'c', text: { en: 'A policy for sharing files between sites', ru: 'Политика обмена файлами между сайтами' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 71,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Адаптивность и респонсивность',
    question: {
      en: 'What is the main benefit of CSS Container Queries?',
      ru: 'В чем главная польза CSS Container Queries?'
    },
    options: [
      { id: 'a', text: { en: 'They allow styling an element based on the size of its parent container, not just the viewport', ru: 'Они позволяют стилизовать элемент в зависимости от размера родителя, а не всего экрана' } },
      { id: 'b', text: { en: 'They make CSS files smaller', ru: 'Они уменьшают размер CSS-файлов' } },
      { id: 'c', text: { en: 'They replace media queries entirely', ru: 'Они полностью заменяют медиа-запросы' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 72,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'CSS-переменные и современный CSS',
    question: {
      en: 'How does the clamp() function work in CSS?',
      ru: 'Как работает функция clamp() в CSS?'
    },
    options: [
      { id: 'a', text: { en: 'It clamps a value between an upper and lower bound (min, ideal, max)', ru: 'Она ограничивает значение между верхним и нижним порогами (минимум, идеал, максимум)' } },
      { id: 'b', text: { en: 'It rounds a number to the nearest integer', ru: 'Она округляет число до ближайшего целого' } },
      { id: 'c', text: { en: 'It is used only for colors', ru: 'Она используется только для цветов' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 73,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'CSS-переменные и современный CSS',
    question: {
      en: 'What is the purpose of @layer in CSS?',
      ru: 'Что такое @layer в CSS?'
    },
    options: [
      { id: 'a', text: { en: 'To control the cascade order and prevent specificity battles between different modules', ru: 'Для управления порядком каскада и предотвращения войн специфичности между разными модулями' } },
      { id: 'b', text: { en: 'To create animations', ru: 'Для создания анимаций' } },
      { id: 'c', text: { en: 'To store CSS variables', ru: 'Для хранения CSS-переменных' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 74,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Производительность и наблюдатели',
    question: {
      en: 'What does the MutationObserver do?',
      ru: 'Что делает MutationObserver?'
    },
    options: [
      { id: 'a', text: { en: 'Watches for changes being made to the DOM tree (attributes, children, text)', ru: 'Наблюдает за изменениями в дереве DOM (атрибуты, дочерние элементы, текст)' } },
      { id: 'b', text: { en: 'Observes changes in network status', ru: 'Наблюдает за изменениями статуса сети' } },
      { id: 'c', text: { en: 'Monitors user mouse movements', ru: 'Отслеживает движения мыши пользователя' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 75,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Производительность и наблюдатели',
    question: {
      en: 'When should you use ResizeObserver?',
      ru: 'Когда следует использовать ResizeObserver?'
    },
    options: [
      { id: 'a', text: { en: 'To react to an element\'s content rectangle changes (e.g., div resizing)', ru: 'Для реакции на изменение размеров конкретного элемента (например, блока div)' } },
      { id: 'b', text: { en: 'To check if the window has moved', ru: 'Для проверки, не переместилось ли окно' } },
      { id: 'c', text: { en: 'To listen for window.resize events', ru: 'Для прослушивания событий window.resize' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 76,
    category: 'React',
    section: '6. React (если используется)',
    topic: 'Паттерны и оптимизация',
    question: {
      en: 'What is the difference between React.memo and useMemo?',
      ru: 'В чем разница между React.memo и useMemo?'
    },
    options: [
      { id: 'a', text: { en: 'memo is an HOC for components; useMemo is a hook for values', ru: 'memo — это HOC для компонентов; useMemo — это хук для конкретных значений' } },
      { id: 'b', text: { en: 'useMemo is faster than memo', ru: 'useMemo быстрее, чем memo' } },
      { id: 'c', text: { en: 'They are completely identical', ru: 'Они полностью идентичны' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 77,
    category: 'Next.js',
    section: '9. Next.js (если используется)',
    topic: 'App Router и Server Components',
    question: {
      en: 'Main difference between Server and Client Components?',
      ru: 'Главное отличие Server Components от Client Components?'
    },
    options: [
      { id: 'a', text: { en: 'Server Components render on the server and send no JS to the client; Client Components have interactivity', ru: 'Server Components рендерятся на сервере и не шлют JS клиенту; Client Components интерактивны' } },
      { id: 'b', text: { en: 'Server Components can use hooks like useState', ru: 'Server Components могут использовать хуки типа useState' } },
      { id: 'c', text: { en: 'Client Components are always faster', ru: 'Client Components всегда быстрее' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 78,
    category: 'Vue.js',
    section: '7. Vue.js',
    topic: 'Composition API',
    question: {
      en: 'What is the difference between watch and watchEffect in Vue 3?',
      ru: 'В чем разница между watch и watchEffect во Vue 3?'
    },
    options: [
      { id: 'a', text: { en: 'watch is explicit about what dependency to track; watchEffect tracks all dependencies used inside it automatically', ru: 'watch явно указывает зависимости; watchEffect автоматически отслеживает всё, что используется внутри него' } },
      { id: 'b', text: { en: 'watchEffect is only for primitives', ru: 'watchEffect только для примитивом' } },
      { id: 'c', text: { en: 'watch cannot be used with reactive objects', ru: 'watch нельзя использовать с реактивными объектами' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 79,
    category: 'DevTools',
    section: '14. Инструменты разработчика',
    topic: 'Git',
    question: {
      en: 'What is the difference between Git Merge and Git Rebase?',
      ru: 'В чем разница между Git Merge и Git Rebase?'
    },
    options: [
      { id: 'a', text: { en: 'Merge preserves history with a merge commit; Rebase rewrites history by moving commits to a new base', ru: 'Merge сохраняет историю через коммит слияния; Rebase переписывает историю, перенося коммиты на новый базис' } },
      { id: 'b', text: { en: 'Rebase is safer for public branches', ru: 'Rebase безопаснее для публичных веток' } },
      { id: 'c', text: { en: 'Merge deletes old commits', ru: 'Merge удаляет старые коммиты' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 80,
    category: 'Accessibility',
    section: '15. Доступность (a11y)',
    topic: 'Практики доступности',
    question: {
      en: 'What is the best practice for using tabindex?',
      ru: 'Какова лучшая практика использования tabindex?'
    },
    options: [
      { id: 'a', text: { en: 'Use 0 for focusable elements and -1 for programmatically focusable; avoid positive values', ru: 'Используйте 0 для элементов в фокусе и -1 для программного фокуса; избегайте положительных значений' } },
      { id: 'b', text: { en: 'Always use positive values for correct order', ru: 'Всегда используйте положительные значения для верного порядка' } },
      { id: 'c', text: { en: 'Use tabindex="100" for buttons', ru: 'Используйте tabindex="100" для кнопок' } }
    ],
    correctOptionId: 'a'
  },
  // Batch 5: Mastering the Frontend
  {
    id: 81,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What is the benefit of the array.at() method?',
      ru: 'В чем преимущество метода массива at()?'
    },
    options: [
      { id: 'a', text: { en: 'It allows accessing elements using negative indices (e.g., at(-1) for the last element)', ru: 'Он позволяет обращаться к элементам по отрицательным индексам (например, at(-1) для последнего элемента)' } },
      { id: 'b', text: { en: 'It is faster than square bracket notation', ru: 'Он работает быстрее, чем доступ через квадратные скобки' } },
      { id: 'c', text: { en: 'It automatically filters out undefined values', ru: 'Он автоматически фильтрует значения undefined' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 82,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What does Object.fromEntries() do?',
      ru: 'Что делает метод Object.fromEntries()?'
    },
    options: [
      { id: 'a', text: { en: 'Transforms a list of key-value pairs (like from a Map) into an object', ru: 'Преобразует список пар ключ-значение (например, из Map) в обычный объект' } },
      { id: 'b', text: { en: 'Creates an array from an object\'s keys', ru: 'Создает массив из ключей объекта' } },
      { id: 'c', text: { en: 'It clone an object deeply', ru: 'Он делает глубокую копию объекта' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 83,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What is "Top-level await"?',
      ru: 'Что такое "Top-level await"?'
    },
    options: [
      { id: 'a', text: { en: 'The ability to use the await keyword outside of an async function at the top level of a module', ru: 'Возможность использовать ключевое слово await вне async-функций на верхнем уровне модуля' } },
      { id: 'b', text: { en: 'A way to make the entire script synchronous', ru: 'Способ сделать весь скрипт синхронным' } },
      { id: 'c', text: { en: 'A feature for waiting until the DOM is ready', ru: 'Функция для ожидания готовности DOM' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 84,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Модули',
    question: {
      en: 'What is the difference between named exports and default exports?',
      ru: 'В чем разница между именованным экспортом (named) и экспортом по умолчанию (default)?'
    },
    options: [
      { id: 'a', text: { en: 'You can have multiple named exports per file, but only one default export', ru: 'В файле может быть много именованных экспортов, но только один экспорт по умолчанию' } },
      { id: 'b', text: { en: 'Default exports are faster to import', ru: 'Default экспорты импортируются быстрее' } },
      { id: 'c', text: { en: 'Named exports cannot be renamed during import', ru: 'Именованные экспорты нельзя переименовывать при импорте' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 85,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'What are Template Literal Types in TypeScript?',
      ru: 'Что такое Template Literal Types в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'Types that allow building complex strings during type definition (e.g., `on${Capitalize<Event>}`)', ru: 'Типы, позволяющие конструировать сложные строки при описании типов' } },
      { id: 'b', text: { en: 'Types used only inside template strings', ru: 'Типы, используемые только внутри шаблонных строк' } },
      { id: 'c', text: { en: 'A way to format console logs', ru: 'Способ форматирования логов в консоли' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 86,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'How do you create a Recursive Type in TypeScript?',
      ru: 'Как создать рекурсивный тип в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'By having the type reference itself in its own definition (e.g., for JSON structures)', ru: 'Путем обращения типа к самому себе в его же определении (например, для структур JSON)' } },
      { id: 'b', text: { en: 'By using the "recursive" keyword', ru: 'С помощью ключевого слова "recursive"' } },
      { id: 'c', text: { en: 'TypeScript doesn\'t support recursion in types', ru: 'TypeScript не поддерживает рекурсию в типах' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 87,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'What is the "extends" keyword used for in Generic constraints?',
      ru: 'Для чего используется ключевое слово "extends" в ограничениях дженериков?'
    },
    options: [
      { id: 'a', text: { en: 'To limit the types that can be passed to a generic (e.g., <T extends string>)', ru: 'Для ограничения типов, которые можно передать в дженерик' } },
      { id: 'b', text: { en: 'To inherit from another class', ru: 'Для наследования от другого класса' } },
      { id: 'c', text: { en: 'To make all properties required', ru: 'Чтобы сделать все свойства обязательными' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 88,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Формы и доступность',
    question: {
      en: 'What is the purpose of <fieldset> and <legend>?',
      ru: 'Для чего нужны теги <fieldset> и <legend>?'
    },
    options: [
      { id: 'a', text: { en: '<fieldset> groups related form elements; <legend> provides a caption for that group', ru: '<fieldset> группирует связанные элементы формы; <legend> задает заголовок для этой группы' } },
      { id: 'b', text: { en: 'They are used for creating maps', ru: 'Они используются для создания карт' } },
      { id: 'c', text: { en: 'To hide parts of the form', ru: 'Для скрытия частей формы' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 89,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Формы и доступность',
    question: {
      en: 'What does the <datalist> tag do?',
      ru: 'Что делает тег <datalist>?'
    },
    options: [
      { id: 'a', text: { en: 'Provides an "autocomplete" list of options for an <input> element', ru: 'Предоставляет список вариантов для автодополнения в элементе <input>' } },
      { id: 'b', text: { en: 'Stores data in localized storage', ru: 'Сохраняет данные в локальном хранилище' } },
      { id: 'c', text: { en: 'It is a replacement for <ul>', ru: 'Это замена для списка <ul>' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 90,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Мультимедиа и встраивание',
    question: {
      en: 'Why is the "sandbox" attribute on <iframe> important?',
      ru: 'Почему важен атрибут "sandbox" у тега <iframe>?'
    },
    options: [
      { id: 'a', text: { en: 'It enables strict security restrictions for the embedded content (e.g., preventing JS or forms)', ru: 'Он включает строгие ограничения безопасности для встроенного контента (например, запрет JS или форм)' } },
      { id: 'b', text: { en: 'It makes the iframe load in 3D', ru: 'Он заставляет iframe грузиться в 3D' } },
      { id: 'c', text: { en: 'It is used for game development', ru: 'Он используется для разработки игр' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 91,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Анимации и переходы',
    question: {
      en: 'What does the aspect-ratio property do?',
      ru: 'Что делает свойство aspect-ratio в CSS?'
    },
    options: [
      { id: 'a', text: { en: 'It allows setting a preferred aspect ratio for the box, which will be used in layout', ru: 'Оно позволяет задать желаемое соотношение сторон для блока' } },
      { id: 'b', text: { en: 'It changes the image resolution', ru: 'Оно меняет разрешение изображения' } },
      { id: 'c', text: { en: 'It is only for video tags', ru: 'Оно работает только для тегов video' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 92,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Анимации и переходы',
    question: {
      en: 'What is CSS Scroll Snap?',
      ru: 'Что такое CSS Scroll Snap?'
    },
    options: [
      { id: 'a', text: { en: 'A feature that allows locking the viewport to certain elements after scrolling has finished', ru: 'Функция, позволяющая "примагничивать" скролл к определенным элементам после его завершения' } },
      { id: 'b', text: { en: 'A way to make the screen flicker', ru: 'Способ заставить экран мерцать' } },
      { id: 'c', text: { en: 'A tool for capturing screenshots', ru: 'Инструмент для создания скриншотов' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 93,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Производительность и наблюдатели',
    question: {
      en: 'What can you measure with the Performance API?',
      ru: 'Что можно измерить с помощью Performance API?'
    },
    options: [
      { id: 'a', text: { en: 'Core Web Vitals like LCP, FID, and CLS within your code', ru: 'Основные показатели Web Vitals, такие как LCP, FID и CLS, прямо в коде' } },
      { id: 'b', text: { en: 'The user\'s internet speed only', ru: 'Только скорость интернета пользователя' } },
      { id: 'c', text: { en: 'The battery level of the device', ru: 'Уровень заряда батареи устройства' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 94,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Другие API',
    question: {
      en: 'What is the Broadcast Channel API for?',
      ru: 'Для чего нужен Broadcast Channel API?'
    },
    options: [
      { id: 'a', text: { en: 'To communicate between different windows, tabs, or iframes from the same origin', ru: 'Для обмена данными между разными окнами, вкладками или iframe одного и того же домена' } },
      { id: 'b', text: { en: 'To stream live video', ru: 'Для трансляции живого видео' } },
      { id: 'c', text: { en: 'To listen to the radio', ru: 'Для прослушивания радио' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 95,
    category: 'React',
    section: '6. React (если используется)',
    topic: 'React Hooks',
    question: {
      en: 'What is the purpose of the useId hook?',
      ru: 'В чем цель хука useId в React?'
    },
    options: [
      { id: 'a', text: { en: 'To generate unique IDs that are stable across server and client for accessibility attributes', ru: 'Для генерации уникальных ID, стабильных между сервером и клиентом (для доступности)' } },
      { id: 'b', text: { en: 'To get the current user ID', ru: 'Для получения ID текущего пользователя' } },
      { id: 'c', text: { en: 'To identity the component in the debugger', ru: 'Для идентификации компонента в отладчике' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 96,
    category: 'React',
    section: '6. React (если используется)',
    topic: 'React 19: Новые возможности',
    question: {
      en: 'What is the "use" hook used for in React 19?',
      ru: 'Для чего используется хук "use" в React 19?'
    },
    options: [
      { id: 'a', text: { en: 'To read the value of a resource like a Promise or Context within render', ru: 'Для чтения значения из ресурсов, таких как Promise или Context, прямо во время рендеринга' } },
      { id: 'b', text: { en: 'It replaces all other hooks', ru: 'Он заменяет все остальные хуки' } },
      { id: 'c', text: { en: 'To import external libraries', ru: 'Для импорта внешних библиотек' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 97,
    category: 'Vue.js',
    section: '7. Vue.js',
    topic: 'Основы Vue 3',
    question: {
      en: 'In Vue 3, what are Scoped Slots?',
      ru: 'Что такое Scoped Slots во Vue 3?'
    },
    options: [
      { id: 'a', text: { en: 'Slots that pass data from the child component back to the parent for rendering content', ru: 'Слоты, которые передают данные из дочернего компонента обратно в родительский для отрисовки' } },
      { id: 'b', text: { en: 'Slots only accessible in CSS', ru: 'Слоты, доступные только в CSS' } },
      { id: 'c', text: { en: 'A way to limit the slot size', ru: 'Способ ограничить размер слота' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 98,
    category: 'Vue.js',
    section: '7. Vue.js',
    topic: 'Composition API',
    question: {
      en: 'What is the purpose of toRefs() in Vue 3?',
      ru: 'Для чего нужна функция toRefs() во Vue 3?'
    },
    options: [
      { id: 'a', text: { en: 'To convert a reactive object into a plain object where each property is a ref (preserving reactivity)', ru: 'Для превращения реактивного объекта в обычный, где каждое свойство будет ссылкой (ref)' } },
      { id: 'b', text: { en: 'To copy a ref to another variable', ru: 'Для копирования ссылки в другую переменную' } },
      { id: 'c', text: { en: 'To delete all refs from an object', ru: 'Для удаления всех ссылок из объекта' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 99,
    category: 'PWA',
    section: '16. PWA и мобильные аспекты',
    topic: 'Progressive Web Apps',
    question: {
      en: 'What is the Service Worker lifecycle?',
      ru: 'Каков жизненный цикл Service Worker?'
    },
    options: [
      { id: 'a', text: { en: 'Registration, Installation, Activation', ru: 'Регистрация, Установка, Активация' } },
      { id: 'b', text: { en: 'Download, Execute, Delete', ru: 'Загрузка, Выполнение, Удаление' } },
      { id: 'c', text: { en: 'Start, Stop, Restart', ru: 'Старт, Стоп, Рестарт' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 100,
    category: 'Architecture',
    section: '17. Архитектура фронтенда',
    topic: 'Паттерны и подходы',
    question: {
      en: 'What is the core idea of "Lifting State Up"?',
      ru: 'В чем основная идея "Поднятия состояния" (Lifting State Up)?'
    },
    options: [
      { id: 'a', text: { en: 'Moving the state to the closest common ancestor of components that need it', ru: 'Перенос состояния к ближайшему общему предку компонентов, которым это состояние нужно' } },
      { id: 'b', text: { en: 'Using a global store for everything', ru: 'Использование глобального хранилища для всего' } },
      { id: 'c', text: { en: 'Saving state to the server regularly', ru: 'Регулярное сохранение состояния на сервер' } }
    ],
    correctOptionId: 'a'
  },
  // Batch 6: Expert Level
  {
    id: 101,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What is the purpose of the Error.cause property?',
      ru: 'Для чего нужно свойство Error.cause?'
    },
    options: [
      { id: 'a', text: { en: 'To chain errors by specifying the original cause of a new error', ru: 'Для цепочки ошибок, позволяя указать исходную причину новой ошибки' } },
      { id: 'b', text: { en: 'To stop the error from crashing the app', ru: 'Для предотвращения падения приложения при ошибке' } },
      { id: 'c', text: { en: 'To translate error messages', ru: 'Для перевода сообщений об ошибках' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 102,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Типы данных и структуры',
    question: {
      en: 'What are WeakRef and FinalizationRegistry for?',
      ru: 'Для чего нужны WeakRef и FinalizationRegistry?'
    },
    options: [
      { id: 'a', text: { en: 'To create "weak" references to objects and perform cleanup when they are garbage-collected', ru: 'Для создания "слабых" ссылок на объекты и выполнения очистки после их удаления сборщиком мусора' } },
      { id: 'b', text: { en: 'To speed up object creation', ru: 'Для ускорения создания объектов' } },
      { id: 'c', text: { en: 'To prevent garbage collection', ru: 'Для предотвращения работы сборщика мусора' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 103,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What does the findLast() method do?',
      ru: 'Что делает метод findLast()?'
    },
    options: [
      { id: 'a', text: { en: 'Iterates the array in reverse and returns the first element that satisfies the condition', ru: 'Перебирает массив в обратном порядке и возвращает первый элемент, подходящий под условие' } },
      { id: 'b', text: { en: 'Returns the very last element of any array', ru: 'Возвращает самый последний элемент любого массива' } },
      { id: 'c', text: { en: 'Deletes the last element', ru: 'Удаляет последний элемент' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 104,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Основы типизации',
    question: {
      en: 'What is the difference between protected and private modifiers in TypeScript classes?',
      ru: 'В чем разница между модификаторами protected и private в классах TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'private is only for the same class; protected allows access within subclasses too', ru: 'private доступен только внутри класса; protected доступен также и в подклассах' } },
      { id: 'b', text: { en: 'protected is faster than private', ru: 'protected работает быстрее, чем private' } },
      { id: 'c', text: { en: 'There is no difference in the compiled JavaScript', ru: 'В скомпилированном JavaScript разницы нет' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 105,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'What is an Abstract Class?',
      ru: 'Что такое абстрактный класс (Abstract Class)?'
    },
    options: [
      { id: 'a', text: { en: 'A base class that cannot be instantiated directly and often contains abstract methods', ru: 'Базовый класс, от которого нельзя создать экземпляр напрямую, и который часто содержит абстрактные методы' } },
      { id: 'b', text: { en: 'A class without any methods', ru: 'Класс без единого метода' } },
      { id: 'c', text: { en: 'A class imported from a library', ru: 'Класс, импортированный из библиотеки' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 106,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'What are TypeScript Decorators (Stage 3)?',
      ru: 'Что такое декораторы в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'A way to annotate and modify classes and their members at design/execution time', ru: 'Способ аннотирования и модификации классов и их членов на этапе проектирования/выполнения' } },
      { id: 'b', text: { en: 'A tool for changing CSS styles', ru: 'Инструмент для смены CSS-стилей' } },
      { id: 'c', text: { en: 'A type of code comment', ru: 'Тип комментария в коде' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 107,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Семантическая верстка',
    question: {
      en: 'What does the "inert" attribute do in HTML?',
      ru: 'Что делает атрибут "inert" в HTML?'
    },
    options: [
      { id: 'a', text: { en: 'Indicates that the element and its descendants should be ignored by the browser (no focus, no click, no a11y)', ru: 'Указывает, что браузер должен игнорировать элемент и его потомков (нет фокуса, кликов и a11y)' } },
      { id: 'b', text: { en: 'Makes the element move slowly', ru: 'Заставляет элемент двигаться медленно' } },
      { id: 'c', text: { en: 'It is a synonym for readonly', ru: 'Это синоним для readonly' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 108,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Семантическая верстка',
    question: {
      en: 'What is the "popover" attribute used for?',
      ru: 'Для чего используется атрибут "popover"?'
    },
    options: [
      { id: 'a', text: { en: 'To create native overlays, menus, or tooltips that appear on top of other content', ru: 'Для создания нативных всплывающих окон, меню или подсказок поверх контента' } },
      { id: 'b', text: { en: 'To play sound effects', ru: 'Для проигрывания звуковых эффектов' } },
      { id: 'c', text: { en: 'To refresh the page partially', ru: 'Для частичного обновления страницы' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 109,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'CSS Grid',
    question: {
      en: 'What is "subgrid" in CSS Grid?',
      ru: 'Что такое "subgrid" в CSS Grid?'
    },
    options: [
      { id: 'a', text: { en: 'Allows a grid item to inherit the grid tracks of its parent (aligning descendants to the global grid)', ru: 'Позволяет дочернему элементу сетки использовать линии сетки родителя' } },
      { id: 'b', text: { en: 'A grid within another grid with no connection', ru: 'Сетка внутри другой сетки без какой-либо связи' } },
      { id: 'c', text: { en: 'A tool for measuring grid speed', ru: 'Инструмент для замеры скорости сетки' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 110,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'CSS-переменные и современный CSS',
    question: {
      en: 'What does the light-dark() CSS function do?',
      ru: 'Что делает функция light-dark() в CSS?'
    },
    options: [
      { id: 'a', text: { en: 'Selects one of two colors based on the current color scheme (light or dark)', ru: 'Выбирает один из двух цветов в зависимости от текущей цветовой схемы (светлой или темной)' } },
      { id: 'b', text: { en: 'Turns on the flashlight on mobile devices', ru: 'Включает фонарик на мобильных устройствах' } },
      { id: 'c', text: { en: 'Calculates the average brightness of a page', ru: 'Вычисляет среднюю яркость страницы' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 111,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'CSS-переменные и современный CSS',
    question: {
      en: 'How does color-mix() work?',
      ru: 'Как работает функция color-mix()?'
    },
    options: [
      { id: 'a', text: { en: 'Mixes two colors in a specified color space and proportion', ru: 'Смешивает два цвета в заданном цветовом пространстве и пропорции' } },
      { id: 'b', text: { en: 'Finds the dominant color of an image', ru: 'Находит доминантный цвет изображения' } },
      { id: 'c', text: { en: 'It is a tool for designers only', ru: 'Это инструмент только для дизайнеров' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 112,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Другие API',
    question: {
      en: 'What is the Web Crypto API?',
      ru: 'Что такое Web Crypto API?'
    },
    options: [
      { id: 'a', text: { en: 'A native API for performing cryptographic operations (hashing, signing, encryption)', ru: 'Нативный API для выполнения криптографических операций (хеширование, подпись, шифрование)' } },
      { id: 'b', text: { en: 'An API for buying cryptocurrency', ru: 'API для покупки криптовалюты' } },
      { id: 'c', text: { en: 'A way to hide password inputs', ru: 'Способ скрытия полей ввода пароля' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 113,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Другие API',
    question: {
      en: 'What does the EyeDropper API do?',
      ru: 'Что делает EyeDropper API?'
    },
    options: [
      { id: 'a', text: { en: 'Allows users to pick colors from their screen, even outside the browser window', ru: 'Позволяет пользователям выбирать цвета с любого места на экране, даже вне окна браузера' } },
      { id: 'b', text: { en: 'Filters blue light from the site', ru: 'Фильтрует синий свет на сайте' } },
      { id: 'c', text: { en: 'Measures eye fatigue', ru: 'Измеряет усталость глаз' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 114,
    category: 'React',
    section: '6. React (если используется)',
    topic: 'Паттерны и оптимизация',
    question: {
      en: 'What is an Error Boundary in React?',
      ru: 'Что такое Error Boundary в React?'
    },
    options: [
      { id: 'a', text: { en: 'A class component that catches JavaScript errors anywhere in its child component tree', ru: 'Классовый компонент, который ловит JS-ошибки в любом месте своего дерева дочерних компонентов' } },
      { id: 'b', text: { en: 'A way to validate props', ru: 'Способ валидации пропсов' } },
      { id: 'c', text: { en: 'A CSS border around error messages', ru: 'CSS-рамка вокруг сообщений об ошибках' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 115,
    category: 'React',
    section: '6. React (если используется)',
    topic: 'React Hooks',
    question: {
      en: 'What are React Portals?',
      ru: 'Что такое React Portals?'
    },
    options: [
      { id: 'a', text: { en: 'A way to render children into a DOM node that exists outside the hierarchy of the parent component', ru: 'Способ рендеринга дочерних элементов в DOM-узел вне основной иерархии родителя' } },
      { id: 'b', text: { en: 'Links to other websites', ru: 'Ссылки на другие сайты' } },
      { id: 'c', text: { en: 'A tool for cross-origin data fetching', ru: 'Инструмент для кросс-доменной загрузки данных' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 116,
    category: 'Vue.js',
    section: '7. Vue.js',
    topic: 'Основы Vue 3',
    question: {
      en: 'How do you create a Custom Directive in Vue?',
      ru: 'Как создать пользовательскую директиву во Vue?'
    },
    options: [
      { id: 'a', text: { en: 'By defining an object with lifecycle hooks (created, mounted, etc.) and registering it via app.directive()', ru: 'Путем определения объекта с хуками жизненного цикла и регистрации через app.directive()' } },
      { id: 'b', text: { en: 'By using the v-new keyword', ru: 'Используя ключевое слово v-new' } },
      { id: 'c', text: { en: 'Directives cannot be custom in Vue 3', ru: 'В Vue 3 нельзя создавать свои директивы' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 117,
    category: 'Testing',
    section: '12. Тестирование',
    topic: 'Основы тестирования',
    question: {
      en: 'What is the main difference between a Mock and a Stub?',
      ru: 'В чем основная разница между Mock и Stub?'
    },
    options: [
      { id: 'a', text: { en: 'Stubs provide canned answers; Mocks verify behavior (i.e., that a call was actually made)', ru: 'Stub возвращает заранее заготовленный ответ; Mock проверяет поведение (был ли совершен вызов)' } },
      { id: 'b', text: { en: 'Mocks are only for databases', ru: 'Mocks используются только для баз данных' } },
      { id: 'c', text: { en: 'Stubs are faster than Mocks', ru: 'Stub работают быстрее, чем Mock' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 118,
    category: 'Performance',
    section: '13. Производительность',
    topic: 'Оптимизация загрузки',
    question: {
      en: 'What is the "Ideal" use case for Web Workers?',
      ru: 'Каков "идеальный" случай использования Web Workers?'
    },
    options: [
      { id: 'a', text: { en: 'Offloading CPU-intensive tasks (image processing, big data analysis) to avoid blocking the UI thread', ru: 'Вынос тяжелых вычислений (обработка фото, анализ данных) из основного потока, чтобы не фризить UI' } },
      { id: 'b', text: { en: 'Small DOM updates', ru: 'Небольшие обновления DOM' } },
      { id: 'c', text: { en: 'Changing the background color', ru: 'Смена цвета фона' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 119,
    category: 'Architecture',
    section: '17. Архитектура фронтенда',
    topic: 'Паттерны и подходы',
    question: {
      en: 'What is Feature-Sliced Design (FSD)?',
      ru: 'Что такое Feature-Sliced Design (FSD)?'
    },
    options: [
      { id: 'a', text: { en: 'An architectural methodology that organizes code into layers (Shared, Entities, Features, etc.)', ru: 'Методология архитектуры, организующая код по слоям (Shared, Entities, Features и т.д.)' } },
      { id: 'b', text: { en: 'A tool for resizing images', ru: 'Инструмент для изменения размера картинок' } },
      { id: 'c', text: { en: 'A design system for mobile phones', ru: 'Дизайн-система для мобильных телефонов' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 120,
    category: 'Security',
    section: '11. Безопасность фронтенда',
    topic: 'Безопасность',
    question: {
      en: 'What is Subresource Integrity (SRI)?',
      ru: 'Что такое Subresource Integrity (SRI)?'
    },
    options: [
      { id: 'a', text: { en: 'A security feature that allows browsers to verify that resources (like scripts) haven\'t been tampered with', ru: 'Функция безопасности, позволяющая браузеру проверить, не был ли изменен внешний скрипт' } },
      { id: 'b', text: { en: 'A way to check if the user is logged in', ru: 'Способ проверить, залогинен ли пользователь' } },
      { id: 'c', text: { en: 'An optimization for database queries', ru: 'Оптимизация запросов к базе данных' } }
    ],
    correctOptionId: 'a'
  },
  // Batch 7: Advanced Web Development
  {
    id: 121,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What is the difference between Object.is() and strict equality (===)?',
      ru: 'В чем разница между Object.is() и строгим равенством (===)?'
    },
    options: [
      { id: 'a', text: { en: 'Object.is() treats NaN as equal to NaN and distinguishes between +0 and -0', ru: 'Object.is() считает, что NaN равен NaN, и различает +0 и -0' } },
      { id: 'b', text: { en: 'Object.is() is always slower', ru: 'Object.is() всегда медленнее' } },
      { id: 'c', text: { en: 'There is no difference in modern engines', ru: 'В современных движках разницы нет' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 122,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Асинхронность',
    question: {
      en: 'What is the purpose of requestIdleCallback?',
      ru: 'Для чего используется requestIdleCallback?'
    },
    options: [
      { id: 'a', text: { en: 'To queue a function to be called during a browser\'s idle periods (e.g., for background processing)', ru: 'Для вызова функции в моменты простоя браузера (например, для фоновой обработки)' } },
      { id: 'b', text: { en: 'To refresh the page background', ru: 'Для обновления фона страницы' } },
      { id: 'c', text: { en: 'To stop all animations', ru: 'Для остановки всех анимаций' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 123,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What does the Intl API provide?',
      ru: 'Что предоставляет Intl API?'
    },
    options: [
      { id: 'a', text: { en: 'Language-sensitive string comparison, number formatting, and date/time formatting', ru: 'Сравнение строк, форматирование чисел и дат с учетом языка пользователя' } },
      { id: 'b', text: { en: 'Integer-only arithmetic functions', ru: 'Функции только для целочисленной арифметики' } },
      { id: 'c', text: { en: 'A way to connect to international databases', ru: 'Способ подключения к международным базам данных' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 124,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Модули',
    question: {
      en: 'What is a Dynamic Import?',
      ru: 'Что такое динамический импорт (Dynamic Import)?'
    },
    options: [
      { id: 'a', text: { en: 'Using import() as a function that returns a promise, allowing for code-splitting and on-demand loading', ru: 'Использование import() как функции, возвращающей промис, что позволяет подгружать код по требованию' } },
      { id: 'b', text: { en: 'Importing variables from a running process', ru: 'Импорт переменных из запущенного процесса' } },
      { id: 'c', text: { en: 'A way to import CSS into HTML', ru: 'Способ импорта CSS в HTML' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 125,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What does the Nullish Coalescing Assignment (??=) do?',
      ru: 'Что делает оператор Nullish Coalescing Assignment (??=)?'
    },
    options: [
      { id: 'a', text: { en: 'Assigns a value to a variable only if that variable is currently null or undefined', ru: 'Присваивает значение переменной только в том случае, если она равна null или undefined' } },
      { id: 'b', text: { en: 'Adds two null values together', ru: 'Складывает два значения null' } },
      { id: 'c', text: { en: 'Assigns a value if the variable is any falsy value', ru: 'Присваивает значение, если переменная является любым ложным значением' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 126,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'What is the "Awaited" utility type for?',
      ru: 'Для чего нужна утилита "Awaited" в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'To unwrap the type of a Promise (recursively getting the actual resolved value type)', ru: 'Для получения результирующего типа промиса (рекурсивно "разворачивает" Promise)' } },
      { id: 'b', text: { en: 'To make a function return a Promise', ru: 'Чтобы заставить функцию возвращать промис' } },
      { id: 'c', text: { en: 'To pause the TypeScript compiler', ru: 'Для паузы компилятора TypeScript' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 127,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'What does the Parameters utility type do?',
      ru: 'Что делает утилита Parameters в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'Obtains the types of the parameters of a function type as a tuple', ru: 'Получает типы параметров функции в виде кортежа' } },
      { id: 'b', text: { en: 'Forces a function to accept only strings', ru: 'Заставляет функцию принимать только строки' } },
      { id: 'c', text: { en: 'Counts the number of arguments in a function', ru: 'Считает количество аргументов в функции' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 128,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'What is the difference between Omit and Exclude?',
      ru: 'В чем разница между Omit и Exclude?'
    },
    options: [
      { id: 'a', text: { en: 'Omit is for removing keys from an object; Exclude is for removing types from a union', ru: 'Omit удаляет ключи из объекта; Exclude удаляет типы из объединения (union)' } },
      { id: 'b', text: { en: 'Omit works only on classes', ru: 'Omit работает только на классах' } },
      { id: 'c', text: { en: 'Exclude is for excluding files from build', ru: 'Exclude нужен для исключения файлов из сборки' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 129,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Семантическая верстка',
    question: {
      en: 'What is the main difference between <dialog>.show() and <dialog>.showModal()?',
      ru: 'В чем основная разница между show() и showModal() у элемента <dialog>?'
    },
    options: [
      { id: 'a', text: { en: 'showModal() makes the dialog a modal (blocks interaction with the rest of the page, adds a backdrop)', ru: 'showModal() делает окно модальным (блокирует остальную страницу, добавляет затемнение)' } },
      { id: 'b', text: { en: 'show() is for mobile only', ru: 'show() только для мобильных' } },
      { id: 'c', text: { en: 'showModal() deletes the dialog content after closing', ru: 'showModal() удаляет контент окна после закрытия' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 130,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Семантическая верстка',
    question: {
      en: 'What is the difference between Prefetching and Prerendering?',
      ru: 'В чем разница между Prefetching и Prerendering?'
    },
    options: [
      { id: 'a', text: { en: 'Prefetching downloads a resource; Prerendering downloads AND renders the entire page in the background', ru: 'Prefetching загружает ресурс; Prerendering загружает И рендерит всю страницу в фоне' } },
      { id: 'b', text: { en: 'Prerendering is only for fonts', ru: 'Prerendering только для шрифтов' } },
      { id: 'c', text: { en: 'There is no difference in modern browsers', ru: 'В современных браузерах разницы нет' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 131,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Основы CSS',
    question: {
      en: 'How can you prevent a Layout Shift from an image loading?',
      ru: 'Как предотвратить сдвиг макета (Layout Shift) при загрузке изображения?'
    },
    options: [
      { id: 'a', text: { en: 'By explicitly setting width/height attributes or using the aspect-ratio property in CSS', ru: 'Явным указанием атрибутов width/height или использованием свойства aspect-ratio в CSS' } },
      { id: 'b', text: { en: 'By using a low-quality placeholder', ru: 'Использованием заглушки низкого качества' } },
      { id: 'c', text: { en: 'By making the image fixed', ru: 'Сделав изображение фиксированным' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 132,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'CSS-переменные и современный CSS',
    question: {
      en: 'What should you know about the "will-change" property?',
      ru: 'Что важно знать о свойстве "will-change" в CSS?'
    },
    options: [
      { id: 'a', text: { en: 'It signals the browser to optimize for future changes, but should be used sparingly (it uses memory)', ru: 'Оно сообщает браузеру о будущих изменениях, но должно использоваться экономно (потребляет память)' } },
      { id: 'b', text: { en: 'It is the only way to enable 3D in CSS', ru: 'Это единственный способ включить 3D в CSS' } },
      { id: 'c', text: { en: 'It updates the variable value automatically', ru: 'Оно автоматически обновляет значение переменной' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 133,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Архитектура CSS',
    question: {
      en: 'What is the main benefit of CSS Modules?',
      ru: 'В чем главное преимущество CSS Modules?'
    },
    options: [
      { id: 'a', text: { en: 'They automatically scope class names to the component, preventing global namespace pollution', ru: 'Они автоматически ограничивают область видимости классов компонентом, предотвращая конфликты имен' } },
      { id: 'b', text: { en: 'They make CSS load faster', ru: 'Они ускоряют загрузку CSS' } },
      { id: 'c', text: { en: 'They allow writing JavaScript inside CSS', ru: 'Они позволяют писать JavaScript внутри CSS' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 134,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Другие API',
    question: {
      en: 'What is the Page Visibility API?',
      ru: 'Что такое Page Visibility API?'
    },
    options: [
      { id: 'a', text: { en: 'An API to detect when the user has switched tabs or minimized the window', ru: 'API для отслеживания момента, когда пользователь переключил вкладку или свернул окно' } },
      { id: 'b', text: { en: 'A tool for checking page brightness', ru: 'Инструмент для проверки яркости страницы' } },
      { id: 'c', text: { en: 'A way to hide certain elements from screen readers', ru: 'Способ скрыть элементы от скрин-ридеров' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 135,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Другие API',
    question: {
      en: 'What is the modern way to copy text to the clipboard in a browser?',
      ru: 'Каков современный способ копирования текста в буфер обмена в браузере?'
    },
    options: [
      { id: 'a', text: { en: 'Using navigator.clipboard.writeText(), which returns a Promise', ru: 'Через navigator.clipboard.writeText(), который возвращает Promise' } },
      { id: 'b', text: { en: 'Using document.execCommand(\'copy\')', ru: 'Через document.execCommand(\'copy\')' } },
      { id: 'c', text: { en: 'Using a hidden <input> element', ru: 'С помощью скрытого элемента <input>' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 136,
    category: 'React',
    section: '6. React (если используется)',
    topic: 'React Hooks',
    question: {
      en: 'What is the purpose of the useDeferredValue hook?',
      ru: 'Для чего нужен хук useDeferredValue в React?'
    },
    options: [
      { id: 'a', text: { en: 'To defer re-rendering a non-urgent part of the tree based on a value that changes frequently', ru: 'Для отложенного перерендера неосновных частей дерева при частом изменении значения' } },
      { id: 'b', text: { en: 'To load data after a delay', ru: 'Для загрузки данных с задержкой' } },
      { id: 'c', text: { en: 'To hide a value from the user initial render', ru: 'Для скрытия значения при первом рендере' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 137,
    category: 'React',
    section: '6. React (если используется)',
    topic: 'React Hooks',
    question: {
      en: 'What is the useTransition hook for?',
      ru: 'Для чего нужен хук useTransition в React?'
    },
    options: [
      { id: 'a', text: { en: 'To mark state updates as non-blocking transitions (e.g., filtering a long list)', ru: 'Для пометки обновлений состояния как несрочных (например, фильтрация большого списка)' } },
      { id: 'b', text: { en: 'To animate components when they appear', ru: 'Для анимации компонентов при появлении' } },
      { id: 'c', text: { en: 'To redirect the user to another page', ru: 'Для перенаправления пользователя на другую страницу' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 138,
    category: 'Vue.js',
    section: '7. Vue.js',
    topic: 'Основы Vue 3',
    question: {
      en: 'What is the <Teleport> component in Vue 3?',
      ru: 'Что такое компонент <Teleport> во Vue 3?'
    },
    options: [
      { id: 'a', text: { en: 'A component that allows rendering its template into a DOM node located elsewhere in the tree', ru: 'Компонент, позволяющий отрендерить свой шаблон в любое другое место в DOM-дереве' } },
      { id: 'b', text: { en: 'A tool for fast page transitions', ru: 'Инструмент для быстрых переходов между страницами' } },
      { id: 'c', text: { en: 'A way to pass data between tabs', ru: 'Способ передачи данных между вкладками' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 139,
    category: 'Testing',
    section: '12. Тестирование',
    topic: 'Основы тестирования',
    question: {
      en: 'What is a Snapshot Test?',
      ru: 'Что такое снимок (Snapshot) тест?'
    },
    options: [
      { id: 'a', text: { en: 'A test that compares the rendered output of a component to a previously stored reference file', ru: 'Тест, сравнивающий отрисованный результат компонента с ранее сохраненным эталоном' } },
      { id: 'b', text: { en: 'A test taken with a camera', ru: 'Тест, снятый на камеру' } },
      { id: 'c', text: { en: 'A very fast performance test', ru: 'Очень быстрый тест производительности' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 140,
    category: 'Performance',
    section: '13. Производительность',
    topic: 'Core Web Vitals',
    question: {
      en: 'What is the main benefit of OffscreenCanvas?',
      ru: 'В чем главное преимущество OffscreenCanvas?'
    },
    options: [
      { id: 'a', text: { en: 'It allows performing heavy canvas drawing operations inside a Web Worker', ru: 'Оно позволяет выполнять тяжелую отрисовку на холсте (canvas) внутри веб-воркера' } },
      { id: 'b', text: { en: 'It makes the canvas larger than the screen', ru: 'Оно делает холст больше экрана' } },
      { id: 'c', text: { en: 'It automatically saves the canvas as PNG', ru: 'Оно автоматически сохраняет холст как PNG' } }
    ],
    correctOptionId: 'a'
  },
  // Batch 8: Mastery & Future Web
  {
    id: 141,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What is the modern way to deep clone an object in JavaScript?',
      ru: 'Каков современный способ глубокого клонирования объекта в JavaScript?'
    },
    options: [
      { id: 'a', text: { en: 'Using the global structuredClone() function', ru: 'С помощью глобальной функции structuredClone()' } },
      { id: 'b', text: { en: 'Using JSON.parse(JSON.stringify(obj))', ru: 'Через JSON.parse(JSON.stringify(obj))' } },
      { id: 'c', text: { en: 'Using the spread operator (...)', ru: 'С помощью spread-оператора (...)' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 142,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'ES6+ возможности',
    question: {
      en: 'What is the purpose of Intl.RelativeTimeFormat?',
      ru: 'Для чего нужен Intl.RelativeTimeFormat?'
    },
    options: [
      { id: 'a', text: { en: 'To format time in a human-readable "relative" way (e.g., "2 days ago")', ru: 'Для форматирования времени в относительном виде (например, "2 дня назад")' } },
      { id: 'b', text: { en: 'To measure the time between two events', ru: 'Для измерения времени между двумя событиями' } },
      { id: 'c', text: { en: 'To sync the server and client time', ru: 'Для синхронизации времени сервера и клиента' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 143,
    category: 'JavaScript Core',
    section: '1. JavaScript Core',
    topic: 'Асинхронность',
    question: {
      en: 'What is the difference between Promise.any() and Promise.race()?',
      ru: 'В чем разница между Promise.any() и Promise.race()?'
    },
    options: [
      { id: 'a', text: { en: 'Promise.any() waits for the first FULFILLED promise; Promise.race() waits for the first SETTLED promise (fulfilled or rejected)', ru: 'Promise.any() ждет первый УСПЕШНЫЙ промис; Promise.race() ждет результат первого ЗАВЕРШЕННОГО (успех или ошибка)' } },
      { id: 'b', text: { en: 'Promise.race() is only for network errors', ru: 'Promise.race() только для сетевых ошибок' } },
      { id: 'c', text: { en: 'There is no difference', ru: 'Разницы нет' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 144,
    category: 'TypeScript',
    section: '2. TypeScript',
    topic: 'Продвинутые типы',
    question: {
      en: 'How does the Pick utility type work?',
      ru: 'Как работает утилита Pick в TypeScript?'
    },
    options: [
      { id: 'a', text: { en: 'It constructs a type by picking a set of properties from an existing type', ru: 'Она создает новый тип, выбирая только указанные свойства из существующего типа' } },
      { id: 'b', text: { en: 'It picks a random type from a union', ru: 'Она выбирает случайный тип из объединения' } },
      { id: 'c', text: { en: 'It is a replacement for Object.keys', ru: 'Это замена для Object.keys' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 145,
    category: 'HTML',
    section: '3. HTML и семантика',
    topic: 'Семантическая верстка',
    question: {
      en: 'What are <template> and <slot> tags used for?',
      ru: 'Для чего используются теги <template> и <slot>?'
    },
    options: [
      { id: 'a', text: { en: 'They are core elements for building Web Components (Shadow DOM)', ru: 'Это основные элементы для создания веб-компонентов (Shadow DOM)' } },
      { id: 'b', text: { en: 'They are only for React and Vue', ru: 'Они предназначены только для React и Vue' } },
      { id: 'c', text: { en: 'To optimize image loading', ru: 'Для оптимизации загрузки картинок' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 146,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Анимации и переходы',
    question: {
      en: 'How does transition-behavior: allow-discrete help in modern CSS?',
      ru: 'Как свойство transition-behavior: allow-discrete помогает в современном CSS?'
    },
    options: [
      { id: 'a', text: { en: 'It allows animating properties that were previously non-animatable, like display: none', ru: 'Оно позволяет анимировать дискретные свойства, такие как display: none' } },
      { id: 'b', text: { en: 'It makes animations faster', ru: 'Оно ускоряет анимации' } },
      { id: 'c', text: { en: 'It disables all transitions', ru: 'Оно отключает все переходы' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 147,
    category: 'CSS',
    section: '4. CSS и верстка',
    topic: 'Анимации и переходы',
    question: {
      en: 'What is a CSS Scroll-Driven Animation?',
      ru: 'Что такое Scroll-Driven Animation в CSS?'
    },
    options: [
      { id: 'a', text: { en: 'An animation that progresses based on the scroll position of a container instead of time', ru: 'Анимация, прогресс которой зависит от прокрутки, а не от времени' } },
      { id: 'b', text: { en: 'An animation that plays when the user stops scrolling', ru: 'Анимация, которая проигрывается после остановки скролла' } },
      { id: 'c', text: { en: 'A way to make the page scroll automatically', ru: 'Способ заставить страницу скроллиться автоматически' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 148,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Другие API',
    question: {
      en: 'What is the Web Bluetooth API for?',
      ru: 'Для чего нужен Web Bluetooth API?'
    },
    options: [
      { id: 'a', text: { en: 'To communicate with nearby Bluetooth Low Energy devices directly from the browser', ru: 'Для взаимодействия с Bluetooth-устройствами прямо из браузера' } },
      { id: 'b', text: { en: 'To connect headphones to the browser', ru: 'Для подключения наушников к браузеру' } },
      { id: 'c', text: { en: 'To send files via Wi-Fi', ru: 'Для отправки файлов через Wi-Fi' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 149,
    category: 'Browser API',
    section: '5. Браузерные API',
    topic: 'Другие API',
    question: {
      en: 'What is the Navigation API (modern replacement for History API)?',
      ru: 'Что такое Navigation API (современная замена History API)?'
    },
    options: [
      { id: 'a', text: { en: 'A modern API for managing tab navigation, offering better events like "navigate" and intercepting requests', ru: 'Современный API для управления навигацией, предлагающий события типа "navigate" и перехват запросов' } },
      { id: 'b', text: { en: 'A tool for GPS navigation', ru: 'Инструмент для GPS-навигации' } },
      { id: 'c', text: { en: 'A way to refresh the page', ru: 'Способ обновления страницы' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 150,
    category: 'Architecture',
    section: '17. Архитектура фронтенда',
    topic: 'Паттерны и подходы',
    question: {
      en: 'What is a Micro-frontend architecture?',
      ru: 'Что такое архитектура микрофронтендов (Micro-frontends)?'
    },
    options: [
      { id: 'a', text: { en: 'An approach where different parts of a website are built by separate teams using different technologies and integrated into a single app', ru: 'Подход, при котором части сайта разрабатываются разными командами и объединяются в одно приложение' } },
      { id: 'b', text: { en: 'A very small website for mobile phones', ru: 'Очень маленький сайт для мобильных телефонов' } },
      { id: 'c', text: { en: 'Using only small UI components', ru: 'Использование только мелких UI-компонентов' } }
    ],
    correctOptionId: 'a'
  },
  {
    id: 151,
    category: 'Performance',
    section: '13. Производительность',
    topic: 'Оптимизация загрузки',
    question: {
      en: 'What is the difference between SSR (Server-Side Rendering) and SSG (Static Site Generation)?',
      ru: 'В чем разница между SSR (Server-Side Rendering) и SSG (Static Site Generation)?'
    },
    options: [
      { id: 'a', text: { en: 'SSR renders on every request; SSG generates static HTML once at build time', ru: 'SSR рендерит страницу при каждом запросе; SSG генерирует статику один раз на этапе сборки' } },
      { id: 'b', text: { en: 'SSG is only for blogs', ru: 'SSG подходит только для блогов' } },
      { id: 'c', text: { en: 'SSR cannot be used with database data', ru: 'SSR нельзя использовать с данными из базы' } }
    ],
    correctOptionId: 'a'
  }
];







