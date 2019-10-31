const Ch7Questions = [
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var abc = function def() {
  let a = 5;
}
console.log(abc.name)
${'```'}
    `,
    questionId: 'xyMfs00r4Ew4NsduVP2D',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`"abc"`',
        id: 0,
      },
      { text: '`"def"`', id: 1 },
      {
        text: '`["def", "name"]`',
        id: 2,
      },
      {
        text: '`undefined`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch7.md#function-names',
    explanation:
      'The `name` property of a function will refer to the lexical binding name if it exists. In this case, it is `"def"`. If the function was anonymous, the name property would be `"abc"`.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var o = {};

o[2] = true;
o[1] = true;
o.b = "awesome";
o.a = "cool";

console.log(Object.getOwnPropertyNames( o ));
${'```'}
    `,
    questionId: 'p1no0t7amJoaqRdjXvs9',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`[1,2,"b","a"]`',
        id: 0,
      },
      { text: '`[1,2,"a","b"]`', id: 1 },
      {
        text: 'Order cannot be guaranteed',
        id: 2,
      },
      {
        text: '`[2,1,"b","a"]`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch7.md#property-ordering',
    explanation: `The ordering is:

1. First, enumerate any owned properties that are integer indexes, in ascending numeric order.
2. Next, enumerate the rest of the owned string property names in creation order.
3. Finally, enumerate owned symbol properties in creation order.
  `,
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var arr = [4, 5, 6, 7];

arr[Symbol.iterator] = function* () {
  var idx = 0;
  do {
    yield 3;
  } while ((idx += 1) < this.length);
};

console.log([...arr])
${'```'}
    `,
    questionId: 'cPBJLPjXTuyHGrI2QSiV',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`[4, 5, 6, 7]`',
        id: 0,
      },
      { text: '`[3, 3, 3, 3]`', id: 1 },
      {
        text: '`[4, 5, 6]`',
        id: 2,
      },
      {
        text: '`[3, 3, 3]`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch7.md#symboliterator',
    explanation:
      'The generator defines how to iterate through values in `arr`. We defined it to return the value `3` for each element in the array.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var obj1 = { a: 3 }
var obj2 = { b: 3 }

obj1.toString = () => "foo"
obj2[Symbol.toStringTag] = "foo";

console.log(obj1.toString() === obj2.toString())
${'```'}
    `,
    questionId: '4TbWDRqm9vDpkKWJ7Ron',
    shouldBeRandomized: false,
    answers: [
      {
        text: '`true`',
        id: 0,
      },
      { text: '`false`', id: 1 },
      {
        text: '`SyntaxError`',
        id: 2,
      },
      {
        text: '`TypeError`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch7.md#symboltostringtag-and-symbolhasinstance',
    explanation:
      '`obj1.toString()` is `"foo"` and `obj2.toString()` is `"[object foo]"`',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var arr = [1, 2, 3, 4, 5];

arr[Symbol.toPrimitive] = function () {
  return 5
};

console.log(arr + 10);
${'```'}
    `,
    questionId: 'q0AQVG36cgff7ku4ySjz',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`"1,2,3,4,510"`',
        id: 0,
      },
      { text: '`15`', id: 1 },
      {
        text: '`TypeError`',
        id: 2,
      },
      {
        text: '`ReferenceError`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch7.md#symboltoprimitive',
    explanation:
      '`toPrimitive` is used when an object must be coerced to a primitive value. We are overriding its typical functionality for `arr` and forcing it to be `5`.',
  },
];

export default Ch7Questions;
