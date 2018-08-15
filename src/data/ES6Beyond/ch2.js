const Ch2Questions = [
  {
    question:
      'In the following code, `function foo (x=20) {...}`, what does "x=20" accomplish?',
    questionId: 'B981780c3855a89e0073',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'It assigns *x* a default value of 20 if the argument passed to the function is *undefined*.',
        id: 0,
      },
      { text: 'Any value passed to the function gets changed to 20.', id: 1 },
      {
        text: 'The function will only accept arguments which are equal to 20.',
        id: 2,
      },
      {
        text:
          'It assigns *x* a default value of 20 if the argument passed to the function is "falsy".',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/ch2.md#default-parameter-values',
    explanation:
      'In ES6+, you can provide a default value for a function parameter. The default value is used if the argument is *undefined* (including if no argument is passed).  It is not used for other falsy values (i.e. 0, NaN, an empty string, etc.).',
  },
];

export default Ch2Questions;
