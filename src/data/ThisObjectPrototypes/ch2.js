const Ch2Questions = [
  {
    question: `____ a function is called matters the most when determining the value of \`this\`.`,
    questionId: 'n4iaUrZcvCkLaNuqbOrR',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'HOW',
        id: 0,
      },
      { text: 'WHY', id: 1 },
      { text: 'WHEN', id: 2 },
      { text: 'WHAT', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md#chapter-2-this-all-makes-sense-now',
    explanation: `While knowing where the function is called is helpful, the most important part is the HOW. Was it called with \`call\` or \`apply\`? Or with the \`new\` keyword? Was it called via an object? Or was it called regularly?`,
  },
];
export default Ch2Questions;
