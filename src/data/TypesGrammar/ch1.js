const Ch1Questions = [
  {
    question: 'Which is a valid JavaScript type for numerical data?',
    questionId: 'pMUUWcGwln5koHSPych2',
    shouldBeRandomized: true,
    answers: [
      { text: 'int', id: 0 },
      { text: 'short', id: 1 },
      { text: 'number', id: 2 },
      { text: 'float', id: 3 },
      { text: 'long', id: 4 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch1.md#values-as-types',
    explanation:
      'Unlike many coding languages, JavaScript has only one primitve numerical type: `number`. This is used for both integers and floating point values.',
  },
  {
    question: 'What is the output of `console.log(typeof [])`?',
    questionId: '3oBINeHwaPBjQSxrBsAn',
    shouldBeRandomized: true,
    answers: [
      { text: 'undefined', id: 0 },
      { text: 'object', id: 1 },
      { text: 'list', id: 2 },
      { text: 'array', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch1.md#built-in-types',
    explanation:
      'In JavaScript, arrays are a type of `object`. There is no "array" type.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var a = null;

console.log(!a && typeof a === "object");
${'```'}  
    `,
    questionId: 'JusfVHYhYwoarDGU2aMo',
    shouldBeRandomized: false,
    answers: [
      { text: '`true`', id: 0 },
      { text: '`false`', id: 1 },
      { text: '`undefined`', id: 2 },
      { text: '`TypeError`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch1.md#built-in-types',
    explanation: `It would have been nice if \`typeof null\` returned "null", but this original bug in JS has persisted for nearly two decades, and will likely never be fixed because there's too much existing web content that relies on its buggy behavior that "fixing" the bug would create more "bugs" and break a lot of web software.`,
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
function a(b, c) {
  var d = 5
  return d + 1
};

console.log(a.length);
${'```'}  
    `,
    questionId: 'RVhgX62FTiCZoX7gswGE',
    shouldBeRandomized: false,
    answers: [
      { text: '`undefined`', id: 0 },
      { text: '`TypeError`', id: 1 },
      { text: '`1`', id: 2 },
      { text: '`2`', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch1.md#built-in-types',
    explanation:
      'The function object has a length property set to the number of formal parameters it is declared with.',
  },
  {
    question:
      'What is a good way to safely check if a variable has been declared?',
    questionId: 'vcCj5uxXMet4CnxLW96V',
    shouldBeRandomized: true,
    answers: [
      { text: '`if (a)...`', id: 0 },
      { text: '`if(typeof a !== "undefined")...`', id: 1 },
      { text: '`if(a !== undefined)...`', id: 2 },
      { text: '`if(a.isDefined())...`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch1.md#typeof-undeclared',
    explanation:
      'All of the other options will throw an error if `a` has not been declared.',
  },
];

export default Ch1Questions;
