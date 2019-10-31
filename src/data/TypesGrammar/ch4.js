const Ch4Questions = [
  {
    question:
      'Everyone has more or less agreed that implicit coercion is a good feature in JavaScript',
    questionId: 'OV9QsXmtCrQQipouXzhV',
    shouldBeRandomized: false,
    answers: [{ text: 'True', id: 0 }, { text: 'False', id: 1 }],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch4.md#chapter-4-coercion',
    explanation: `There are rules for linters to disallow implicit coercion because it can happen unexpectedly if the developer isn't careful. Implicit coercion is a valuable tool once you fully understand how it works.`,
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
var a = '4';
var b = '2';
console.log(a + b);
${'```'}
    `,
    questionId: 'SXUXXeo97joh0BieYx2s',
    shouldBeRandomized: true,
    answers: [
      { text: '`"42"`', id: 0 },
      { text: '`6`', id: 1 },
      { text: '`"6"`', id: 2 },
      { text: '`42`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch4.md#implicit-coercion',
    explanation: '`+` means concatenation when any of the operands are strings',
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
var a = {};

if (a) {
  console.log(a);
}
${'```'}
    `,
    questionId: 'mCQSAuetDK2s6sxgV8rr',
    shouldBeRandomized: true,
    answers: [
      { text: 'Nothing is actually logged to the console', id: 0 },
      { text: '`{}`', id: 1 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch4.md#falsy-values',
    explanation: 'There is no such thing as a falsy object in JavaScript',
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
console.log(40 + 0 + '5')
${'```'}
    `,
    questionId: 'TK5eSs8QDufrIWgr4Xd6',
    shouldBeRandomized: true,
    answers: [
      { text: '`45`', id: 0 },
      { text: '`"405"`', id: 1 },
      { text: '`"45"`', id: 2 },
      { text: '`405`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/',
    explanation: '`+` means concatenation when any of the operands are strings',
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
var a = [5,2,6,0,9]

a.forEach(num => {
  if (num) {
    // ...do stuff
  }
  else {
    console.log(num)
  }
})
${'```'}
    `,
    questionId: 'ZkoD5dNNo8SGQIhiSApZ',
    shouldBeRandomized: true,
    answers: [
      { text: 'Nothing is logged to the console', id: 0 },
      { text: '`0`', id: 1 },
      { text: '`5` `2` `6` `0` `9`', id: 2 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/',
    explanation:
      "`0` is actually falsy which can be unexpected. If you have a list of values and you want to make sure none of them are `undefined` or `null` you can't just check if they are truthy.",
  },
];

export default Ch4Questions;
