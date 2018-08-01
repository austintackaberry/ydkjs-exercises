const Ch5Questions = [
  {
    question: `What is closure?`,
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'The ability of a function to access its lexical scope when that function is executing outside its lexical scope.',
        id: 0,
      },
      { text: 'When a function is used as a callback', id: 1 },
      { text: 'When a function is nested within another function', id: 2 },
      {
        text:
          'When a function returns another function, it is said to have a closure over the second function',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md#nitty-gritty',
    explanation: `Another way to explain closure is to say that functions always have access to their lexical scope, no matter how or when they are called.`,
  },
];
export default Ch5Questions;
