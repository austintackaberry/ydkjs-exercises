const Ch1Questions = [
  {
    question: `When \`this\` is used in a function, it refers to that function itself.`,
    questionId: 'vShYeb3HLWDUmsDGI6m3',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0,
      },
      { text: 'False', id: 1 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch1.md#confusions',
    explanation: `\`this\` can refer to many different elements depending on how the function is called.`,
  },
  {
    question: `When \`this\` is used in a function, it refers to that function's scope.`,
    questionId: 'tm6ZdFGdHdysXk5QaBvq',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0,
      },
      { text: 'False', id: 1 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch1.md#its-scope',
    explanation: `\`this\` can refer to many different elements depending on how the function is called.`,
  },
  {
    question: `Why is \`this\` helpful?`,
    questionId: 'xSQLd5HMVCcEaxDBMppV',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          '`this` mechanism provides an elegant way of implicitly "passing along" an object reference, leading to clean API design and easy re-use.',
        id: 0,
      },
      {
        text: `It is generally regarded as bad practice and should not be used`,
        id: 1,
      },
      {
        text: `It allows you to do things in JavaScript that you can't do without it`,
        id: 2,
      },
      {
        text: `It helps filter out less experienced JavaScript developers`,
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch1.md#why-this',
    explanation: `The more complex your usage pattern is, the more clearly you'll see that passing context around as an explicit parameter is often messier than passing around a \`this\` context. `,
  },
  {
    question: `What is logged to the console in the code below:
${'```js'}
function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  var a = 1
  console.log( this.a );
}

foo();   
${'```'}
    `,
    questionId: 'KZIj2gCNtm3T2ceYqaJI',
    shouldBeRandomized: false,
    answers: [
      {
        text: '`undefined`',
        id: 0,
      },
      {
        text: '`null`',
        id: 1,
      },
      {
        text: '`1`',
        id: 2,
      },
      {
        text: '`2`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch1.md#its-scope',
    explanation: `In both uses of the keyword \`this\`, it refers to the global object. Because there is no \`a\` in the global object, it is undefined. `,
  },
  {
    question: `\`this\` is actually a binding that is made when a function is invoked`,
    questionId: 'kfO4HXJNbw3pbZAgKTeK',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0,
      },
      {
        text: `False`,
        id: 1,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch1.md#review-tldr',
    explanation: `Because \`this\` changes depending on HOW the function was called, its value is unknown at the time the function is defined. It is not like lexical scope which is determined at function definition.`,
  },
];
export default Ch1Questions;
