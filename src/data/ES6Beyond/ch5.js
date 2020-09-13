const Ch5Questions = [
  {
    question: "What do typed arrays allow you to do in JavaScript?",
    questionId: '6sO8CnSw6dQPYn4RJQj1',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'Create arrays of a specific type of values, like an array of only strings',
        id: 0
      },
      {
        text: 'Provide structured access to binary data using array-like semantics',
        id: 1
      }
    ],
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#typedarrays',
    explanation: "It'd be tempting to look at a feature named \"typed array\" and assume it means an array of a specific type of values, like an array of only strings. However, typed arrays are really more about providing structured access to binary data using array-like semantics (indexed access, etc.). The \"type\" in the name refers to a \"view\" layered on type of the bucket of bits, which is essentially a mapping of whether the bits should be viewed as an array of 8-bit signed integers, 16-bit signed integers, and so on."
  },
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
    question: 'Which of the following statements about WeakMaps is not true:',
    questionId: '1vqM3u3IxbLsdhcLV1Ik',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'WeakMaps take only objects as keys',
        id: 0
      },
      {
        text: 'WeakMaps do not expose any iterators over their keys, values, or entries',
        id: 1
      },
      {
        text: 'If an object used as a key in a WeakMap is garbage collected, the entry is not removed',
        id: 2
      },
      {
        text: 'WeakMaps do not have a `size` property or `clear()` method',
        id: 3
      }
    ],
    correctAnswerId: 2,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#weakmaps',
    explanation: "WeakMaps take (only) objects as keys. Those objects are held weakly, which means if the object itself is GC'd, the entry in the WeakMap is also removed."
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
    question: 'Which of the following statements about Sets is not true:',
    questionId: 'DqorR4071EhcvJ1WOs60',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'A set is a collection of unique values (duplicates are ignored)',
        id: 0
      },
      {
        text: 'The `add()` method is used to add new items to a set',
        id: 1
      },
      {
        text: 'The `get()` method is used to retrieve an item from a set',
        id: 2
      },
      {
        text: 'The `has()` method is used to test if a value is present or not',
        id: 3
      }
    ],
    correctAnswerId: 2,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#sets',
    explanation: "A set doesn't need (and doesn't have) a `get(..)` because you don't retrieve a value from a set, but rather test if it is present or not, using `has(..)`"
  },
  {
    question: `This is a valid way to create an array from a set:
${'```js'}
  let s = new Set([1, 2, 2, 3, 3, 3]);
  let a = [...s];
${'```'}  
    `,
    questionId: 'dAH5icqC8hP5pw2BkSeR',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0
      },
      {
        text: 'False',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#sets',
    explanation: 'You can use the spread operator with sets'
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
  {
    question: 'Which of the following statements about WeakSets is true:',
    questionId: 'vDYSpTzxkezGaQC3scXV',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'A WeakSet holds its values weakly',
        id: 0
      },
      {
        text: 'A WeakSet holds its keys weakly',
        id: 1
      },
      {
        text: 'WeakSet values can be primitives like strings or numbers',
        id: 2
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#weaksets',
    explanation: "Whereas a WeakMap holds its keys weakly (but its values strongly), a WeakSet holds its values weakly (there aren't really keys)."
  },
];

export default Ch5Questions;
