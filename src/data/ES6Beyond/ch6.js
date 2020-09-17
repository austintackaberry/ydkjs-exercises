const Ch6Questions = [
  {
    question: `What will be logged to the console when the following code is executed?
  ${'```js'}
  let arr = Array(5);
  console.log(arr.length);
  ${'```'}  
    `,
    questionId: 'uIMy3fbZO7aZtK0mykLZ',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`5`',
        id: 0
      },
      {
        text: '`1`',
        id: 1
      },
      {
        text: '`4`',
        id: 2
      },
      {
        text: '`0`',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#array',
    explanation: "There's a well known gotcha with the `Array(..)` constructor, which is that if there's only one argument passed, and that argument is a number, instead of making an array of one element with that number value in it, it constructs an empty array with a length property equal to the number."
  },
  {
    question: `What will be logged to the console when the following code is executed?
  ${'```js'}
  Array(1, 2, 3).length === Array.of(5, 6, 7).length
  ${'```'}  
    `,
    questionId: 'MeytypkkVcugaNHxQRqe',
    shouldBeRandomized: false,
    answers: [
      {
        text: '`true`',
        id: 0
      },
      {
        text: '`false`',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#arrayof-static-function',
    explanation: "`Array.of(..)` replaces `Array(..)` as the preferred function-form constructor for arrays"
  },
  {
    question: `What will be logged to the console when the following code is executed?
  ${'```js'}
  let arrLike = {
    length: 4,
    0: "foo",
    2: "bar"
  };
  console.log(Array.from(arrLike));
  ${'```'}  
    `,
    questionId: 'tjHhkaU837DDjhpSsM2z',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`["foo", undefined, "bar", undefined]`',
        id: 0
      },
      {
        text: '`[undefined, undefined, undefined, undefined]`',
        id: 1
      },
      {
        text: '`["foo", "bar"]`',
        id: 2
      },
      {
        text: '`["foo",,"bar",,]`',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#arrayfrom-static-function',
    explanation: "`Array.from(..)` looks to see if the first argument is an iterable, and if so, it uses the iterator to produce values to \"copy\" into the returned array. If you pass an array-like object as the first argument, it simply loops over the value, accessing numerically named properties from `0` up to whatever the value of `length` is. `Array.from(..)` never produces empty slots."
  },
  {
    question: '`Array.from(..)` takes an optional second argument, which is a ____ callback.',
    questionId: 'OjsG5DMXcR2VEemXDwdr',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'mapping',
        id: 0
      },
      {
        text: 'filtering',
        id: 1
      },
      {
        text: 'sorting',
        id: 2
      },
      {
        text: 'reducing',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#mapping',
    explanation: "The second argument, if provided, is a mapping callback (almost the same as the regular `Array#map(..)` expects) which is called to map/transform each value from the source to the returned target."
  },
  {
    question: `What does the following line of code do?
  ${'```js'}
  let a = Array.from( { length: 2 } );
  ${'```'}  
    `,
    questionId: 'R1CuWLpQbIMLMZAoCFWl',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'It creates an array with two `undefined` values',
        id: 0
      },
      {
        text: 'It creates an array with two empty slots',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#avoiding-empty-slots',
    explanation: 'You can use `Array.from()` to create an array of `undefined` values'
  },
  {
    question: `What will be logged to the console when the following code is executed?
  ${'```js'}
  let x = NaN, y = 0, z = -0;
  console.log(Object.is(x, x));
  console.log(Object.is(y, z));
  ${'```'}  
    `,
    questionId: 'FkF3wFwgf86O5iWtU60i',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`true` / `false`',
        id: 0
      },
      {
        text: '`false` / `true`',
        id: 1
      },
      {
        text: '`false` / `false`',
        id: 2
      },
      {
        text: '`true` / `true`',
        id: 3
      }
    ],
    correctAnswerId: 0,
    explanation: '`Object.is(..)` is basically the same as `===`, with two exceptions: `Object.is(NaN, NaN)` is `true` and `Object.is(0, -0)` is `false`',
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#objectis-static-function'
  },
  {
    question: `What will be logged to the console when the following code is executed?
  ${'```js'}
  console.log(Number.isInteger(4.0));
  ${'```'}  
    `,
    questionId: 'QgDHH7FYwDRbII8NbZt7',
    shouldBeRandomized: false,
    answers: [
      {
        text: '`true`',
        id: 0
      },
      {
        text: '`false`',
        id: 1
      }
    ],
    correctAnswerId: 0,
    explanation: "In JavaScript, there’s no difference between `4`, `4.`, `4.0`, or `4.0000`. All of these would be considered an “integer”",
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#integer-related-static-functions'
  },
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
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#number',
    explanation:
      'Max safe integer is the highest integer that can safely be represented in a JavaScript number value which is `2^53 - 1`.',
  },
  {
    question: `Why would you use \`Number.isNaN()\` instead of \`isNaN()\`?`,
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
