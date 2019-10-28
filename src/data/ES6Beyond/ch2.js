const Ch2Questions = [
  {
    question:
      'In the following code, `function foo (x=20) {...}`, what does "x=20" accomplish?',
    questionId: 'B981780c3855a89e0073',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'It assigns *x* a default value of 20 if the argument passed to the function is *undefined*.',
        id: 0,
      },
      { text: 'Any value passed to the function gets changed to 20.', id: 1 },
      {
        text: 'The function will only accept arguments which are equal to 20.',
        id: 2,
      },
      {
        text:
          'It assigns *x* a default value of 20 if the argument passed to the function is "falsy".',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#default-parameter-values',
    explanation:
      'In ES6+, you can provide a default value for a function parameter. The default value is used if the argument is *undefined* (including if no argument is passed).  It is not used for other falsy values (i.e. 0, NaN, an empty string, etc.).',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
{
  const a = 2;
  a = 3;
  console.log(a)
}
${'```'}
    `,
    questionId: 'qE8Cy9hGslTCTCt44Sbn',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`3`',
        id: 0,
      },
      { text: '`TypeError`', id: 1 },
      {
        text: '`2`',
        id: 2,
      },
      {
        text: '`SyntaxError`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#const-declarations',
    explanation:
      "You are not allowed to change the value the variable holds once it's been set, at declaration time. A `const` declaration must have an explicit initialization.",
  },
  {
    question: `With ES6, this is valid JavaScript:
${'```js'}
{ let a = 2, b, c;
  // ..
}
${'```'}
    `,
    questionId: '9vFbLV0HPOB76wPvXkvj',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'True',
        id: 0,
      },
      { text: 'False', id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#block-scoped-declarations',
    explanation:
      'Block scoping is now possible with the `let` and `const` keywords.',
  },
  {
    question: `What variables are scoped within the \`for\` loop:
${'```js'}
let a = 2;

if (a > 1) {
  let b = a * 3;

  for (let i = a; i <= b; i++) {
    let j = i + 10;
  }

  let c = a + b;
}
${'```'}
    `,
    questionId: 'N1MFrOhtcAZzGzddk0jF',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`j`',
        id: 0,
      },
      { text: '`i`, `j`', id: 1 },
      {
        text: '`i`, `j`, `a`, `b`',
        id: 2,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#let-declarations',
    explanation:
      '`j` is clearly scoped to the `for` loop, but `i` is not so obvious. A new `i` is scoped to the block for each iteration.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
{
  const a = [1,2,3];
  a.push( 4 );
  console.log( a );
}
${'```'}
    `,
    questionId: 'msvBBTHtOQSrFGkly2yk',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`[1, 2, 3, 4]`',
        id: 0,
      },
      { text: '`[1, 2, 3]`', id: 1 },
      {
        text: '`TypeError`',
        id: 2,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#const-declarations',
    explanation:
      "Constants are not a restriction on the value itself, but on the variable's assignment of that value. In other words, the value is not frozen or immutable because of `const`, just the assignment of it. If the value is complex, such as an object or array, the contents of the value can still be modified:",
  },
];

export default Ch2Questions;
