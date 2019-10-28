const Ch1Questions = [
  {
    question: `\`console.log()\` is always executed synchronously`,
    questionId: 'DezUGg37iH44NXzdLo3i',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch1.md#async-console',
    explanation:
      'While it is up to the hosting environment how they want to implement `console`, it is often asynchronous because blocking I/O takes a lot of time.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var data = ajax( "https://google.com" );

console.log( data );
${'```'}
    `,
    questionId: 'BpY4KEBuBBdeQBlxA3LG',
    shouldBeRandomized: true,
    answers: [
      { text: 'The html for google.com', id: 0 },
      { text: '`undefined`', id: 1 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch1.md#a-program-in-chunks',
    explanation:
      'Because `ajax` is asynchronous, `data` will not yet be defined when it is logged to the console.',
  },
  {
    question: `Until ES6, JavaScript itself has actually never had any direct notion of asynchrony built into it.`,
    questionId: 'vjpxPlelT1ljEtKFO90e',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch1.md#event-loop',
    explanation:
      'What you typically think of asynchrony is often the Web APIs, not the JavaScript engine.',
  },
  {
    question: `What data structure best explains the event loop?`,
    questionId: 'm6QM7gCTkPglIfbbPGVX',
    shouldBeRandomized: true,
    answers: [
      { text: 'stack', id: 0 },
      { text: 'queue', id: 1 },
      { text: 'binary tree', id: 2 },
      { text: 'graph', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch1.md#event-loop',
    explanation:
      'The event loop is FIFO, or first-in-first-out, which is similar to that of a queue.',
  },
  {
    question: `What statement about \`setTimeout(callbackFn, 1000)\` below is the most accurate.`,
    questionId: '0IR8uGxobATrQNdrpC4g',
    shouldBeRandomized: true,
    answers: [
      { text: '`callbackFn` will be executed once 1000ms has elapsed.', id: 0 },
      { text: '`callbackFn` will be executed in at least 1000ms.', id: 1 },
      { text: '`callbackFn` will be executed in at most 1000ms.', id: 2 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch1.md#event-loop',
    explanation:
      'Once the timer is up, the callback will get added to the event loop. If the event loop has 20 items, then the callback will execute once those 20 items are executed.',
  },
];
export default Ch1Questions;
