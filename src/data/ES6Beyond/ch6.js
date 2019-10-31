const Ch6Questions = [
  {
    question: `What is \`Number.MAX_SAFE_INTEGER\`?`,
    questionId: 'xR2HL1TPvvTd5nmJlfRe',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`2^53 - 1`',
        id: 0,
      },
      { text: '`2^32 - 1`', id: 1 },
      {
        text: '`2^32`',
        id: 2,
      },
      {
        text: '`Infinity`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl: '',
    explanation:
      'Max safe integer is the highest integer that can safely be represented in a JavaScript number value which is `2^53 - 1`.',
  },
  {
    question: `Why would you use \`Number.isNaN()\` instead if \`isNaN()\`?`,
    questionId: 'jt5LRbhdlIRSzpaJLvpo',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'If you are literally checking for the value `NaN`',
        id: 0,
      },
      {
        text:
          'If you want to determine if a value is not of type number, so that does not include `NaN`',
        id: 1,
      },
      {
        text:
          'If you want to determine if a value is not of type number, including `NaN`',
        id: 2,
      },
      {
        text: 'If you want to use the faster, ES6 version',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#numberisnan-static-function',
    explanation:
      "`isNaN()` checks for things that are not a number. So that includes `NaN` and any other value that isn't a number.",
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var obj1 = { a: 4 };
var obj2 = { b: obj1 }
Object.assign(obj1, obj2)
console.log(obj1)
${'```'}
    `,
    questionId: 'Oprc9dKIJ4dDXkoLXLVh',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`{ a: 4 }`',
        id: 0,
      },
      { text: '`{ a: 4, b: obj1 }`', id: 1 },
      {
        text: '`{ a: 4, b: "[Object object]" }`',
        id: 2,
      },
      {
        text: '`TypeError`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#objectassign-static-function',
    explanation:
      '`Object.assign(obj1, obj2)` takes `obj2` and merges it into `obj1`. In the example above, after the merge, the attribute `"b"` actually references `obj1` itself recursively.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
console.log(Array(4).fill(3))
${'```'}
    `,
    questionId: '6yY82qYTLN9uCnqk0IIi',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`[4, 4, 4]`',
        id: 0,
      },
      { text: '`[3, 3, 3, 3]`', id: 1 },
      {
        text: '`TypeError`',
        id: 2,
      },
      {
        text: '`[7]`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#fill-prototype-method',
    explanation:
      '`Array(4)` creates an array with 4 spots, and `fill(3)` fills them with the value 3',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var foo = [1, "2", 2, 4, "2"];
var newFoo = foo.find((val) => {
  return val == 2
})
console.log(newFoo + 1)
${'```'}
    `,
    questionId: 'GVw5GFLNiaqFVGMRozom',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`"2,2,21"`',
        id: 0,
      },
      { text: '`"21"`', id: 1 },
      {
        text: '`3`',
        id: 2,
      },
      {
        text: '`NaN`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#find-prototype-method',
    explanation:
      '`foo.find()` returns the first value for which the comparison is truthy, so `"2"` at index 1. `1` is then coerced into `"1"` and added to `"2"` which is `"21"`.',
  },
];

export default Ch6Questions;
