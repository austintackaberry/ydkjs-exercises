const Ch3Questions = [
  {
    question: 'What is `typeof []`?',
    questionId: '9nHFYpQ9Zewn3efPkDh8',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`"array"`',
        id: 0,
      },
      { text: '`"object"`', id: 1 },
      { text: '`SyntaxError`', id: 2 },
      { text: '`NaN`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch3.md#type',
    explanation: `Arrays are also a form of objects, with extra behavior. The organization of contents in arrays is slightly more structured than for general objects.`,
  },
  {
    question: 'What is `typeof function () {}`?',
    questionId: '1ELRUPuXgJFmPL1ANffo',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`"function"`',
        id: 0,
      },
      { text: '`"object"`', id: 1 },
      { text: '`"array"`', id: 2 },
      { text: '`"undefined"`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch3.md#type',
    explanation:
      'Functions are technically callable objects, thus they are a type of an object. `typeof function () {}` will return "function".',
  },
  {
    question: 'What is `String` in JavaScript?',
    questionId: 'NrodGoGYdoWma1olCoih',
    shouldBeRandomized: false,
    answers: [
      {
        text: `A class for constructing strings`,
        id: 0,
      },
      { text: `One of the 5 simple primitive types in JavaScript`, id: 1 },
      { text: 'A callable object that has many properties/methods', id: 2 },
      { text: 'None of the above', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch3.md#built-in-objects',
    explanation:
      'strings in JavaScript are immutable and have no properties/methods. When you run `str.length` or `str.charAt(3)`, `str` is coerced into the object `String` which has properties `length` and method `charAt`.',
  },
  {
    question: 'Where is the value `2` stored in `var obj = {a: 2}`?',
    questionId: '1yQ856CkKjE1gKgQp5vq',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'in `obj`',
        id: 0,
      },
      { text: 'in `obj.a`', id: 1 },
      { text: 'somewhere else that depends on the implementation', id: 2 },
      { text: 'in `window`', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch3.md#contents',
    explanation:
      'Values in key-value pairs are not actually stored in the object. The object stores the key and a reference to the value. Exactly how/where it is stored is dependent on the engine implementation.',
  },
  {
    question: `In objects, property names are always strings`,
    questionId: 'mcF2sHTruzTxkLT1NlAw',
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
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch3.md#contents',
    explanation: `If you use any other value besides a string (primitive) as the property, it will first be converted to a string. This even includes numbers, which are commonly used as array indexes, so be careful not to confuse the use of numbers between objects and arrays.`,
  },
];

export default Ch3Questions;
