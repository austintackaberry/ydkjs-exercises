const Ch2Questions = [
  {
    question: `It is invalid in JS to create a standalone block statement like the following: 
${'```js'}
{
let a = 3;
console.log( a );
}
${'```'}
    `,
    questionId: '6GxXQHoKzN56AjJGkfXA',
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
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#block-scoped-declarations',
    explanation: "It's not very common or idiomatic thus far in JS to use a standalone `{ .. }` block, but it's always been valid"
  },
  {
    question: `What will be logged to the console when the following code is executed?
  ${'```js'}
  {
    console.log( a );
    console.log( b );
    var a;
    let b;
  }
  ${'```'}
    `,
    questionId: 'UTFhVtptZcUBGhBHmQfC',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`ReferenceError` / `ReferenceError`',
        id: 0
      },
      {
        text: '`undefined` / `undefined`',
        id: 1
      },
      {
        text: '`ReferenceError` / `undefined`',
        id: 2
      },
      {
        text: '`undefined` / `ReferenceError`',
        id: 3
      }
    ],
    correctAnswerId: 3,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#let-declarations',
    explanation: "Accessing a let-declared variable earlier than its `let` .. declaration/initialization causes an error, whereas with `var` declarations the ordering doesn’t matter"
  },
  {
    question: `What will be logged to the console when the following is executed?
  ${'```js'}
let nums = []
for (let i = 1; i < 6; i++) {
    nums.push(function() {console.log(i)});
}
nums.forEach(fn => fn());
  ${'```'}
    `,
    questionId: 'S6DgwvURYTfqYshBo9xs',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`1,2,3,4,5`',
        id: 0
      },
      {
        text: '`5,5,5,5,5`',
        id: 1
      },
      {
        text: '`6,6,6,6,6`',
        id: 2
      },
      {
        text: '`1,1,1,1,1`',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#let--for',
    explanation: "The `let i` in the for header declares an `i` not just for the for loop itself, but it redeclares a new `i` for each iteration of the loop. That means that closures created inside the loop iteration close over those per-iteration variables the way you'd expect. If you tried that same snippet but with `var i` in the for loop header, you'd get `6,6,6,6,6` instead."
  },
  {
    question: `What will be logged to the console when the following is executed?
  ${'```js'}
let a = [2,3,4];
let b = [ 1, ...a, 5 ];
console.log(b);
  ${'```'}
    `,
    questionId: 'Uo0KIUg3CqPuI0hXhITj',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`[1, null, 5]`',
        id: 0
      },
      {
        text: '`[1, undefined, 5]`',
        id: 1
      },
      {
        text: '`[1, 2, 3, 4, 5]`',
        id: 2
      },
      {
        text: '`[1, [2, 3, 4], 5]`',
        id: 3
      }
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#spreadrest',
    explanation: "When `...` is used in front of an array, it acts to “spread” it out into its individual values."
  },
  {
    question: `What will the value of parameter ${'```'}z${'```'} be inside the following function?
${'```js'}
function foo(x, y, ...z) {
console.log( z );
}
foo( 1, 2, 3, 4, 5 );
${'```'}
    `,
    questionId: '6oeGEzYJ3KKLo1KNgdA3',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`[3, 4, 5]`',
        id: 0
      },
      {
        text: '`3`',
        id: 1
      },
      {
        text: '`undefined`',
        id: 2
      },
      {
        text: '`[1, 2, 3, 4, 5]`',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#spreadrest',
    explanation: "The other common usage of `...` can be seen as almost the opposite; instead of spreading a value out, the `...` gathers a set of values together into an array"
  },
  {
    question:
      'In the following code, `function foo (x=20) {...}`, what does "x=20" accomplish?',
    questionId: 'B981780c3855a89e0073',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'It assigns *x* a default value of 20 if the argument passed to the function is *undefined*.',
        id: 0,
      },
      { text: 'Any value passed to the function gets changed to 20.', id: 1 },
      {
        text: 'The function will only accept arguments which are equal to 20.',
        id: 2,
      },
      {
        text:
          'It assigns *x* a default value of 20 if the argument passed to the function is "falsy".',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#default-parameter-values',
    explanation:
      'In ES6+, you can provide a default value for a function parameter. The default value is used if the argument is *undefined* (including if no argument is passed).  It is not used for other falsy values (i.e. 0, NaN, an empty string, etc.).',
  },
  {
    question: `What will be logged to the console when the following function is executed?
  ${'```js'}
  function foo(x = 11, y = 31) {
    console.log( x + y );
  }

  foo(null, 6);
  foo(undefined, 6);
  ${'```'}  
    `,
    questionId: 'vh4M9KYyX8mPrvs5xAmA',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`17` / `17`',
        id: 0
      },
      {
        text: '`6` / `17`',
        id: 1
      },
      {
        text: '`NaN` / `NaN`',
        id: 2
      },
      {
        text: '`6` / `6`'
      }
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#default-parameter-values',
    explanation:
      "`null` coerces to `0`, so the default value is never used. `undefined` is the same as a missing argument, so the default value is used in this case."
  },
  {
    question: 'Function default values can only be simple values like `31`; they cannot be an expression or a function call.',
    questionId: 'gBRURMiK0oOKa5zBWikh',
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
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#default-value-expressions',
    explanation: "Function default values can be more than just simple values like `31`; they can be any valid expression, even a function call."
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
{
  const a = 2;
  a = 3;
  console.log(a)
}
${'```'}
    `,
    questionId: 'qE8Cy9hGslTCTCt44Sbn',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`3`',
        id: 0,
      },
      { text: '`TypeError`', id: 1 },
      {
        text: '`2`',
        id: 2,
      },
      {
        text: '`SyntaxError`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#const-declarations',
    explanation:
      "You are not allowed to change the value the variable holds once it's been set, at declaration time. A `const` declaration must have an explicit initialization.",
  },
  {
    question: `With ES6, this is valid JavaScript:
${'```js'}
{ let a = 2, b, c;
  // ..
}
${'```'}
    `,
    questionId: '9vFbLV0HPOB76wPvXkvj',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'True',
        id: 0,
      },
      { text: 'False', id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#block-scoped-declarations',
    explanation:
      'Block scoping is now possible with the `let` and `const` keywords.',
  },
  {
    question: `What variables are scoped within the \`for\` loop:
${'```js'}
let a = 2;

if (a > 1) {
  let b = a * 3;

  for (let i = a; i <= b; i++) {
    let j = i + 10;
  }

  let c = a + b;
}
${'```'}
    `,
    questionId: 'N1MFrOhtcAZzGzddk0jF',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`j`',
        id: 0,
      },
      { text: '`i`, `j`', id: 1 },
      {
        text: '`i`, `j`, `a`, `b`',
        id: 2,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#let-declarations',
    explanation:
      '`j` is clearly scoped to the `for` loop, but `i` is not so obvious. A new `i` is scoped to the block for each iteration.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
{
  const a = [1,2,3];
  a.push( 4 );
  console.log( a );
}
${'```'}
    `,
    questionId: 'msvBBTHtOQSrFGkly2yk',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`[1, 2, 3, 4]`',
        id: 0,
      },
      { text: '`[1, 2, 3]`', id: 1 },
      {
        text: '`TypeError`',
        id: 2,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#const-declarations',
    explanation:
      "Constants are not a restriction on the value itself, but on the variable's assignment of that value. In other words, the value is not frozen or immutable because of `const`, just the assignment of it. If the value is complex, such as an object or array, the contents of the value can still be modified:",
  },
  {
    question: `What does the following line of code do?
  ${'```js'}
  let { baz: bam } = bar();
  ${'```'}
    `,
    questionId: 'bwxMr1puXGUhsC7FnqVq',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'It destructures the object property `baz` and assigns it to the variable `bam`',
        id: 0
      },
      {
        text: 'It destructures the object property `bam` and assigns it to the variable `baz`',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#object-property-assignment-pattern',
    explanation: 'The syntactic pattern here is source: target. `baz: bam` means the `baz` property is the source value and `bam` is the target variable to assign to.'
  },
  {
    question: `What will be logged to the console when the following code is executed?
  ${'```js'}
  let x = 10, y = 20;
  [ y, x ] = [ x, y ];
  console.log( x, y );
  ${'```'}  
    `,
    questionId: 'qGD3ReAd9ey8UwUGHdBN',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`20 10`',
        id: 0
      },
      {
        text: '`10 20`',
        id: 1
      },
      {
        text: '`undefined undefined`',
        id: 2
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#not-just-declarations',
    explanation: 'With destructuring, you can even solve the traditional "swap two variables" task without a temporary variable'
  },
  {
    question: `The following is valid object destructuring syntax:
  ${'```js'}
  let x, y, z;
  { x, y, z } = bar();
  ${'```'}  
    `,
    questionId: 'YEkVaVz5fS4Je4NkaJ9M',
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
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#not-just-declarations',
    explanation: 'For the object destructuring form specifically, when leaving off a var/let/const declarator, we have to surround the whole assignment expression in ( ), because otherwise the { .. } on the lefthand side as the first element in the statement is taken to be a block statement instead of an object. So the valid way to destructure in this case is like this: `( { x, y, z } = bar() );`'
  },
  {
    question: `What will be logged to the console when this code runs?
  ${'```js'}
  let o = [1,2,3], a, b, c, p;
  p = [a,b,c] = o;
  console.log(p === o);
  ${'```'}  
    `,
    questionId: 'qkUZv2ZQhLj3A2udJa3g',
    shouldBeRandomized: false,
    answers: [
      {
        text: '`true`',
        id: 0
      }, {
        text: '`false`',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#destructuring-assignment-expressions',
    explanation: 'The assignment expression with object or array destructuring has as its completion value the full righthand object/array value. In the previous snippet, `p` was assigned the `o` array reference.'
  },
  {
    question: 'With both object and array destructuring assignment, you must assign all the values that are present.',
    questionId: '1B3HBpG7nBudPnl2sBsL',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0
      }, {
        text: 'False',
        id: 1
      }
    ],
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#too-many-too-few-just-enough',
    explanation: 'With both array destructuring assignment and object destructuring assignment, you do not have to assign all the values that are present.'
  },
  {
    question: `What will be logged to the console when the following is executed?
  ${'```js'}
  let arr = [1, 2, 3, 4];
  let obj = {a: "x", b: "y", c: "z"};
  let [,,,x,y] = arr;
  let {a, d} = obj;
  
  console.log(x, y);
  console.log(a, d);
  ${'```'}  
    `,
    questionId: 'YiCPL8UOLusEfVCA32ro',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`undefined undefined` / `x undefined`',
        id: 0
      },
      {
        text: '`4 undefined` / `x undefined`',
        id: 1
      },
      {
        text: '`3 4` / `x y`',
        id: 2
      },
      {
        text: '`4 null` / `x z`',
        id: 3
      }
    ],
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#too-many-too-few-just-enough',
    explanation: "if you try to assign more values than are present in the value you're destructuring/decomposing, you get graceful fallback to `undefined`"
  },
  {
    question: `What will be logged to the console when the following is executed?
  ${'```js'}
  let o = {x: {y: {z: 6}}};
  let {x: {y: { z: n, p: c = 3 } } } = o;
  console.log(n, c);
  ${'```'}  
    `,
    questionId: 'Y2nY1lSs0HW7w5WfAPOr',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`undefined` / `undefined`',
        id: 0
      },
      {
        text: '`6` / `3`',
        id: 1
      },
      {
        text: '`6` / `undefined`',
        id: 2
      }
    ],
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#nested-destructuring',
    explanation: "If the values you're destructuring have nested objects or arrays, you can destructure those nested values as well"
  },
  {
    question: `What will be logged to the console when this function is called as follows:
  ${'```js'}
  function fn({ x = 10 } = {}, { y } = { y: 10 }) {
  console.log( x, y );
  }
  
  fn();
  fn({}, {});
  ${'```'}  
    `,
    questionId: 'oCRpNPhT44Yp4ySgN2nR',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`10 10` / `10 undefined`',
        id: 0
      },
      {
        text: '`{} {y: 10}` / `10 undefined`',
        id: 1
      },
      {
        text: '`10 undefined` / `10 undefined`',
        id: 2
      },
      {
        text: '`10 10` / `10 10`',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#destructuring-defaults--parameter-defaults',
    explanation: " It's pretty clear that named parameter `x` is defaulting to `10` if not passed as a property of that same name in the first argument's object. But what about `y` being `undefined`? The `{ y: 10 }` value is an object as a function parameter default value, not a destructuring default value. As such, it only applies if the second argument is not passed at all, or is passed as `undefined`."
  },
  {
    question: 'You should use concise methods only if you’re never going to need them to do recursion or event binding/unbinding.',
    questionId: 'qlyA5sEjSGbhYJuVdXoy',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0
      }, {
        text: 'False',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#concise-methods',
    explanation: "Concise methods imply anonymous function expressions. An anonymous function doesn't have a lexical name you can use inside the function itself."
  },
  {
    question: `What will be logged to the console when this code is executed?
  ${'```js'}
  var o1 = {
    foo() {
      console.log( "o1:foo" );
    }
  };

  var o2 = {
    foo() {
      super.foo();
      console.log( "o2:foo" );
    }
  };

  Object.setPrototypeOf( o2, o1 );
  o2.foo();
  ${'```'}  
    `,
    questionId: 'lgqCjGmfRcECcxYuhCI1',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`o1:foo` / `o2:foo`',
        id: 0
      },
      {
        text: '`o2:foo` / `o1:foo`',
        id: 1
      },
      {
        text: '`o2:foo`',
        id: 2
      },
      {
        text: '`o1:foo`',
        id: 3
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#object-super',
    explanation: 'The `super` reference in the `o2.foo()` method is locked statically to `o2`, and specifically to the `[[Prototype]]` of `o2`. `super` here would basically be `Object.getPrototypeOf(o2)` -- resolves to `o1` of course -- which is how it finds and calls `o1.foo()`'
  },
  {
    question: 'Arrow functions are always anonymous function expressions; there is no arrow function declaration.',
    questionId: 'H4QkzDzT4ULfcS7YXzku',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0
      }, {
        text: 'False',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#arrow-functions',
    explanation: 'It also should be clear that they are anonymous function expressions — they have no named reference for the purposes of recursion or event binding/unbinding'
  },
  {
    question: 'Which of the following statements is true:',
    questionId: 'KXkDI1uxKZxereYUA1Y8',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`this` binding inside arrow functions is dynamic',
        id: 0
      },
      {
        text: '`this` binding inside arrow functions is lexical',
        id: 1
      },
      {
        text: 'You cannot use `this` inside arrow functions',
        id: 2
      },
      {
        text: '`this` always points to the global object inside arrow functions',
        id: 3
      }
    ],
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#not-just-shorter-syntax-but-this',
    explanation: 'Inside arrow functions, the `this` binding is not dynamic, but is instead lexical.'
  },
  {
    question: `What will be logged to the console when the following is executed?
  ${'```js'}
  for (let a of [1, 2, 3]) {
    console.log(a);
  }
  ${'```'}  
    `,
    questionId: '5hAYP8rr185o0j3rgzkP',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`1`, `2`, `3`',
        id: 0
      },
      {
        text: '`0`, `1`, `2`',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#forof-loops',
    explanation: 'for..in loops over the keys/indexes in an array, while for..of loops over the values of the array.'
  },
  {
    question: 'Which of the following statements is not true:',
    questionId: 'nfAtfi4v3607UKSqxxvH',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'You should always use `new Symbol(...)` to create a new symbol.',
        id: 0
      },
      {
        text: 'Unlike the other primitive types, symbols don’t have a literal form.',
        id: 1
      },
      {
        text: 'The `typeof` operator outputs `"symbol"` when used in front of a symbol value and that is the primary way to identify one.',
        id: 2
      },
      {
        text: 'The parameter passed to `Symbol(..)` is optional. If passed, it should be a string that gives a friendly description for the symbol’s purpose.',
        id: 3
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#symbols',
    explanation: "You cannot and should not use `new` with `Symbol(..)`. It's not a constructor, nor are you producing an object. The correct way to create a new symbol is like this: `let sym = Symbol( \"some optional description\" );`"
  },
  {
    question: 'The main point of a symbol is to create a string-like value that can’t collide with any other value.',
    questionId: '4Zvg5w0M4sdZdT2cBfuA',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0
      }, {
        text: 'False',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#symbols',
    explanation: 'You can think of this symbol value as an automatically generated, unique (within your application) string value.'
  }
];

export default Ch2Questions;
