const Ch2Questions = [
  {
    question:
      'True of False: Once a JS array is assigned data of a particular type, it can only hold data of that type.',
    orderedById: true,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md#arrays',
    explanation:
      'In JS, arrays are simple containers that can hold any combination of types, including all primitive types, objects, other arrays, and even functions.',
  },
  {
    question: 'What is the output of console.log(typeof NaN)?',
    orderedById: true,
    answers: [
      { text: 'number', id: 0 },
      { text: 'NaN', id: 1 },
      { text: 'undefined', id: 2 },
      { text: 'null', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md#special-numbers',
    explanation: `An oddity of JavaScript, the property NaN ("not a number") is actually of type "number".`,
  },
];

export default Ch2Questions;
