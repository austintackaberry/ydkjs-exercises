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
];

export default Ch8Questions;
