const Ch4Questions = [
  {
    question: `What are the two possible outcomes of a \`Promise\`?`,
    questionId: 'vQyG9NbXDGHwOmFAEZv2',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'Fulfilled and rejected',
        id: 0,
      },
      { text: 'Completed and in progress', id: 1 },
      {
        text: 'Returned and incomplete',
        id: 2,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch4.md#promises',
    explanation:
      'If there are no errors, then the Promise will get resolved, but if an error occurs typically the Promise will get rejected.',
  },
  {
    question: 'A promise can only be resolved (fulfilled or rejected) once',
    questionId: 'Llq2fzjMh81c6BpCh5Dq',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0,
      },
      { text: 'False', id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch4.md#promises',
    explanation: "Promises can only be resolved (fulfillment or rejection) once. Any further attempts to fulfill or reject are simply ignored. Thus, once a Promise is resolved, it's an immutable value that cannot be changed."
  },
  {
    question: `This is a valid way to construct a promise:
${'```js'}
var p = new Promise(() => {
  return setTimeout(() => 5, 1000)
} );
${'```'}
    `,
    questionId: 'zYQmqVpBfiwgFlWm4nWi',
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
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch4.md#making-and-using-promises',
    explanation:
      'There are a couple things wrong with this code. For one, `setTimeout` does not return the return value of the callback. `fn` in `new Promise(fn)` needs to have an argument, such as `resolve`, which you call on your desired return value.',
  },
  {
    question: `This is a valid way to construct and consume a promise:
${'```js'}
var p = new Promise((resolve) => {
  setTimeout(() => resolve(5), 1000);
} );

p.done(val => {
  console.log(val);
});
${'```'}
    `,
    questionId: 'tx0ixV3MjqoXXmJkxCRB',
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
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch4.md#making-and-using-promises',
    explanation:
      '`done` is not a valid method for a Promise. The code above would be valid if it were replaced with `.then()`',
  },
  {
    question: 'What do `.then(..)` and `.catch(..)` methods return when invoked on a promise?',
    questionId: 'dyrVkcETZ8s7ipq1ieZ3',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'another promise',
        id: 0
      },
      {
        text: 'an object',
        id: 1
      },
      {
        text: '`undefined`',
        id: 2
      },
      {
        text: 'a function',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch4.md#making-and-using-promises',
    explanation: "Both `then(..)` and `catch(..)` automatically construct and return another promise instance, which is wired to receive the resolution from whatever the return value is from the original promise's fulfillment or rejection handler (whichever is actually called)"
  },
  {
    question: `What are thenables?`,
    questionId: 'fw3mKgWDPvDorEt1J7gi',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'Just another word for Promises',
        id: 0,
      },
      { text: 'The next version of promises introduced in ES7', id: 1 },
      {
        text:
          'Promise-like objects that generally can interoperate with Promise mechanisms',
        id: 2,
      },
      {
        text: 'Promises that are used with generators',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch4.md#thenables',
    explanation:
      'Any object (or function) with a `then(..)` function on it is assumed to be a thenable. Any place where the Promise mechanisms can accept and adopt the state of a genuine promise, they can also handle a thenable.',
  },
  {
    question: `\`p1\` and \`p2\` have essentially the same behavior:
${'```js'}
var p1 = Promise.resolve( 42 );

var p2 = new Promise( function pr(resolve){
  resolve( 42 );
} );
${'```'}
    `,
    questionId: 'gojOcgD1qa8s8MnltIZQ',
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
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch4.md#promise-api',
    explanation:
      '`Promise.resolve` creates a resolved promise. To access the value `42`, you need to call `.then()`',
  },
  {
    question: `What will be logged to the console when the following is executed?
  ${'```js'}
  const a = 42, b = Promise.resolve(43), c = 44;
  Promise.all([a, b, c]).then(val => console.log(val));
  ${'```'}  
    `,
    questionId: '2eNwGVoqyK8G9fTf8aBX',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`42`',
        id: 0
      },
      {
        text: '`43`',
        id: 1
      },
      {
        text: '`[42, 43, 44]`',
        id: 2
      }
    ],
    correctAnswerId: 2,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch4.md#promise-api',
    explanation: "`Promise.all([ .. ])` accepts an array of one or more values (e.g., immediate values, promises, thenables). It returns a promise back that will be fulfilled if all the values fulfill, or reject immediately once the first of any of them rejects"
  },
  {
    question: `What will be logged to the console when the following is executed?
  ${'```js'}
  const a = 42, b = Promise.resolve(43), c = 44;
  Promise.race([a, b, c]).then(val => console.log(val));
  ${'```'}  
    `,
    questionId: 'CjctOIwGZTztV155yKQC',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`42`',
        id: 0
      },
      {
        text: '`43`',
        id: 1
      },
      {
        text: '`[42, 43, 44]`',
        id: 2
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch4.md#promise-api',
    explanation: "While `Promise.all([ .. ])` waits for all fulfillments (or the first rejection), `Promise.race([ .. ])` waits only for either the first fulfillment or rejection."
  },
  {
    question: `What will be logged to the console when the following is executed?
  ${'```js'}
  const a = Promise.resolve(43), b = 42, c = Promise.reject("Oops");
  Promise.race([a, b, c])
  .then(val => console.log(val))
  .catch(e => console.log(e));
  ${'```'}  
    `,
    questionId: 'H9b44hy04P9rCW5TGewO',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`42`',
        id: 0
      },
      {
        text: '`43`',
        id: 1
      },
      {
        text: '`"Oops"`',
        id: 2
      }
    ],
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch4.md#promise-api',
    explanation: "While `Promise.all([ .. ])` waits for all fulfillments (or the first rejection), `Promise.race([ .. ])` waits only for either the first fulfillment or rejection (whichever happens first). In the code snippet above, if we changed the order of the array to `Promise.race([c, b, a])` then we'd get `'Oops'` printed instead."
  }
];

export default Ch4Questions;
