const Ch1Questions = [
  {
    question: 'Which is a valid JavaScript type for numerical data?',
    orderedById: true,
    answers: [
      { text: 'int', id: 0 },
      { text: 'short', id: 1 },
      { text: 'number', id: 2 },
      { text: 'float', id: 3 },
      { text: 'long', id: 4 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md#values-as-types',
    explanation:
      'Unlike many coding languages, JavaScript has only one primitve numerical type: `number`. This is used for both integers and floating point values.',
  },
  {
    question: 'What is the output of `console.log(typeof [])`?',
    orderedById: true,
    answers: [
      { text: 'undefined', id: 0 },
      { text: 'object', id: 1 },
      { text: 'list', id: 2 },
      { text: 'array', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md#built-in-types',
    explanation:
      'In JavaScript, arrays are a type of `object`. There is no "array" type.',
  },
];

export default Ch1Questions;
