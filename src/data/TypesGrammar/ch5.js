const Ch5Questions = [
  {
    question: 'What best describes the code, `var a = 3 * 6;`',
    questionId: '29W8dbdao07NYgzzz7LL',
    shouldBeRandomized: true,
    answers: [
      { text: 'It is a statement containing multiple expressions', id: 0 },
      { text: 'It is an expression containing multiple statements', id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch5.md#statements--expressions',
    explanation:
      'Statements are to English sentences as expressions are to English phrases',
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
var a = 42;
var b = a++;
console.log(a + b);
${'```'}
    `,
    questionId: 'GSv67dFUBTnEJc3srokl',
    shouldBeRandomized: true,
    answers: [
      { text: '`85`', id: 0 },
      { text: '`84`', id: 1 },
      { text: '`undefined`', id: 2 },
      { text: '`43`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch5.md#expression-side-effects',
    explanation:
      '`a++` increments `a` by 1, but the return value of `a++` is the previous value of `a`. So when we get to line 3, `a` has a value of `43` and `b` has a value of `42`.',
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
var obj = {
  a: {
    b: "c"
  }
}
console.log(obj.a && obj.a.b)
${'```'}
    `,
    questionId: 'yrdwEyVgpqnGeQZIHUID',
    shouldBeRandomized: false,
    answers: [
      { text: '`"c"`', id: 0 },
      { text: '`true`', id: 1 },
      { text: '`false`', id: 2 },
      { text: '`TypeError`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch5.md#short-circuited',
    explanation:
      "The `&&` operator doesn't actually return `true` if both operands are truthy. It returns the last value. Ever get an error when you try to access `a.length` when `a` is undefined? You could instead try `a && a.length`.",
  },
  {
    question: 'What is Automatic Semicolon Insertion (ASI) in JavaScript?',
    questionId: 'Q9YYAcT3dzDJJ3Qr5QYZ',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'ASI is an "error correction" routine that inserts semicolons to fix parser errors',
        id: 0,
      },
      {
        text:
          'Mechanism that automatically inserts semicolons in the middle of a line if it notices two statements on one line.',
        id: 1,
      },
      {
        text:
          'A deprecated system that used to replace commas with semicolons as needed',
        id: 2,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch5.md#error-correction',
    explanation:
      'There are many opinions on whether semicolons should be used in JavaScript. Per the spec, ASI is an error fixing mechanism which suggests that developers should use semicolons.',
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
var a = b = 1;
var c = 2;
var d = "";
if (a === b || a === b && b === c) {
  d += 'Expression 1 is true. ';
}
if ((a === b || a === b) && b === c) {
  d += 'Expression 2 is true.';
}
console.log(d);
${'```'}
    `,
    questionId: 'Xijvr7OO22EJd6zmJ8AX',
    shouldBeRandomized: false,
    answers: [
      { text: '`"Expression 1 is true. "`', id: 0 },
      { text: '`"Expression 2 is true."`', id: 1 },
      { text: '`"Expression 1 is true. Expression 2 is true."`', id: 2 },
      { text: '`""`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch5.md#operator-precedence',
    explanation:
      'You might expect JavaScript expressions to work left to right with the exception that everything in parentheses gets executed first. That is not the case. You might know that, in math, the "*" operator executes before "+". So, 1 + 1 * 5 = 6, not 7. Similarly, in JavaScript, the `&&` operator executes before `||`.',
  },
];

export default Ch5Questions;
