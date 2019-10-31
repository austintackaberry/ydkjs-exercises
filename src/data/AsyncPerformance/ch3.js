const Ch3Questions = [
  {
    question: `How do Promises uninvert the *inversion of control*?`,
    questionId: 'yKfPtJA7hI14xcZpmrNb',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'With Promises, we can expect it to return us a capability to know when its task finishes. Then, our code can decide what to do next.',
        id: 0,
      },
      {
        text:
          'They require you to send two callback functions: one for success and one for error case.',
        id: 1,
      },
      {
        text:
          'They break asynchrony and coerce the functions into synchronous functions',
        id: 2,
      },
      {
        text:
          'You promise to fulfill the request by calling the callback function',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md#chapter-3-promises',
    explanation:
      'Promises allow you to remain in control when you make a request to a third party library.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})

let prom2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 500)
})

Promise.all([prom1, prom2]).then(function onComplete(results) {
  const sum = results.reduce((acc, val) => {
    return acc + val
  }, 0);
  console.log(sum)
})
${'```'}
    `,
    questionId: 'GA4y3cQ7ni69os1cz7X6',
    shouldBeRandomized: false,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`1`', id: 1 },
      { text: '`2`', id: 2 },
      { text: '`3`', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md#promise-value',
    explanation:
      "`Promise.all()` creates a single promise that resolves when all of the input promises resolve. In the example above, `onComplete` won't run until `prom1` and `prom2` have resolved.",
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
let promArr = [];
for (let i = 0; i < 10; i++) {
  promArr.push(
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000);
    })
  );
}
promArr.push(
  new Promise((resolve, reject) => {
    setTimeout(() => reject('uh oh'), 1500);
  })
);

Promise.all(promArr)
  .then(function onComplete(results) {
    const sum = results.reduce((acc, val) => {
      return acc + val;
    }, 0);
    console.log(sum);
  })
  .catch(err => console.log(err));
${'```'}
    `,
    questionId: 'AzGqKEnaNzBF3G6ouNHm',
    shouldBeRandomized: false,
    answers: [
      { text: '`10`', id: 0 },
      { text: '`"uh oh"`', id: 1 },
      { text: '`10 "uh oh"`', id: 2 },
      { text: '`undefined`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md#promiseall--',
    explanation:
      "If one promise rejects in `Promise.all`, then they all fail. Even though 10 of the promises passed to `Promise.all` resolved, we don't have access to the resolved data if one fails.",
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})

let prom2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 500)
})

Promise.race([prom1, prom2]).then(function onComplete(results) {
  console.log(results)
})
${'```'}
    `,
    questionId: 'bqxHeYeDipQbED3xwrEM',
    shouldBeRandomized: false,
    answers: [
      { text: '`1`', id: 0 },
      { text: '`2`', id: 1 },
      { text: '`[1, 2]`', id: 2 },
      { text: '`[2, 1]`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md#promiserace--',
    explanation:
      'With `Promise.race()`, as soon as the first promise resolves, the resolved value is sent to `onComplete`. Because `prom2`s timer was for less time than `prom1`, `prom2` won the race.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
const prom1 = Promise.resolve(1);
const prom2 = Promise.reject('uh oh 2');
const prom3 = Promise.reject('uh oh 3');

Promise.all([prom1, prom2, prom3])
  .then(results => console.log(results))
  .catch(err => console.log(err));
${'```'}
    `,
    questionId: 'SnPgR8WspOlxLcYHaxOS',
    shouldBeRandomized: true,
    answers: [
      { text: '`"uh oh 2"`', id: 0 },
      { text: '`"uh oh 3"`', id: 1 },
      { text: '`"uh oh 2"` `"uh oh 3"`', id: 2 },
      { text: '`["uh oh 2", "uh oh 3"]`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md#promiseall--',
    explanation:
      'The error that gets sent to `Promise.all.catch()` is the rejected value of the first promise to reject. In this case that would be `prom2`.',
  },
];
export default Ch3Questions;
