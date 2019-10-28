const Ch5Questions = [
  {
    question: `What is the difference between maps and objects?`,
    questionId: '0epU8G0UpfrdT0RvnLMV',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'Object keys have to be strings, and map keys can be any value',
        id: 0,
      },
      { text: 'Maps are immutable, and objects are not', id: 1 },
      {
        text: 'Objects are the JavaScript version of maps',
        id: 2,
      },
      {
        text: 'There is no difference',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#chapter-5-collections',
    explanation:
      'Maps were added in ES6 and are just like objects except the keys can be anything, even arrays or objects!',
  },
  {
    question: `The following code is valid ES6:
${'```js'}
var m = new Map();

var x = { id: 1 },
  y = { id: 2 };

m[x] = y;
${'```'}
    `,
    questionId: '9BC25l8DHoyymcBZhbJV',
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
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#maps',
    explanation:
      'Maps do not support the `[]` syntax. `set` operations must be done like `m.set(x, y)`.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
let duplicates = [1, 2, 2, 3, 4, 4, 4, 5];
let newSet = new Set(duplicates);
console.log(newSet.size);
${'```'}
    `,
    questionId: 'bHMEwg8mKijiWv7K1xyP',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`8`',
        id: 0,
      },
      { text: '`5`', id: 1 },
      {
        text: '`TypeError`',
        id: 2,
      },
      {
        text: '`SyntaxError`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#sets',
    explanation:
      'Sets can be constructed with iterators such as arrays, and they only store unique values. They are kind of like objects with keys but no values.',
  },
  {
    question: `What is one way to copy a set:
${'```js'}
let values = [1, 1, 2, 3];
let setValues = new Set(values)
${'```'}
    `,
    questionId: 'hl8suixZavQFzxEHH9dJ',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`let copy = setValues.copy()`',
        id: 0,
      },
      { text: '`let copy = Set.assign(new Set(), setValues)`', id: 1 },
      {
        text: '`let copy = new Set([setValues])`',
        id: 2,
      },
      {
        text: '`let copy = new Set(setValues)`',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#sets',
    explanation:
      'The constructor is the only way to make a new set, and it will copy values from the set into a new set.',
  },
  {
    question: `Which of the following are valid ways to make an iterator of map keys:
${'```js'}
var newMap = new Map()

var x = {"foo": 1}
var xVal = "foo1";

var y = {"foo": 2}
var yVal = "foo2";

newMap.set(x, xVal)
newMap.set(y, yVal)
${'```'}
    `,
    questionId: 'Uh3I0xxkQbLS9JIsXAb3',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`newMap.keys()`',
        id: 0,
      },
      { text: '`newMap.keys`', id: 1 },
      {
        text: '`newMap.entries()`',
        id: 2,
      },
      {
        text: '`newMap.forEach(key => {...})`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#map-keys',
    explanation:
      '`newMap.keys()` will create an iterator of the keys. `newMap.forEach()` iterates over the values, and `entries()` creates a two dimensional array of keys and values.',
  },
];

export default Ch5Questions;
