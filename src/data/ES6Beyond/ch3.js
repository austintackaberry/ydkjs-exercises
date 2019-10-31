const Ch3Questions = [
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var arr = [1,2,3];

var it = arr[Symbol.iterator]();

console.log(it.next().value);
${'```'}
    `,
    questionId: 'KamNLrqJT5ImdRfQ35nr',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`1`',
        id: 0,
      },
      { text: '`undefined`', id: 1 },
      {
        text: '`TypeError`',
        id: 2,
      },
      {
        text: '`ReferenceError`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#next-iteration',
    explanation:
      'Each time the method located at `Symbol.iterator` (see Chapters 2 and 7) is invoked on this `arr` value, it will produce a new fresh iterator. Most structures will do the same, including all the built-in data structures in JS.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var a = [1,2,3,4,5];

function foo(x,y,z,w,p) {
  console.log( x + y + z + w + p );
}

foo( ...a );
${'```'}
    `,
    questionId: 'plIwdAz8DJRNR1o8PpD6',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`15`',
        id: 0,
      },
      { text: '`NaN`', id: 1 },
      {
        text: '`TypeError`',
        id: 2,
      },
      {
        text: '`SyntaxError`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#iterator-consumption',
    explanation: 'The `...` spread operator fully exhausts an iterator.',
  },
  {
    question: `Which of the following is not true of ES6 modules?`,
    questionId: 'gaZ7o3VlCIMcxmIjrIk0',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'You cannot have multiple modules in a file',
        id: 0,
      },
      {
        text:
          "Once you define statically what all the top-level exports are on your module's public API, those cannot be amended later.",
        id: 1,
      },
      {
        text:
          'There is only one instance of the module, which maintains its state. Every time you import that module into another module, you get a reference to the one centralized instance.',
        id: 2,
      },
      {
        text: 'ES6 modules are still experimental and should not be used',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#moving-forward',
    explanation:
      'Modules are no different from other ES6 features in that they should be used, but polyfills might be needed for older browsers.',
  },
  {
    question: `What is the difference between importing default exports and named exports?`,
    questionId: 'wRGNTWtsY1C1XfENF28c',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'Named exports are imported as `import { foo } from "foo";`, and default exports are imported as `import foo from "foo";`',
        id: 0,
      },
      {
        text:
          'Named exports are imported as `import foo from "foo";`, and default exports are imported as `import { foo } from "foo";`',
        id: 1,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#importing-api-members',
    explanation:
      'As the name suggests, the default export is the default export for that module, whereas named exports need to be imported by name.',
  },
  {
    question: `You cannot put either an \`import\` or \`export\` inside an \`if\` conditional.`,
    questionId: 'SVWaRgCKQkULReUt92ct',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0,
      },
      { text: 'False', id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#the-new-way',
    explanation: 'They must appear outside of all blocks and functions.',
  },
];

export default Ch3Questions;
