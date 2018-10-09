const Ch6Questions = [
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
