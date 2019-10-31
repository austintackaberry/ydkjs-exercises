const Ch3Questions = [
  {
    question: `What is logged to the console after the following code is executed:
${'```js'}
var a = new String( "abc" );
console.log(typeof a)
${'```'}
    `,
    questionId: '5eI0FMHDy4XEeOkzN7Uj',
    shouldBeRandomized: true,
    answers: [
      { text: '`"object"`', id: 0 },
      { text: '`"string"`', id: 1 },
      { text: '`"function"`', id: 2 },
      { text: '`"class"`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch3.md#chapter-3-natives',
    explanation:
      'The result of the constructor form of value creation `(new String("abc"))` is an object wrapper around the primitive (`"abc"`) value. Importantly, `typeof` shows that these objects are not their own special types, but more appropriately they are subtypes of the `object` type.',
  },
  {
    question: 'Which native was added in ES6?',
    questionId: 'oCrqcim3wMds6djUjgk5',
    shouldBeRandomized: true,
    answers: [
      { text: '`Symbol()`', id: 0 },
      { text: '`RegExp()`', id: 1 },
      { text: '`Date()`', id: 2 },
      { text: '`Error()`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch3.md#chapter-3-natives',
    explanation: '`Symbol()` was added in ES6',
  },
  {
    question: 'What purpose do boxing wrappers serve?',
    questionId: '5JeWO9haidtfa3QV6agU',
    shouldBeRandomized: true,
    answers: [
      {
        text: `They allow you to call methods on primitives that aren't objects`,
        id: 0,
      },
      {
        text: 'They give JavaScript objects all of their functionality',
        id: 1,
      },
      {
        text:
          'They are a mechanism for JavaScript engines to improve performance',
        id: 2,
      },
      { text: 'They allow for the use of ES6 classes', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch3.md#boxing-wrappers',
    explanation: `Ever wondered why you can call \`str.length\` or \`str.toUpperCase()\`? Or maybe you just accepted it as fact and didn't think much about it. Primitive types such as \`string\` or \`number\` get automatically wrapped by boxing wrappers as needed which have methods such as \`length\` and \`toUpperCase\`.`,
  },
  {
    question: 'What is "boxing" and "unboxing"?',
    questionId: 'Kni4heV7QP6BbHt2mvJE',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'Boxing is converting from primitive to object wrapper, and unboxing is converting from object wrapper to primitive.',
        id: 0,
      },
      {
        text:
          'Boxing is converting from object wrapper to primitive, and unboxing is converting from primitive to object wrapper.',
        id: 1,
      },
      {
        text:
          'Boxing is temporarily coercing one primitive type to another, unboxing is coercing it back to its original type',
        id: 2,
      },
      {
        text:
          'Boxing is merging of your JavaScript files into one, and unboxing is using source maps to undo the merging',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch3.md#boxing-wrappers',
    explanation:
      'Boxing is wrapping a primitive value, and unboxing is extracting the primitive value from a wrapper. Boxing/Unboxing can be done explicitly or implicitly.',
  },
  {
    question:
      '`var a = new String( "abc" );` is more performant than `var a = "abc";`',
    questionId: 'GJY8a7aQDwO0E90oeJtv',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch3.md#boxing-wrappers',
    explanation: `You might think that it would be more performant to use the object wrapper form, so that the engine doesn't have to wrap the primitive. However, engines have been optimizing based on the assumption that almost everyone constructs using primitives, thus they are actually more performant.`,
  },
];

export default Ch3Questions;
