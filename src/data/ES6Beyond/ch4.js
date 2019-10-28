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
];

export default Ch4Questions;
