import type { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    category: 'JavaScript Core',
    question: {
      en: 'What primitive data types exist in JavaScript?',
      ru: 'Какие примитивные типы данных существуют в JavaScript?'
    },
    options: [
      {
        id: 'a',
        text: {
          en: 'string, number, boolean, null, undefined, symbol, bigint',
          ru: 'string, number, boolean, null, undefined, symbol, bigint'
        }
      },
      {
        id: 'b',
        text: {
          en: 'string, number, array, object, function',
          ru: 'string, number, array, object, function'
        }
      },
      {
        id: 'c',
        text: {
          en: 'int, float, double, char, boolean',
          ru: 'int, float, double, char, boolean'
        }
      }
    ],
    correctOptionId: 'a'
  },
  {
    id: 2,
    category: 'JavaScript Core',
    question: {
      en: 'What is the main difference between null and undefined?',
      ru: 'В чем основная разница между null и undefined?'
    },
    options: [
      {
        id: 'a',
        text: {
          en: 'They are identical and can be used interchangeably',
          ru: 'Они идентичны и могут использоваться взаимозаменяемо'
        }
      },
      {
        id: 'b',
        text: {
          en: 'undefined means a variable has been declared but has no value; null is an assigned value representing "no value"',
          ru: 'undefined означает, что переменная объявлена, но не имеет значения; null — это присвоенное значение, представляющее "отсутствие значения"'
        }
      },
      {
        id: 'c',
        text: {
          en: 'null is for numbers, undefined is for strings',
          ru: 'null — для чисел, undefined — для строк'
        }
      }
    ],
    correctOptionId: 'b'
  },
  {
    id: 3,
    category: 'JavaScript Core',
    question: {
      en: 'What is a closure in JavaScript?',
      ru: 'Что такое замыкание (closure) в JavaScript?'
    },
    options: [
      {
        id: 'a',
        text: {
          en: 'Closing the browser tab',
          ru: 'Закрытие вкладки браузера'
        }
      },
      {
        id: 'b',
        text: {
          en: 'A tool for measuring code execution time',
          ru: 'Инструмент для измерения времени выполнения кода'
        }
      },
      {
        id: 'c',
        text: {
          en: 'A function that remembers and accesses variables from its outer scope even after the outer function has finished executing',
          ru: 'Функция, которая запоминает и имеет доступ к переменным из своей внешней области видимости даже после того, как внешняя функция завершила выполнение'
        }
      }
    ],
    correctOptionId: 'c'
  },
  {
    id: 4,
    category: 'Asynchronous JS',
    question: {
      en: 'What is the Event Loop?',
      ru: 'Что такое Event Loop?'
    },
    options: [
      {
        id: 'a',
        text: {
          en: 'A mechanism that allows Node.js/Browsers to perform non-blocking I/O operations by offloading operations to the system kernel',
          ru: 'Механизм, позволяющий Node.js/браузерам выполнять неблокирующие операции ввода-вывода, делегируя их ядру системы'
        }
      },
      {
        id: 'b',
        text: {
          en: 'A loop that iterates over an array infinitely',
          ru: 'Цикл, который бесконечно перебирает массив'
        }
      },
      {
        id: 'c',
        text: {
          en: 'A CSS feature for looping animations',
          ru: 'Функция CSS для зацикливания анимаций'
        }
      }
    ],
    correctOptionId: 'a'
  },
  {
    id: 5,
    category: 'TypeScript',
    question: {
      en: 'What is the main difference between type and interface in TypeScript?',
      ru: 'В чем основная разница между type и interface в TypeScript?'
    },
    options: [
      {
        id: 'a',
        text: {
          en: 'Interfaces can be merged (declaration merging), while types cannot be changed after definition via re-declaration',
          ru: 'Интерфейсы могут быть объединены (declaration merging), в то время как типы не могут быть изменены после определения через повторное объявление'
        }
      },
      {
        id: 'b',
        text: {
          en: 'Types are faster than interfaces',
          ru: 'Типы работают быстрее, чем интерфейсы'
        }
      },
      {
        id: 'c',
        text: {
          en: 'Interfaces are only for classes, types are for everything else',
          ru: 'Интерфейсы только для классов, типы — для всего остального'
        }
      }
    ],
    correctOptionId: 'a'
  },
  {
    id: 6,
    category: 'CSS',
    question: {
      en: 'What does "box-sizing: border-box" do?',
      ru: 'Что делает свойство "box-sizing: border-box"?'
    },
    options: [
      {
        id: 'a',
        text: {
          en: 'It adds a border to the element',
          ru: 'Добавляет рамку элементу'
        }
      },
      {
        id: 'b',
        text: {
          en: 'It includes padding and border in the element\'s total width and height',
          ru: 'Включает внутренние отступы (padding) и рамку (border) в общую ширину и высоту элемента'
        }
      },
      {
        id: 'c',
        text: {
          en: 'It makes the element circular',
          ru: 'Делает элемент круглым'
        }
      }
    ],
    correctOptionId: 'b'
  },
  {
    id: 7,
    category: 'React/Vue',
    question: {
      en: 'What is the purpose of the "key" attribute in lists?',
      ru: 'Для чего нужен атрибут "key" в списках?'
    },
    options: [
      {
        id: 'a',
        text: {
          en: 'To style the elements',
          ru: 'Для стилизации элементов'
        }
      },
      {
        id: 'b',
        text: {
          en: 'To uniquely identify elements for the virtual DOM reconciliation process',
          ru: 'Для уникальной идентификации элементов в процессе сравнения виртуального DOM (reconciliation)'
        }
      },
      {
        id: 'c',
        text: {
          en: 'To make the list searchable',
          ru: 'Чтобы сделать список доступным для поиска'
        }
      }
    ],
    correctOptionId: 'b'
  },
  {
    id: 8,
    category: 'Browser API',
    question: {
      en: 'What is the main difference between localStorage and sessionStorage?',
      ru: 'В чем основная разница между localStorage и sessionStorage?'
    },
    options: [
      {
        id: 'a',
        text: {
          en: 'localStorage has no expiration time; sessionStorage is cleared when the page session ends (tab is closed)',
          ru: 'localStorage не имеет срока действия; sessionStorage очищается по окончании сессии страницы (при закрытии вкладки)'
        }
      },
      {
        id: 'b',
        text: {
          en: 'localStorage is for strings only, sessionStorage for objects',
          ru: 'localStorage только для строк, sessionStorage — для объектов'
        }
      },
      {
        id: 'c',
        text: {
          en: 'There is no difference',
          ru: 'Разницы нет'
        }
      }
    ],
    correctOptionId: 'a'
  },
  {
    id: 9,
    category: 'Performance',
    question: {
      en: 'What is "Tree Shaking"?',
      ru: 'Что такое "Tree Shaking"?'
    },
    options: [
      {
        id: 'a',
        text: {
          en: 'A data structure in JS',
          ru: 'Структура данных в JS'
        }
      },
      {
        id: 'b',
        text: {
          en: 'The process of removing dead code (unused exports) from the final bundle',
          ru: 'Процесс удаления "мертвого" кода (неиспользуемых экспортов) из итоговой сборки'
        }
      },
      {
        id: 'c',
        text: {
          en: 'A way to optimize images',
          ru: 'Способ оптимизации изображений'
        }
      }
    ],
    correctOptionId: 'b'
  },
  {
    id: 10,
    category: 'Security',
    question: {
      en: 'What is XSS (Cross-Site Scripting)?',
      ru: 'Что такое XSS (Cross-Site Scripting)?'
    },
    options: [
      {
        id: 'a',
        text: {
          en: 'A vulnerability where an attacker injects malicious client-side scripts into web pages viewed by other users',
          ru: 'Уязвимость, при которой злоумышленник внедряет вредоносный клиентский скрипт в веб-страницы, просматриваемые другими пользователями'
        }
      },
      {
        id: 'b',
        text: {
          en: 'A way to share CSS between sites',
          ru: 'Способ обмена CSS между сайтами'
        }
      },
      {
        id: 'c',
        text: {
          en: 'A type of database attack',
          ru: 'Тип атаки на базу данных'
        }
      }
    ],
    correctOptionId: 'a'
  }
];
