const Ch1Questions = [
  {
    question: 'Transpiling is transforming your ES6+ code into equivalent code that works in ES5 environments.',
    questionId: 'jh0U8Fc3fFL9EFUiH5bL',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0
      },
      {
        text: 'False',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch1.md#transpiling',
    explanation: 'The idea behind a technique called transpiling (transformation + compiling) is to use a special tool to transform your ES6 code into equivalent (or close!) matches that work in ES5 environments.'
  },
  {
    question: `What are polyfills?`,
    questionId: '75UiJmfNC9vbygun85TI',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'A pattern for defining equivalent behavior from a newer environment into an older environment, when possible.',
        id: 0,
      },
      { text: '3rd party libraries you use in your code base', id: 1 },
      {
        text: 'Objects that contain multiple functions',
        id: 2,
      },
      {
        text:
          'A new feature of ES6 that provides syntactic sugar on top of functions',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch1.md#shimspolyfills',
    explanation:
      'Transpiling with polyfills allows you to develop using the latest JavaScript APIs without worrying about breaking your app in certain browsers.',
  },
  {
    question: 'In general, new APIs cannot be polyfilled, but syntax often can be.',
    questionId: 'WFC6ZEVu75DZgLlPOSSI',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0
      },
      {
        text: 'False',
        id: 1
      }
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch1.md#shimspolyfills',
    explanation: 'Not all new ES6 features need a transpiler. Polyfills (aka shims) are a pattern for defining equivalent behavior from a newer environment into an older environment, when possible. Syntax cannot be polyfilled, but APIs often can be.'
  }
];

export default Ch1Questions;
