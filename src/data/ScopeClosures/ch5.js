const Ch5Questions = [
  {
    question: `What is closure?`,
    questionId: 'f1j0ZgapoWxgpb3km4Na',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'The ability of a function to access its lexical scope when that function is executing outside its lexical scope.',
        id: 0,
      },
      { text: 'When a function is used as a callback', id: 1 },
      { text: 'When a function is nested within another function', id: 2 },
      {
        text:
          'When a function returns another function, it is said to have a closure over the second function',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md#nitty-gritty',
    explanation: `Another way to explain closure is to say that functions always have access to their lexical scope, no matter how or when they are called.`,
  },
  {
    question: `What is logged to the console after executing the code below:
${'```js'}
var a = 1
function foo() {
  var a = 2;

  function bar() {
    console.log( a );
  }

  return bar;
}

var baz = foo();

baz();
${'```'}
    `,
    questionId: 'NKIiGI5OpsyB79BnF3PB',
    shouldBeRandomized: false,
    answers: [
      {
        text: '`undefined`',
        id: 0,
      },
      { text: '`null`', id: 1 },
      { text: '`1`', id: 2 },
      {
        text: '`2`',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md#nitty-gritty',
    explanation: `\`foo\` returns the function \`bar\` which is assigned to \`baz\`. \`bar\` still has access to a in \`foo\` even after \`foo\` has been called because of closure.`,
  },
];
export default Ch5Questions;
