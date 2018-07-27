const Ch2Questions = [
  {
    question: 'When is scoping determined in JavaScript?',
    shouldBeRandomized: true,
    answers: [
      { text: 'At author-time', id: 0 },
      { text: 'At run-time', id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch2.md#lex-time',
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
    shouldBeRandomized: true,
    answers: [
      { text: '`2 4 12`', id: 0 },
      { text: '`undefined undefined undefined`', id: 1 },
      { text: '`2 4 undefined`', id: 2 },
      { text: '`error will be thrown`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch2.md#lex-time',
    explanation: `\`c\` is scoped to \`bar\`, \`a\` and \`b\` are scoped to \`foo\`. \`bar\` looks for a and b in its local scope, but can't find it, so checks its outer scope, foo, where it finds variables a and b.  \`bar\` looks for c in its local scope, and finds it.`,
  },
];

export default Ch2Questions;
