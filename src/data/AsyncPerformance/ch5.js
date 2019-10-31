const Ch5Questions = [
  {
    question: `Why do we care about asynchrony? Why not make everything synchronous?`,
    questionId: 'fSSc7ml4RBdQfi3VnoUO',
    shouldBeRandomized: true,
    answers: [
      { text: 'That would make our code less readable', id: 0 },
      { text: 'For performance reasons', id: 1 },
      {
        text: 'It would not be possible to make everything synchronous',
        id: 2,
      },
      { text: 'JavaScript is moving towards removing asynchrony', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch5.md#chapter-5-program-performance',
    explanation:
      'Our code would be very slow if all of our requests were blocking.',
  },
  {
    question: `What is a web worker?`,
    questionId: 'RX9UbMNWGimlnv8cm0eZ',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'It is a function that is required in order to make PWAs',
        id: 0,
      },
      {
        text:
          'A separate instance of the JavaScript engine allowing task parallelism',
        id: 1,
      },
      { text: 'A continuous and open connection with a server', id: 2 },
      {
        text:
          'An ES7 feature that allows functions to not have run-to-completion behavior',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch5.md#web-workers',
    explanation:
      'An environment like your browser can easily provide multiple instances of the JavaScript engine, each on its own thread, and let you run a different program in each thread. Each of those separate threaded pieces of your program is called a "(Web) Worker." This type of parallelism is called "task parallelism," as the emphasis is on splitting up chunks of your program to run in parallel.',
  },
  {
    question: `How do workers share scope or resources with each other or the main program?`,
    questionId: 'yv2ZLXD01gYvdeHfWOes',
    shouldBeRandomized: true,
    answers: [
      { text: 'Via the `postMessage` API', id: 0 },
      { text: 'Via the global scope', id: 1 },
      { text: 'Via closures', id: 2 },
      { text: 'Via lexical scoping', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch5.md#web-workers',
    explanation:
      'Workers do not share any scope or resources with each other or the main program -- that would bring all the nightmares of threaded programming to the forefront -- but instead have a basic event messaging mechanism connecting them called the `postMessage` API.',
  },
  {
    question: `What is **not** a common use for a web worker?`,
    questionId: '7eg8p9TGqQ8TuMwYzmUv',
    shouldBeRandomized: true,
    answers: [
      { text: 'Processing intensive math calculations', id: 0 },
      { text: 'Sorting large data sets', id: 1 },
      { text: 'High-traffic network communications', id: 2 },
      { text: 'DOM diffing algorithm', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch5.md#worker-environment',
    explanation: 'Web workers do not have access to the DOM',
  },
  {
    question: `Shared Workers allow multiple instances of an app to share the same web worker`,
    questionId: 'JUHvf1PXk9rQmgxaqHhq',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch5.md#shared-workers',
    explanation:
      'If your site or app allows for loading multiple tabs of the same page (a common feature), you may very well want to reduce the resource usage of their system by preventing duplicate dedicated Workers and using a Shared Worker.',
  },
];
export default Ch5Questions;
