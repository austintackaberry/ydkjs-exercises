const Ch2Questions = [
  {
    question: 'When is scoping determined in JavaScript?',
    questionId: 'sHdc0pwtUUaKAEQPErQo',
    shouldBeRandomized: true,
    answers: [
      { text: 'At author-time', id: 0 },
      { text: 'At run-time', id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch2.md#lex-time',
    explanation: `In JavaScript, scoping is lexical. It is based on where variables and blocks of scope are authored, by you, at write time, and thus is (mostly) set in stone by the time the lexer processes your code.`,
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
function foo(a) {
    var b = a * 2;
    function bar(c) {
        console.log( a, b, c );
    }
    bar(b * 3);
}
foo( 2 );
${'```'}
    `,
    questionId: '2CAjGHEG3DvpmjgVje0F',
    shouldBeRandomized: true,
    answers: [
      { text: '`2 4 12`', id: 0 },
      { text: '`undefined undefined undefined`', id: 1 },
      { text: '`2 4 undefined`', id: 2 },
      { text: '`ReferenceError`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch2.md#look-ups',
    explanation: `\`c\` is scoped to \`bar\`, \`a\` and \`b\` are scoped to \`foo\`. \`bar\` looks for \`a\` and \`b\` in its local scope, but can't find it, so checks its outer scope, \`foo\`, where it finds variables \`a\` and \`b\`.  \`bar\` looks for \`c\` in its local scope, and finds it.`,
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
function foo() {
    const a = 2
    function bar() {
        console.log(a);
    }
    bar();
}
const a = 1
foo();
${'```'}
    `,
    questionId: 'DpWaV7KlSdyHzU7eg2UY',
    shouldBeRandomized: false,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`null`', id: 1 },
      { text: '`1`', id: 2 },
      { text: '`2`', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch2.md#lex-time',
    explanation: `\`a\` is scoped to \`foo\`. \`bar\` looks for \`a\` in its local scope, but can't find it, so checks its outer scope, \`foo\`, where it finds \`a\` with a value of 2.`,
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
function bar(b) {
    console.log(a);
}
function foo() {
    const a = 5
    bar(10);
}
foo();
${'```'}
    `,
    questionId: 'JvRx9TArKCYdoBXBzkHN',
    shouldBeRandomized: false,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`ReferenceError`', id: 1 },
      { text: '`5`', id: 2 },
      { text: '`10`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch2.md#lex-time',
    explanation: `\`bar\` does not have \`a\` in its scope, so the engine looks in its outer scope, the global scope. It does not see an \`a\`, so it throws a \`ReferenceError\`.`,
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
let a;
function bar(b) {
    console.log(a);
}
function foo() {
    const a = 7
    bar(9);
}
foo();
${'```'}
    `,
    questionId: 'W03hO2GqPSsPM2rI1Ium',
    shouldBeRandomized: false,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`ReferenceError`', id: 1 },
      { text: '`7`', id: 2 },
      { text: '`9`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch2.md#lex-time',
    explanation: `\`bar\` does not have \`a\` in its scope, so the engine looks in its outer scope, the global scope. It sees \`a\`, but notices that there is no value assigned to it, thus it is \`undefined\`.`,
  },
  {
    question: `What is logged to the console when the following code is executed and the user clicks the button:
${'```js'}
const button = document.querySelector('button');

function bar() {
    const b = 1
    console.log(b)
    button.addEventListener('click', bar)
}
${'```'}
    `,
    questionId: 'MocNDOmweVA02PzqJsOQ',
    shouldBeRandomized: true,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`null`', id: 1 },
      { text: '`1`', id: 2 },
      { text: 'nothing is logged to the console', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch2.md#lex-time',
    explanation: `\`bar\` never gets called, so \`console.log(b)\` is never executed.`,
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
function bar(b) {
    function baz(a) {
        console.log(a)
    }
    const a = 7
}
function foo(a) {
    a = 5;
    baz(a)
}
foo(4);
${'```'}
    `,
    questionId: 'nBTrlZr4sUq0FsDaiToa',
    shouldBeRandomized: true,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`ReferenceError`', id: 1 },
      { text: '`5`', id: 2 },
      { text: '`7`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch2.md#lex-time',
    explanation: `We first call \`foo\` with a value of 4. Inside \`foo\`, \`a\`'s value is changed from 4 to 5. We then try to call \`baz\`. \`baz\` is not in \`foo\`'s scope, so the engine looks at the outer scope, the global scope. It does not find \`baz\`, so it throws a \`ReferenceError\`.`,
  },
  {
    question: `Which two mechanisms in JavaScript can "cheat" lexical scope?`,
    questionId: 'gbwVLppPBTODdzlZeqH3',
    shouldBeRandomized: true,
    answers: [
      { text: '`eval` and `with`', id: 0 },
      { text: '`eval` and `innerHTML`', id: 1 },
      { text: '`this` and `with`', id: 2 },
      { text: '`this` and `eval`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch2.md#review-tldr',
    explanation: ` \`with\` and \`eval\` are the only mechanisms that allow code to be executed dynamically which means they can "cheat" lexical scope.`,
  },
  {
    question: `There are two mechanisms in JavaScript that can "cheat" lexical scope. Why should they not be used?`,
    questionId: 'MtRzxo7UUHil5a6Nfu8c',
    shouldBeRandomized: true,
    answers: [
      { text: 'There is no reason to not use them', id: 0 },
      {
        text:
          'They prevent the engine from using some or all of its optimizations',
        id: 1,
      },
      { text: 'They are not readable', id: 2 },
      { text: 'They are not implemented in all browsers', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch2.md#performance',
    explanation: `If the Engine finds an \`eval(..)\` or \`with\` in the code, it essentially has to assume that all its awareness of identifier location may be invalid, because it cannot know at lexing time exactly what code you may pass to \`eval(..)\` to modify the lexical scope, or the contents of the object you may pass to \`with\` to create a new lexical scope to be consulted.`,
  },
];

export default Ch2Questions;
