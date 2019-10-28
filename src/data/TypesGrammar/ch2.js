const Ch2Questions = [
  {
    question:
      'Once an array is assigned data of a particular type, it can only hold data of that type.',
    questionId: 'qc3GXTSatbgIGcGRV3w1',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md#arrays',
    explanation:
      'In JS, arrays are simple containers that can hold any combination of types, including all primitive types, objects, other arrays, and even functions.',
  },
  {
    question: 'What is the output of `console.log(typeof NaN)`?',
    questionId: 'fPLg0latZ9YhufnLb8Jq',
    shouldBeRandomized: true,
    answers: [
      { text: '`"number"`', id: 0 },
      { text: '`NaN`', id: 1 },
      { text: '`undefined`', id: 2 },
      { text: '`null`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md#special-numbers',
    explanation:
      'An oddity of JavaScript, the property `NaN` ("not a number") is actually of type "number".',
  },
  {
    question: 'What is `0.1 + 0.2 === 0.3`?',
    questionId: '4jatWiEr1aVxmEVDH3OK',
    shouldBeRandomized: false,
    answers: [{ text: '`true`', id: 0 }, { text: '`false`', id: 1 }],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md#small-decimal-values',
    explanation:
      'The most (in)famous side effect of using binary floating-point numbers (which, remember, is true of all languages that use IEEE 754 -- not just JavaScript as many assume/pretend) is that representations of decimals are not exact.',
  },
  {
    question: 'JavaScript `string`s are immutable',
    questionId: 'vzm8C9Tgio0bfyCbB0TX',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md#strings',
    explanation:
      'You might have thought of string methods as mutating the original string. However, all of the string methods that alter its contents must create and return new strings.',
  },
  {
    question: 'What is `1 / 0` in JavaScript?',
    questionId: 'w6xgQc4j8bOgnLmda8ds',
    shouldBeRandomized: true,
    answers: [
      { text: '`Infinity`', id: 0 },
      { text: '`TypeError`', id: 1 },
      { text: '`undefined`', id: 2 },
      { text: '`1`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md#infinities',
    explanation:
      'In JS, this operation is well-defined and results in the value Infinity (aka Number.POSITIVE_INFINITY).',
  },
];

export default Ch2Questions;
