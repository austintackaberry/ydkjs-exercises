const Ch4Questions = [
  {
    question: `What will be logged to the console upon execution of the code below:
${'```js'}
a = 3
var a;
console.log(a)
${'```'}
    `,
    questionId: 'zdBP0pVoTJgenPKexwC9',
    shouldBeRandomized: true,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`null`', id: 1 },
      { text: '`3`', id: 2 },
      { text: '`a`', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch4.md#chicken-or-the-egg',
    explanation: `\`var a\` is "hoisted" before the other lines of code are executed, thus by the time the engine executes the assignment and console logging, \`var a\` will have been declared and available.`,
  },
  {
    question: `What will be logged to the console upon execution of the code below:
${'```js'}
console.log(a)
var a = 3;
${'```'}
    `,
    questionId: 'VPvyB4tV4uYkltN22SLr',
    shouldBeRandomized: true,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`null`', id: 1 },
      { text: '`3`', id: 2 },
      { text: '`a`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch4.md#chicken-or-the-egg',
    explanation: `\`var a\` is "hoisted" before the other lines of code are executed. By the time the engine executes the \`console.log\`, \`var a\` will have been declared, but the definition will not have occurred.`,
  },
  {
    question: `What will be logged to the console upon execution of the code below:
${'```js'}
foo();
var foo = function() {
    console.log('hello')
};
${'```'}
    `,
    questionId: 'lR9A2ctkJdYAxPMrOK9k',
    shouldBeRandomized: true,
    answers: [
      { text: "`'hello'`", id: 0 },
      { text: '`ReferenceError`', id: 1 },
      { text: '`TypeError`', id: 2 },
      { text: '`undefined`', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch4.md#the-compiler-strikes-again',
    explanation: `\`var foo\` is "hoisted" but the function is not. By the time the engine executes the first line, \`var foo\` will have been declared, so it is not a \`ReferenceError\`. We try to call it as a function, but its value is undefined which leaves us with a \`TypeError\`.`,
  },
  {
    question: `What will be logged to the console upon execution of the code below:
${'```js'}
foo();
var foo;
function foo() {
	console.log( 1 );
}
foo = function() {
	console.log( 2 );
};
${'```'}
    `,
    questionId: 'XNrKSbCikeWmmcmPN37Q',
    shouldBeRandomized: false,
    answers: [
      { text: '`1`', id: 0 },
      { text: '`2`', id: 1 },
      { text: '`1` and then `2`', id: 2 },
      { text: '`2` and then `1`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch4.md#functions-first',
    explanation: `Because functions are "hoisted" before variables, \`function foo\` gets hoisted before \`var foo\`, and ultimately \`var foo\` is ignored.`,
  },
  {
    question: `Declarations themselves are hoisted, but assignments, even assignments of function expressions, are not hoisted.
    `,
    questionId: 'SAaSc02839X47tNaXect',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch4.md#review-tldr',
    explanation: `The compiler does a first pass through your code to determine lexical scope. This is what is known as "hoisting".`,
  },
];
export default Ch4Questions;
