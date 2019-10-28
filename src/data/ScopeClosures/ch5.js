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
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md#nitty-gritty',
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
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md#nitty-gritty',
    explanation: `\`foo\` returns the function \`bar\` which is assigned to \`baz\`. \`bar\` still has access to a in \`foo\` even after \`foo\` has been called because of closure.`,
  },
  {
    question: `When is closure observed?`,
    questionId: 'Y978oS5NQMr0PHld59po',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'When functions are passed around as variables and then executed',
        id: 0,
      },
      { text: 'When `this` is used in a function', id: 1 },
      { text: 'When shadowing occurs', id: 2 },
      {
        text: 'When arrow functions are executed',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md#nitty-gritty',
    explanation: `Because closure is just a function accessing lexical scope when it's executed outside of its lexical scope, that can only happen if the function is passed around as a variable`,
  },
  {
    question: `Is closure observed when the code below is executed:
${'```'}
function wait(message) {

  setTimeout( function timer(){
    console.log( message );
  }, 1000 );

}

wait( "Hello!" );
${'```'}
    `,
    questionId: 'N73X0YmuT2uB6tOnN8Sx',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'Yes',
        id: 0,
      },
      { text: 'No', id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md#now-i-can-see',
    explanation: `\`wait\` gets executed immediately, but \`timer\` executes every 1000ms, and it still can access \`message\`.`,
  },
  {
    question: `What happens when this code is executed:
${'```'}
for (var i=1; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i );
  }, i*1000 );
}
${'```'}
    `,
    questionId: 'ygptM8kOJlCNPvp9iU7E',
    shouldBeRandomized: true,
    answers: [
      {
        text: '6 is printed 5 times all at 6 seconds',
        id: 0,
      },
      { text: '6 is printed 5 times at one second intervals', id: 1 },
      { text: '1, 2, 3, 4, 5 are printed all at 6 seconds', id: 2 },
      { text: '1, 2, 3, 4, 5 are printed each at one second intervals', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md#loops-closure',
    explanation: ` \`setTimeout\` is executed immediately which means the \`i\` in \`i*1000\` is what you would expect. However, \`timer\` does not get executed immediately. By the time \`timer\` is executed, the loop is finished, and \`i\` has a value of 6.`,
  },
];
export default Ch5Questions;
