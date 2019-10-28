const Ch2Questions = [
  {
    question: `What is "callback hell" all about?`,
    questionId: 'nSPhyh2SfQ7quD1NwsrI',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'When you have several nested callbacks, and your code gets extremely indented',
        id: 0,
      },
      {
        text:
          "Manually hardcoding callbacks makes your code so convoluted that it's hard to ever maintain or update it.",
        id: 1,
      },
      { text: 'Writing many lines of code within one file', id: 2 },
      {
        text: 'Making so many ajax calls that your page takes forever to load',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md#nestedchained-callbacks',
    explanation:
      'But the brittle nature of manually hardcoded callbacks (even with hardcoded error handling) is often far less graceful. Once you end up specifying (aka pre-planning) all the various eventualities/paths, the code becomes so convoluted that it\'s hard to ever maintain or update it. **That** is what "callback hell" is all about! The nesting/indentation are basically a side show, a red herring.',
  },
  {
    question: `What is troubling about the code below:
${'```js'}
analytics.trackPurchase( purchaseData, function(){
  chargeCreditCard();
  displayThankyouPage();
} );
${'```'}
    `,
    questionId: 'NSQiVkB3AQG8TCIBrDi4',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'You are trusting this analytics library to ensure that critical functions get executed',
        id: 0,
      },
      { text: 'You are using analytics to track a purchase', id: 1 },
      { text: 'The callback is an anonymous function', id: 2 },
      { text: 'The functions are named poorly', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md#tale-of-five-callbacks',
    explanation:
      'This library could run this critical callback 1 time or 0 times or many times.',
  },
  {
    question: `What scenario below is not a potential problem that needs to be handled when using callbacks:`,
    questionId: 'sYKlDn1UsRvWQEf9zkKQ',
    shouldBeRandomized: true,
    answers: [
      { text: 'Call the callback too late (or never)', id: 0 },
      { text: 'Call the callback too few or too many times', id: 1 },
      {
        text:
          'Fail to pass along any necessary environment/parameters to your callback',
        id: 2,
      },
      {
        text: 'Once the callback is run, fail to execute the rest of your code',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md#tale-of-five-callbacks',
    explanation:
      'Once the callback is run, any issue in your code is not the fault of the callback.',
  },
  {
    question: `What is the difference between \`fn()\` and \`setTimeout(fn, 0)\`?`,
    questionId: 'TcT8PRxOpTSleXGlYjT9',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'The first option will be executed right away, and the second will first be added to the event loop.',
        id: 0,
      },
      { text: 'Practically, there is no difference', id: 1 },
      {
        text:
          'When `fn` is called on the second option, it will be called with an `event` argument',
        id: 2,
      },
      { text: 'The second option is more performant', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md#trying-to-save-callbacks',
    explanation:
      '`setTimeout` is handled by the web API, and once the timer is up, it pushes the callback onto the event loop.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var a = 1
setTimeout(() => console.log(a), 0)
for (let i = 0; i < 1000; i++) { }
a++
${'```'}
    `,
    questionId: 'Eng4KzwkESa93yv0aPmG',
    shouldBeRandomized: true,
    answers: [
      { text: '`1`', id: 0 },
      { text: '`2`', id: 1 },
      { text: '`undefined`', id: 2 },
      { text: '`ReferenceError`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md#trying-to-save-callbacks',
    explanation:
      "The callback gets pushed onto the event loop immediately, but it doesn't run until the call stack is empty which occurs after the for loop and after `a++` is executed.",
  },
];
export default Ch2Questions;
