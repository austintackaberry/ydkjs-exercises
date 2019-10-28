const Ch5Questions = [
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
'use strict'
var anotherObject = {
  a: 2
};

var myObject = Object.create( anotherObject );

var a = 3;
console.log(myObject.a);
${'```'}
    `,
    questionId: 'fg3H6YFz6yMvjAszXWJc',
    shouldBeRandomized: false,
    answers: [
      {
        text: `undefined`,
        id: 0,
      },
      { text: `null`, id: 1 },
      { text: '2', id: 2 },
      { text: '3', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch5.md#prototype',
    explanation:
      '`var myObject = Object.create( anotherObject );` links `myObject` with `anotherObject` via the prototype chain. If a key does not exist in `myObject`, it follows its prototype chain and looks for the key in `anotherObject`.',
  },
  {
    question: 'A `for..in` loop only iterates over the specified object',
    questionId: 'S1721nV1G9a91T2Gf0OS',
    shouldBeRandomized: false,
    answers: [
      {
        text: `True`,
        id: 0,
      },
      { text: `False`, id: 1 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch5.md#prototype',
    explanation: `It also iterates over all enumerable properties in its prototype chain.`,
  },
  {
    question: `What is logged to the console when the following code is executed:
${'```js'}
var anotherObject = {
  a: 2
};

var myObject = Object.create( anotherObject );

myObject.a++;

console.log(anotherObject.a, myObject.a)
${'```'}
    `,
    questionId: 'FOaeVC3vKIygUO814QQ8',
    shouldBeRandomized: false,
    answers: [
      {
        text: `3 2`,
        id: 0,
      },
      { text: `3 3`, id: 1 },
      { text: '2 3', id: 2 },
      { text: '2 2', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch5.md#setting--shadowing-properties',
    explanation: `Though it may appear that \`myObject.a++\` should (via delegation) look-up and just increment the \`anotherObject.a\` property itself in place, instead the \`++\` operation corresponds to \`myObject.a = myObject.a + 1\`. The result is \`[[Get]]\` looking up a property via \`[[Prototype]]\` to get the current value \`2\` from \`anotherObject.a\`, incrementing the value by one, then \`[[Put]]\` assigning the \`3\` value to a new shadowed property \`a\` on \`myObject\`.`,
  },
  {
    question: `It is better to think about object oriented programming in JavaScript as Object Links than Classes`,
    questionId: 'rurmvSFgCGiDxAKFdWwR',
    shouldBeRandomized: true,
    answers: [
      {
        text: `True`,
        id: 0,
      },
      { text: `False`, id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch5.md#createing-links',
    explanation: `JavaScript simply does not have classes. ES6 classes are syntactic sugar on top of what are simply just objects.`,
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var Dog = {
  speak: function () {
    console.log("Bark");
  },
  sleep: function () {
    console.log('sleeping...')
  }
};

var Cat = Object.create(Dog);

Cat.speak = function () {
  console.log("Meow")
};
Cat.speak()
Cat.sleep()
${'```'}
    `,
    questionId: 'lXB2dL0zVkY3KaXU6Smu',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`undefined` `ReferenceError`',
        id: 0,
      },
      { text: '`"Meow"` `"sleeping..."`', id: 1 },
      { text: '`"Bark"` `"sleeping..."`', id: 2 },
      { text: '`"Meow"` `ReferenceError`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch5.md#createing-links',
    explanation:
      '`Cat` has a property `speak`, but it does not have a property `sleep`. Because `Cat` was linked to `Dog` via `Object.create()`, and `Dog` has a property `sleep`, `Dog`s `sleep` property was called.',
  },
];

export default Ch5Questions;
