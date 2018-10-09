const Ch6Questions = [
  {
    question: `What is the main fundamental concept of Delegation-Oriented Design in comparison to the traditional Object-Oriented Design?`,
    questionId: '8D4P9iGWn4dvo4nV9AvY',
    shouldBeRandomized: true,
    answers: [
      {
        text: `There is no idea of parent and child, just object linkages`,
        id: 0,
      },
      {
        text: `Delegation-Oriented Design involves explicit and implicit mixins`,
        id: 1,
      },
      { text: 'It bridges the gap with the help of ES6 classes', id: 2 },
      { text: 'Functions are delegated as objects', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md#towards-delegation-oriented-design',
    explanation: `Fundamentally, the prototype chain does not have a concept of "copying" or "parent creating child". All it does is chain objects together.`,
  },
  {
    question: `In OLOO design, shadowing is a helpful tool used to make API design more robust`,
    questionId: '9NmJ3HhcsvYsjDk240D7',
    shouldBeRandomized: false,
    answers: [
      {
        text: `True`,
        id: 0,
      },
      { text: `False`, id: 1 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md#delegation-theory',
    explanation: `Having name collisions creates awkward/brittle syntax to disambiguate references (see Chapter 4), and we want to avoid that if we can.`,
  },
  {
    question: `In general, with \`[[Prototype]]\` delegation involved, you want state to be on the delegators, not on the delegate`,
    questionId: 'YKfeed7X8PeaP3FqAOA2',
    shouldBeRandomized: false,
    answers: [
      {
        text: `True`,
        id: 0,
      },
      { text: `False`, id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md#delegation-theory',
    explanation: `In OOD, it is easy to relatively access the state of the parent. In OLOO, this is not the case. There is no easy way to specifically access state relatively, so it makes sense to hold state on the delegators.`,
  },
  {
    question: `If you make B linked to A, and then try to link A to B, you will get an error.`,
    questionId: 'ecm8D9c10bwlHIQcVqby',
    shouldBeRandomized: false,
    answers: [
      {
        text: `True`,
        id: 0,
      },
      { text: `False`, id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md#mutual-delegation-disallowed',
    explanation: `You cannot create a cycle where two or more objects are mutually delegated (bi-directionally) to each other.`,
  },
];

export default Ch6Questions;
