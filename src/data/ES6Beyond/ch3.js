const Ch3Questions = [
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var arr = [1,2,3];

var it = arr[Symbol.iterator]();

console.log(it.next().value);
${'```'}
    `,
    questionId: 'KamNLrqJT5ImdRfQ35nr',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`1`',
        id: 0,
      },
      { text: '`undefined`', id: 1 },
      {
        text: '`TypeError`',
        id: 2,
      },
      {
        text: '`ReferenceError`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#next-iteration',
    explanation:
      'Each time the method located at `Symbol.iterator` (see Chapters 2 and 7) is invoked on this `arr` value, it will produce a new fresh iterator. Most structures will do the same, including all the built-in data structures in JS.',
  },
  {
    question: `What will be logged to the console when the following code is executed:
  ${'```js'}
  let str = "hi";
  let it = str[Symbol.iterator]();

  it.next();
  it.next();
  console.log(it.next());
  ${'```'}  
    `,
    questionId: 'gXH8AqAp9679lt54NP0A',
    shouldBeRandomized: true,
    answers: [
      {
        text: "`{value: 'i', done: true}`",
        id: 0
      },
      {
        text: "`{value: undefined, done: true}`",
        id: 1
      },
      {
        text: "`{value: 'i', done: false}`",
        id: 2
      },
      {
        text: "`{value: undefined, done: false}`",
        id: 2
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#next-iteration',
    explanation: "The `it` iterator doesn't report `done: true` when you receive the `'i'` value. You have to call `next()` again, in essence going beyond the end of the string's values, to get the complete signal `done: true`"
  },
  {
    question: `What will be logged to the console when the following code is executed:
${'```js'}
var a = [1,2,3,4,5];

function foo(x,y,z,w,p) {
  console.log( x + y + z + w + p );
}

foo( ...a );
${'```'}
    `,
    questionId: 'plIwdAz8DJRNR1o8PpD6',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`15`',
        id: 0,
      },
      { text: '`NaN`', id: 1 },
      {
        text: '`TypeError`',
        id: 2,
      },
      {
        text: '`SyntaxError`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#iterator-consumption',
    explanation: 'The `...` spread operator fully exhausts an iterator.',
  },
  {
    question: 'Which of the following is the correct way to declare a generator function?',
    questionId: 'mysEQqHUrlV4iWRyvZIl',
    shouldBeRandomized: false,
    answers: [
      {
        text: "`function *foo() { .. }` or `function* foo() { .. }`",
        id: 0
      },
      {
        text: "`function * foo() { .. }` or `function* foo() { .. }`",
        id: 1
      },
      {
        text: "All of the above",
        id: 2
      },
      {
        text: "None of the above",
        id: 3
      }
    ],
    correctAnswerId: 2,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#syntax',
    explanation: 'The position of the * is not functionally relevant. The only difference here is stylistic preference.'
  },
  {
    question: `What will the last line of code do when it is executed?
  ${'```js'}
  function *rand() {
    while (true) {
      yield Math.random();
    }
  }

  const it = rand();
  it.next();
  ${'```'}  
    `,
    questionId: 'SAJ3VAyzyxRfjiZPFHcN',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'It will generate a new random number',
        id: 0
      },
      {
        text: 'It will start an infinite loop',
        id: 1
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#yield',
    explanation: "You can put `yield` inside a loop, and it can represent a repeated pause point. `yield` is not just a pause point. It’s an expression that sends out a value when pausing the generator. The code here generates and yields a new random number whenever `it.next()` is called."
  },
  {
    question: `What will be logged to the console when the following code is executed?
  ${'```js'}
  function *foo() {
    yield *[1, 2, 3];
    yield "we're done";
  }

  const it = foo();
  it.next();
  console.log(it.next().value);
  ${'```'}  
    `,
    questionId: 'xc09RjDT1w2pSBqrxpZO',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`[1, 2, 3]`',
        id: 0
      },
      {
        text: '`2`',
        id: 1
      },
      {
        text: '`"we\'re done"`',
        id: 2
      },
      {
        text: '`1`',
        id: 3
      }
    ],
    correctAnswerId: 1,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#yield-',
    explanation: "In the same way that the `*` makes a `function` declaration into `function *` generator declaration, a `*` makes `yield` into `yield *`, which is a very different mechanism, called yield delegation. `yield * ..` requires an iterable; it then invokes that iterable's iterator, and delegates its own host generator's control to that iterator until it's exhausted."
  },
  {
    question: `Which of the following is not true of ES6 modules?`,
    questionId: 'gaZ7o3VlCIMcxmIjrIk0',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'You cannot have multiple modules in a file',
        id: 0,
      },
      {
        text:
          "Once you define statically what all the top-level exports are on your module's public API, those cannot be amended later.",
        id: 1,
      },
      {
        text:
          'There is only one instance of the module, which maintains its state. Every time you import that module into another module, you get a reference to the one centralized instance.',
        id: 2,
      },
      {
        text: 'ES6 modules are still experimental and should not be used',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#moving-forward',
    explanation:
      'Modules are no different from other ES6 features in that they should be used, but polyfills might be needed for older browsers.',
  },
  {
    question: `What is the difference between importing default exports and named exports?`,
    questionId: 'wRGNTWtsY1C1XfENF28c',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'Named exports are imported as `import { foo } from "foo";`, and default exports are imported as `import foo from "foo";`',
        id: 0,
      },
      {
        text:
          'Named exports are imported as `import foo from "foo";`, and default exports are imported as `import { foo } from "foo";`',
        id: 1,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#importing-api-members',
    explanation:
      'As the name suggests, the default export is the default export for that module, whereas named exports need to be imported by name.',
  },
  {
    question: `You cannot put either an \`import\` or \`export\` inside an \`if\` conditional.`,
    questionId: 'SVWaRgCKQkULReUt92ct',
    shouldBeRandomized: false,
    answers: [
      {
        text: 'True',
        id: 0,
      },
      { text: 'False', id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#the-new-way',
    explanation: 'They must appear outside of all blocks and functions.',
  },
  {
    question: "Which of the following is an invalid export?",
    questionId: 'SF5oVmLQccw4gS3oKmeh',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`export default const PI = 3.14;`',
        id: 0
      },
      {
        text: '`export const PI = 3.14;`',
        id: 1
      },
      {
        text: '`export function foo() { .. }`',
        id: 2
      },
      {
        text: '`export default function foo() { .. }`',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#exporting-api-members',
    explanation: "You currently cannot do `export default var foo = ..` (or `let` or `const`), in a frustrating case of inconsistency. At the time of this writing, there's already discussion of adding that capability in soon, post-ES6, for consistency sake."
  },
  {
    question: `What of the following options is an incorrect way of importing the following exports:
  ${'```js'}
  export default function foo() { .. }
  export function bar() { .. }
  export function baz() { .. }
  ${'```'}  
    `,
    questionId: 'RBJ3BtrGefb7DtljXSxV',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`import {foo, bar, baz} from "foo";`',
        id: 0
      },
      {
        text: '`import foo, { bar, baz } from "foo";`',
        id: 1
      },
      {
        text: '`import { default as foo, bar as x, baz as y} from "foo";`',
        id: 2
      },
      {
        text: '`import FOOFN, { bar, baz} from "foo";`',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#importing-api-members',
    explanation: "the default keyword in a module's export specifies a named export where the name is actually default"
  },
  {
    question: 'All imported bindings are immutable and/or read-only and any subsequent assignment attempts will throw a `TypeError`',
    questionId: '72hhQFXV6cdBsWkP3740',
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
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#importing-api-members',
    explanation: 'You cannot reassign an imported function or variable in your code.'
  },
  {
    question: '`class Foo {...}` creates a constructor function named `Foo`',
    questionId: '2s3hv3BAZRcFrbzW6cSP',
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
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#class',
    explanation: '`class Foo` implies creating a (special) function of the name Foo, much like you did pre-ES6.'
  },
  {
    question: 'Which of the following statements about classes is not true:',
    questionId: 'uQpIEVPWk8X0hJ7YHCDl',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`class Foo` is hoisted',
        id: 0
      },
      {
        text: 'The `Foo(...)` constructor call *must* be made with the `new` keyword',
        id: 1
      },
      {
        text: 'A `class` can be thought of as a macro, used to automatically populate a `prototype` object',
        id: 2
      },
      {
        text: 'Unlike object literals, there are no commas separating members in a `class` body',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#class',
    explanation: 'While `function Foo() {...}` is “hoisted”, `class Foo` is not.'
  },
  {
    question: `What will be logged to the console when the following code is executed:
  ${'```js'}
  class Foo {
    constructor(x) {
        this.x = x;
    }
    
    print() {
        console.log("Foo:", this.x);
    }
  }

  class Bar extends Foo {
    constructor(x, y) {
        super(x);
        this.y = y;
    }
    
    print() {
        super.print();
        console.log("Bar:", this.y);
    }
  }

  const b = new Bar(3, 6);
  b.print();
  ${'```'}  
    `,
    questionId: '4EqnUQUkygJqY5UKHxtn',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`Foo: 3` / `Bar: 6`',
        id: 0
      },
      {
        text: '`Foo: 3`',
        id: 1
      },
      {
        text: '`Bar: 6`',
        id: 2
      },
      {
        text: '`Foo: undefined` / `Bar: 6`',
        id: 0
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#extends-and-super',
    explanation: 'In the constructor, `super` automatically refers to the "parent constructor," which in the previous example is `Foo(..)`. In a method, it refers to the "parent object," such that you can then make a property/method access off it, such as `super.print()`.'
  },
  {
    question: `What will be logged to the console when the following code is executed:
  ${'```js'}
  class Foo { ... }
  class Bar extends Foo { ... }

  console.log(Foo.isPrototypeOf(Bar));
  ${'```'}  
    `,
    questionId: 'besUBcT6bV1wfwtSBDVU',
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
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#extends-and-super',
    explanation: '`Bar extends Foo` of course means to link the [[Prototype]] of `Bar.prototype` to `Foo.prototype`'
  },
  {
    question: 'Constructors are required for both classes and subclasses',
    questionId: '0GYPOWUafAo5iy4oQP3w',
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
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#subclass-constructor',
    explanation: 'Constructors are not required for classes or subclasses; a default constructor is substituted in both cases if omitted. Furthermore, the default subclass constructor automatically calls the parent constructor, and passes along any arguments.'
  },
  {
    question: 'In a constructor of a subclass, you cannot access `this` until `super(..)` has been called.',
    questionId: '9qL7lby91xMvLOY5Exqa',
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
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#subclass-constructor',
    explanation: 'The reason is nuanced and complicated, but it boils down to the fact that the parent constructor is actually the one creating/initializing your instance\'s `this`, which you cannot access before it is actually created.'
  },
  {
    question: `What will be logged to the console when the following code is executed:
  ${'```js'}
  class Foo {
    static cool() { console.log( "cool" ); }
    wow() { console.log( "wow" ); }
  }

  class Bar extends Foo {
    static awesome() {
      super.cool();
      console.log( "awesome" );
    }
    neat() {
      super.wow();
      console.log( "neat" );
    }
  }
  
  var b = new Bar();
  b.awesome();
  ${'```'}
  `,
    questionId: 'N5NPIIiqCNQKya1qaIVA',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`TypeError`',
        id: 0
      },
      {
        text: '`"cool"` / `"awesome"`',
        id: 1
      },
      {
        text: '`undefined`',
        id: 2
      },
      {
        text: '`undefined` / `"awesome"`',
        id: 3
      }
    ],
    correctAnswerId: 0,
    moreInfoUrl: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#static',
    explanation: "Be careful not to get confused that static members are on the class's prototype chain.They're actually on the dual/parallel chain between the function constructors."
  }
];

export default Ch3Questions;
