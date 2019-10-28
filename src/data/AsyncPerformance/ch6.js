const Ch6Questions = [
  {
    question: `All performance optimizations matter and should be seriously evaluated`,
    questionId: 'jV7OHBpkIZaHXEXGYfpU',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch6.md#chapter-6-benchmarking--tuning',
    explanation:
      "There is no point in chasing after small performance optimizations if you don't know have any reason to believe that it is causing your app to be slow.",
  },
  {
    question: `The code below is a valid way to test performance:
${'```js'}
var start = (new Date()).getTime();

// do some operation

var end = (new Date()).getTime();

console.log( "Duration:", (end - start) );
${'```'}
    `,
    questionId: 'fM5TvIRl5kSaEDrSIFf3',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch6.md#benchmarking',
    explanation:
      'There are many things wrong with this, but one of the main reasons is that this is only one run, one data point and is not statistically significant.',
  },
  {
    question: `Which of the following will not potentially affect your performance test?`,
    questionId: 'x2XGf4rgGgIRLW5FBVXG',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'The amount of battery left on a smartphone that is running the test in Chrome',
        id: 0,
      },
      { text: 'Using polyfills', id: 1 },
      { text: 'Running the test one time vs many times', id: 2 },
      { text: 'The time of day that your tests are run', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch6.md#jsperfcom',
    explanation:
      'Almost everything you can imagine can potentially affect your performance tests. Especially if your question isn\'t just "is x faster than y" but if the question includes "is it a big enough difference for me to care". Maybe x is consistently faster than y, but maybe it is so close that no one can tell the difference.',
  },
  {
    question: `What is the difference between jsPerf and Benchmark.js?`,
    questionId: 'fCSIAMJzQf9k1zx7Eekg',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'Benchmark.js is lower level and gives a statistical analysis of the test. jsPerf uses Benchmark.js to test in a browser.',
        id: 0,
      },
      {
        text: 'They are two libraries that do more or less the same thing',
        id: 1,
      },
      { text: 'jsPerf is compatible with ES6+ and Benchmark.js is not', id: 2 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch6.md#jsperfcom',
    explanation:
      'jsPerf uses the Benchmark.js library to run statistically accurate and reliable tests, and makes the test on an openly available URL that you can pass around to others. Each time a test is run, the results are collected and persisted with the test, and the cumulative test results are graphed on the page for anyone to see.',
  },
  {
    question: `The browser will always execute your code as you wrote it`,
    questionId: 'RWI1RPLjnVPTl5JhnJN9',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch6.md#microperformance',
    explanation:
      'Browser JavaScript engines have come up with "engine optimizations" which speed up the execution of your code. They might execute your code differently from the way you wrote it if their way is faster **and** results in the same output as your way. This is one of the reasons why it is not directly obvious how to analytically compare two pieces of code. Especially when you consider that browsers are constantly updating and improving their engines.',
  },
];
export default Ch6Questions;
