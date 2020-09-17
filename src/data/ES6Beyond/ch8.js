const Ch8Questions = [
  {
    question: `What do \`async\` functions return?`,
    questionId: 'G4i5r5HFBq6kkhTidJny',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'a promise',
        id: 0,
      },
      { text: 'a callback', id: 1 },
      {
        text: 'a resolved promise',
        id: 2,
      },
      {
        text: 'an object',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch8.md#async-functions',
    explanation:
      '`async` functions return a promise which can then be consumed via `await` or with `.then()`.',
  },
  {
    question: `The \`await\` keyword can only be used inside an \`async\` function`,
    questionId: 'bSSsrnNhAw9mJ5xsWaBu',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0,
      },
      { text: 'False', id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch8.md#async-functions',
    explanation:
      'The `await` expression causes `async` function execution to pause until a `Promise` is resolved, that is fulfilled or rejected, and to resume execution of the `async` function after fulfillment. When resumed, the value of the `await` expression is that of the fulfilled `Promise`.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var obj = { a: 1, b: 2 };

Object.observe(
  obj,
  function (changes) {
    console.log(changes)
  }
);
obj.a = 3
${'```'}
    `,
    questionId: '5EOzpJgToRQkNTtROMHl',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`TypeError`',
        id: 0,
      },
      { text: '`{change: {a: 3}}`', id: 1 },
      {
        text: '`"change"`',
        id: 2,
      },
      {
        text: '`[{change: {a: 3}}]`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch8.md#objectobserve',
    explanation:
      'Trick question! `Object.observe()` has been deprecated. ES6 Proxies are recommended as an alternative.',
  },
  {
    question: `What will be logged to the console when the following code is executed?
  ${'```js'}
  let a = 2;
  console.log(a ** 4 === Math.pow(a, 4));
  ${'```'}  
    `,
    questionId: 'XUN6Mw3Sjw7g6NALueA6',
    shouldBeRandomized: false,
    answers: [
      {
        text: '`true`',
        id: 0
      },
      {
        text: '`false`',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch8.md#exponentiation-operator',
    explanation: "The `**` operator has been proposed for JavaScript to perform exponentiation in the same way that `Math.pow(..)` does"
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var o1 = { a: 1, b: 2 },
o2 = { c: 3 },
o3 = { ...o1, ...o2, d: 4 };

console.log(o3.a, o3.b, o3.c, o3.d);
${'```'}
    `,
    questionId: 'vyOCeqkXC5bQy9XPaDVt',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`1 2 3 4`',
        id: 0,
      },
      { text: '`TypeError`', id: 1 },
      {
        text: '`4`',
        id: 2,
      },
      {
        text: '`3 4`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch8.md#objects-properties-and-',
    explanation: 'The spread operator here works similar to that with arrays.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
  ${'```js'}
  let o1 = {a: 1, b: 2, c: 3};
  let {b, ...o2} = o1;
  console.log(o2);
  ${'```'}  
    `,
    questionId: '8XT3LEI20C8VmaWUUdsq',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`{a: 1, c: 3}`',
        id: 0
      },
      {
        text: '`{b: 2, c: 3}`',
        id: 1
      },
      {
        text: '`{a: 1, b: 2, c: 3}`',
        id: 2
      },
      {
        text: '`{a: 1, b: 2}`',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch8.md#objects-properties-and-',
    explanation: "The `...` operator might also be used to gather an object's destructured properties back into an object"
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var arr = [1, 2, 3, 'hello'];
console.log(arr.includes('hello'));
${'```'}
    `,
    questionId: 'kEl1ZHRrZOw0TA8bu966',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`true`',
        id: 0,
      },
      { text: '`false`', id: 1 },
      {
        text: '`TypeError`',
        id: 2,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch8.md#arrayincludes',
    explanation:
      '`Array.prototype.includes(x)` simply checks to see if an element value is equal to `x`',
  },
  {
    question: 'What is WebAssembly?',
    questionId: 'k760jcjEJbUIHY4Iz3JL',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'A new programming language',
        id: 0
      },
      {
        text: 'The future replacement of JavaScript',
        id: 1
      },
      {
        text: 'A new binary represenation of code',
        id: 2
      },
      {
        text: 'A new JavaScript framework',
        id: 3
      }
    ],
    correctAnswerId: 2,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch8.md#webassembly-wasm',
    explanation: "WebAssembly proposes a format for a binary representation of a highly compressed AST (syntax tree) of code, which can then give instructions directly to the JS engine and its underpinnings, without having to be parsed by JS, or even behave by the rules of JS."
  }
];

export default Ch8Questions;
