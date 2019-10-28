const Ch3Questions = [
  {
    question:
      'What is going on under the hood when importing modules to prevent collisions?',
    questionId: 'mTVbHEJN1LbO9Jt8FWOL',
    shouldBeRandomized: true,
    answers: [
      { text: 'They are each wrapped in an IIFE', id: 0 },
      { text: 'The code is injected and inserted as is', id: 1 },
      { text: 'They use global namespaces', id: 2 },
      { text: 'ES6 classes', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md#functions-as-scopes',
    explanation: `IIFEs are used to "insert" code without collisions. The IIFE gives each module its own scope which allows it to use whatever non-global variables it wants without side effects. `,
  },
  {
    question: 'What is the main reason you should name your functions?',
    questionId: 'J4uc4jTpBvW0q26zSBX0',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'You have to name all functions, so this is a moot point',
        id: 0,
      },
      { text: 'Easier debugging', id: 1 },
      {
        text: `You don't actually want to name your functions if possible because then you can't use IIFEs`,
        id: 2,
      },
      { text: 'Browser optimization', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md#anonymous-vs-named',
    explanation: `If you are debugging an error, you might check the stack trace. If you encounter an anonymous function in the stack trace, you can't easily know which function it is referring to.`,
  },
  {
    question: 'JavaScript did not have a concept of block scoping before ES6',
    questionId: '5q00I1WBvBU3WD2Tgu82',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0,
      },
      { text: 'False', id: 1 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md#anonymous-vs-named',
    explanation: `Technically, it had block scoping in \`catch\` blocks as early as ES3. Standard block scoping was introduced in ES6 via \`let\` and \`const\`.`,
  },
  {
    question: `What will be logged to the console upon execution of the code below:
${'```js'}
{let i = 0}
console.log(i)
${'```'}
    `,
    questionId: 'ShCvRiKy6BmEdnOJtj75',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`0`',
        id: 0,
      },
      { text: '`undefined`', id: 1 },
      { text: '`null`', id: 2 },
      { text: '`ReferenceError`', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md#let-loops',
    explanation: `Because \`let\` is block scoped, \`i\` is only within scope inside the curly braces in the first line, not in the global scope. `,
  },
  {
    question: `What will be logged to the console upon execution of the code below:
${'```js'}
{var i = 0}
console.log(i)
${'```'}
`,
    questionId: 'AhiJsYY4y9uHnVVBTYCi',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`0`',
        id: 0,
      },
      { text: '`undefined`', id: 1 },
      { text: '`null`', id: 2 },
      { text: '`ReferenceError`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md#blocks-as-scopes',
    explanation: `Because \`var\` is not block scoped, \`i\` is stored in the global scope.`,
  },
];
export default Ch3Questions;
