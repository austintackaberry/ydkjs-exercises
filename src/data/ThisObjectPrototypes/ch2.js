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
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md#chapter-2-this-all-makes-sense-now',
    explanation: `While knowing where the function is called is helpful, the most important part is the HOW. Was it called with \`call\` or \`apply\`? Or with the \`new\` keyword? Was it called via an object? Or was it called regularly?`,
  },
  {
    question: `What is a **call-site**?`,
    questionId: 'IKfGQeBvEMLy0pzJPFkZ',
    shouldBeRandomized: true,
    answers: [
      {
        text: `The location in code where a function is executed`,
        id: 0,
      },
      { text: `The location in code where a function is declared`, id: 1 },
      { text: 'The location of the server that serves your content', id: 2 },
      { text: 'The location of your code in memory', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md#call-site',
    explanation: `The call-site is simply where a function is called.`,
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
'use strict'
function foo() {
  var a = 'pony'
  console.log( this.a );
}

var a = 'rocket ship';

foo();
${'```'}
    `,
    questionId: 'LVwS4msdB01i9FRa5HT8',
    shouldBeRandomized: false,
    answers: [
      {
        text: `undefined`,
        id: 0,
      },
      { text: `TypeError`, id: 1 },
      { text: 'pony', id: 2 },
      { text: 'rocket ship', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md#default-binding',
    explanation: `When not in strict mode, default binding rules are valid which means \`this\` would be the global object, and the answer would be 'rocket ship'. However, since we are in strict mode, default binding rules do not apply, so \`this\` is undefined. Accessing a property of \`undefined\` results TypeError.`,
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
'use strict'

function printName() {
  console.log( this.name );
}

var person = {
  name: 'Ralphie',
  printName: printName
};

person.printName();

let name = 'Joanna'
${'```'}
    `,
    questionId: '8YPCKMUjaKTqk2UnNWSO',
    shouldBeRandomized: false,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`null`', id: 1 },
      {
        text: `\`"Joanna"\``,
        id: 2,
      },
      { text: `\`"Ralphie"\``, id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md#implicit-binding',
    explanation:
      '`person` has a key `printName` with a value of `printName` which refers to the function `printName`. When `person.printName()` is executed, the function reference that is stored in `person.printName` (`printName`) is executed within the `person` context, thus the implicit binding rules say that `this` is `person`.',
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
var firstName = 'Joanna';
function printFirstName() {
  console.log(this.firstName);
}

var person = {
  firstName: 'Ralphie',
  printfirstName: printFirstName(),
};
${'```'}
    `,
    questionId: 'njma2dew2w1jb06jFxEG',
    shouldBeRandomized: false,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`null`', id: 1 },
      {
        text: `\`"Joanna"\``,
        id: 2,
      },
      { text: `\`"Ralphie"\``, id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md#implicit-binding',
    explanation:
      'This one is a bit tricky. When `printFirstName()` is executed, the call-site actually does not have a context object because the call-site does not use the `person` context to reference the function. The default binding rule is therefore used to explain why the `this` falls back to the global object where there is a `var` with `firstName` of `"Joanna"`.',
  },
];
export default Ch2Questions;
