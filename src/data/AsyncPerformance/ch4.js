const Ch4Questions = [
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var x = 1;

function* foo() {
  x++;
  yield;
  x++;
}

var bar = foo()
bar.next()
console.log(x)
bar.next()
console.log(x)
${'```'}
    `,
    questionId: '3oiWwVcpBDArVgTfqIQ8',
    shouldBeRandomized: true,
    answers: [
      { text: '`2` `3`', id: 0 },
      { text: '`1` `2`', id: 1 },
      { text: '`1` `1`', id: 2 },
      { text: '`3` `3`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#breaking-run-to-completion',
    explanation:
      'The first time `bar.next` is called `foo` is run until `yield`. The second time, `bar.next` is called, `foo` is run until completion.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
function* foo(x) {
  var y = x * (yield "Hello");
  return y;
}

var it = foo(6);

var res = it.next();
res = it.next(7);

console.log(res.value);
${'```'}
    `,
    questionId: '0UGZnk0GYtmh9kERoxbJ',
    shouldBeRandomized: true,
    answers: [
      { text: '`NaN`', id: 0 },
      { text: '`42`', id: 1 },
      { text: '`42 "Hello"`', id: 2 },
      { text: '`TypeError`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#iteration-messaging',
    explanation:
      'The first `it.next()` starts `foo`, and the second one replaces `"Hello"` with `7`, thus `y` is `42`.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
function* foo() {
  var x = yield;
  var y = yield x;
  return x + y;
}

var it1 = foo();
var it2 = foo();

var val1 = 3;
var val2 = 5;

it1.next();
it2.next();

val1 = it1.next(val1).value;
val2 = it2.next(val2).value;

let returnVal1 = it1.next(val2).value;

console.log(returnVal1);
${'```'}
    `,
    questionId: 'rhNUHne4lSbC4BuU4Ru9',
    shouldBeRandomized: false,
    answers: [
      { text: '`3`', id: 0 },
      { text: '`5`', id: 1 },
      { text: '`8`', id: 2 },
      { text: '`undefined`', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#multiple-iterators',
    explanation:
      'The answer ends up being `x` of `it1` plus `x` of `it2` which is just `val1` + `val2`.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
function* foo() {
  let x = 1;
  while (true) {
    yield x;
    x += 1;
  }
}
let sumNextVar = 0;
for (let nextVar of foo()) {
  if (nextVar > 3) {
    break;
  }
  sumNextVar += nextVar;
}
console.log(sumNextVar);
${'```'}
    `,
    questionId: 'eGErZ2NWL1GsyiFCNENi',
    shouldBeRandomized: true,
    answers: [
      { text: '`6`', id: 0 },
      { text: '`1`', id: 1 },
      { text: '`TypeError`', id: 2 },
      { text: '`undefined`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#generator-iterator',
    explanation:
      '`for..of` will keep calling `next()` until the function returns. Because we have an infinte loop in `foo`, we need to manually stop our `for..of` loop, otherwise it will not stop.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
function foo(x, y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(y + 1), x);
  });
}

function* main() {
  var num = yield foo(500, 1);
  console.log(num);
}

var it = main();

var p = it.next().value;

p.then(num => {
  it.next(num);
});
${'```'}
    `,
    questionId: 'R0jD4PsCg1N7sCoypENG',
    shouldBeRandomized: false,
    answers: [
      { text: '`1`', id: 0 },
      { text: '`2`', id: 1 },
      { text: '`ReferenceError`', id: 2 },
      { text: '`undefined`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#generators--promises',
    explanation:
      '`it.next().value` starts `main` and gets the value from `foo(500, 1)` which is a promise. We then resolve the promise, and then continue running `main`.',
  },
];
export default Ch4Questions;
