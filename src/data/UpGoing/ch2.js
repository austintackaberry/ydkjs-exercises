const Ch2Questions = [
  {
    question: 'Which of the following are ALL built-in types of values?',
    questionId: 'leOlkX8knO7YPxijZryq',
    shouldBeRandomized: false,
    answers: [
      { text: 'string, operator, boolean', id: 0 },
      { text: 'object, number, null', id: 1 },
      { text: 'boolean, scope, number', id: 2 },
      { text: 'undefined, string literal, object', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#values--types',
    explanation: `JavaScript has typed values, not typed variables. The following built-in types are available:
            string, number, boolean, null and undefined, object, symbol (new to ES6)`,
  },
  {
    question:
      'What is the operator that can be used to find out the type of a value?',
    questionId: 'IUAAVvd4jgoDxIs8cQih',
    shouldBeRandomized: false,
    answers: [
      { text: '`var`', id: 0 },
      { text: '`obj`', id: 1 },
      { text: '`typeof`', id: 2 },
      { text: '`return`', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#values--types',
    explanation: `JavaScript provides a typeof operator that can examine a value and tell you what type it is.
             The return value from the typeof operator is always one of six (seven as of ES6! - the "symbol" type) string values.
             That is, typeof "abc" returns "string", not string.`,
  },
  {
    question: 'What is the return value of: `typeof null`?',
    questionId: 'ejGyTF0mYJ1Z90lnzk55',
    shouldBeRandomized: false,
    answers: [
      { text: '`boolean`', id: 0 },
      { text: '`object`', id: 1 },
      { text: '`undefined`', id: 2 },
      { text: '`number`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#values--types',
    explanation:
      'typeof null is an interesting case, because it errantly returns "object", when you&#39;d expect it to return "null" (just like `typeof undefined` returns `undefined`). You can run this command in your console and see for yourself.',
  },
  {
    question:
      "What is the return value of: `typeof [1,2,3] === typeof {val: 'a', val: 'b', val: 'c'};` ?",
    questionId: '6jXvxXQQTnwPLsSayrJS',
    shouldBeRandomized: false,
    answers: [
      { text: 'true', id: 0 },
      { text: 'false', id: 1 },
      { text: 'undefined', id: 2 },
      { text: 'Syntax error', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#arrays',
    explanation:
      'Arrays are special objects, so the typeof of both expressions are objects and the return value is `true`. Run both expressions in your console to see that the return value of `typeof [1,2,3]` and `typeof {1, 2, 3}` is object.',
  },
  {
    question: 'In which ways can properties be accessed in an object?',
    questionId: 'm3SMrBwpfwBRFfuQFJHy',
    shouldBeRandomized: false,
    answers: [
      { text: 'with dot notation OR bracket notation', id: 0 },
      { text: 'by the values corresponding to the properties', id: 1 },
      { text: "with the object's prototype", id: 2 },
      { text: 'the same as in an array', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#objects',
    explanation: `Properties can either be accessed with dot notation (i.e., obj.a) or bracket notation (i.e., obj["a"]).
            Dot notation is shorter and generally easier to read, and is thus preferred when possible.`,
  },
  {
    question: 'What is the main difference between an array and an object?',
    questionId: 'xm1TjaXENJRwsPW9WVBj',
    shouldBeRandomized: false,
    answers: [
      { text: 'the maximum length of values they can hold', id: 0 },
      { text: 'positions in arrays begin from 0 and in objects from 1', id: 1 },
      {
        text:
          'arrays hold values with indexed positions instead of key/value pairs',
        id: 2,
      },
      {
        text:
          'anything can be stored in objects but only strings and numbers in an array',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#arrays',
    explanation: `An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically
            indexed positions. Languages that start counting at zero, like JS does, use 0 as the index of the first element in the array.`,
  },
  {
    question: 'Which of the following is an array property?',
    questionId: 'UES97vdZK2mmm8ToaH6F',
    shouldBeRandomized: false,
    answers: [
      { text: 'values', id: 0 },
      { text: 'count', id: 1 },
      { text: 'limit', id: 2 },
      { text: 'length', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#arrays',
    explanation: `Because arrays are special objects (as typeof implies), they can also have properties, including the automatically
            updated length property.`,
  },
  {
    question: 'What is the most appropriate use of an object?',
    questionId: 'QKS6JMErKG7gBovreaea',
    shouldBeRandomized: false,
    answers: [
      { text: 'to have numeric properties (keys)', id: 0 },
      { text: 'to only store strings', id: 1 },
      { text: 'to hold pairs of named properties and values', id: 2 },
      { text: 'to find out the count of properties', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#arrays',
    explanation: `You theoretically could use an array as a normal object with your own named properties, or you could use an object but
            only give it numeric properties (0, 1, etc.) similar to an array. However, this would generally be considered improper
            usage of the respective types. The best and most natural approach is to use arrays for numerically positioned values
            and use objects for named properties.`,
  },
  {
    question:
      'What are the types of coercion (conversion from one type to another)?',
    questionId: '2UBMmJJRCxauBzqOivcs',
    shouldBeRandomized: false,
    answers: [
      { text: 'natural and unnatural', id: 0 },
      { text: 'implicit and explicit', id: 1 },
      { text: 'normal and abnormal', id: 2 },
      { text: 'equal and unequal', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#coercion',
    explanation: `Coercion comes in two forms in JavaScript: explicit and implicit. Explicit coercion is simply that you can see
            obviously from the code that a conversion from one type to another will occur, whereas implicit coercion is when the
            type conversion can happen as more of a non-obvious side effect of some other operation.`,
  },
  {
    question:
      'Which of these next statments is an implicit coercion (conversion from one type to another)?',
    questionId: 'KVa9gyVWvT9ymLmIeeGm',
    shouldBeRandomized: false,
    answers: [
      { text: '`var b = Number( "5" );`', id: 0 },
      { text: '`var b = "5" * 1;`', id: 1 },
      { text: '`var b = "Hello, world" * 1;`', id: 2 },
      { text: '`var b = String( 5 );`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#coercion',
    explanation: `Implicit coercion is when the type conversion can happen as more of a non-obvious side effect of some other operation, 
    such as multiplication by 1 in the second answer.`,
  },
  {
    question:
      'If `var a = 42` and `var b = "42"`, what will the statements `a === b` AND `a == b` return?',
    questionId: 'w5G9jSN6Hj9UD4VcfsFV',
    shouldBeRandomized: false,
    answers: [
      { text: '`true` / `true`', id: 0 },
      { text: '`false` / `true`', id: 1 },
      { text: '`true` / `false`', id: 2 },
      { text: '`false` / `false`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#equality',
    explanation:
      '`==` checks for value equality with coercion allowed, and `===` checks for value equality without allowing coercion; `===` is often called "strict equality" for this reason. In the `a == b` comparison, JS notices that the types do not match, so it goes through an ordered series of steps to coerce one or both values to a different type until the types match, where then a simple value equality can be checked. The `a === b` produces false, because the coercion is not allowed, so the simple value comparison obviously fails. ',
  },
  {
    question:
      'What happens when you assign a variable that has not yet been declared?',
    questionId: 'hq6prlUl9zMipsNYvvwZ',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          'it is automatically declared and hoisted to the top of its scope',
        id: 0,
      },
      { text: 'it becomes available only in inner/lower scopes', id: 1 },
      {
        text: 'it is automatically created in the top-level global scope',
        id: 2,
      },
      { text: 'it makes the code easier to maintain', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#nested-scopes',
    explanation: `If you try to set a variable that hasn't been declared, you'll either end up creating a variable in the top-level global
            scope (bad!) or getting an error, depending on "strict mode" (see "Strict Mode").`,
  },
  {
    question:
      'In which of these cases would we probably be safe using == rather than === for comparison?',
    questionId: 'XGobn8UO1CAa0GGempf4',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          'If either value (aka side) in a comparison could be the `true` or `false` value.',
        id: 0,
      },
      { text: 'If either value in a comparison could be `0`.', id: 1 },
      {
        text: 'If either value in a comparison could be `undefined`.',
        id: 2,
      },
      {
        text:
          'If either value in a comparison could be an empty string `""` or an empty array `[]`.',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#equality',
    explanation:
      'You should avoid using `==` and use `===` in these incidents: (1) If either value (aka side) in a comparison could be the `true` or `false` value. (2) If either value in a comparison could be of these specific values: `0`, `""`, or `[]` -- empty array.  In all other cases, you&#39;re safe to use `==`. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.',
  },
  {
    question:
      'If `a === 5`, which of the following is a correct use of the ternary operator and returns `true`?',
    questionId: 'eJGjIHoFLjFgwBCVMfE0',
    shouldBeRandomized: false,
    answers: [
      { text: '`a < 20 ? true : false`', id: 0 },
      { text: '`a < 20 : false ? true`', id: 1 },
      { text: '`a < 20 : true : false`', id: 2 },
      { text: '`a < 20 ? false : true`', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#conditionals',
    explanation:
      'Another form of conditional in JavaScript is the "conditional operator," often called the "ternary operator. It&#39;s like a more concise form of a single `if`..`else` statement. If the test expression evaluates as `true`, the first clause `true` results, otherwise the second clause `false` results.',
  },
  {
    question: 'Which of these next variable names is NOT a valid identifier?',
    questionId: 'aaLv016yFLO62Wg8NMIe',
    shouldBeRandomized: false,
    answers: [
      { text: '`var counter;`', id: 0 },
      { text: '`var _sumOf5;`', id: 1 },
      { text: '`var 5thItem;`', id: 2 },
      { text: '`var $amount;`', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#variables',
    explanation: `An identifier must start with a-z, A-Z, $, or _. 
    It can then contain any of those characters plus the numerals 0-9.`,
  },
  {
    question: 'Which of these next statements is true about scopes?',
    questionId: 'syt9S06LI4zL2sdXamxq',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          'When you declare a variable, it is only available anywhere in that scope.',
        id: 0,
      },
      {
        text:
          'When you declare a variable, it is available anywhere in that scope, as well as any sibling scopes.',
        id: 1,
      },
      {
        text:
          'When you declare a variable, it is available anywhere in that scope, as well as any upper/outer scopes.',
        id: 2,
      },
      {
        text:
          'When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes.',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#nested-scopes',
    explanation: `When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes.
    This means that if you declare a function within a function, the outer function is able to access the vairables declared inside it's child function. 
    However, the child/inner function cannot access it's parent/outer function's scope.`,
  },
  {
    question:
      "What will happen if you try to access a variable's value in a scope where it's not available?",
    questionId: 'FI4eixvGsXC1CcVfk9EU',
    shouldBeRandomized: false,
    answers: [
      { text: '`SyntaxError`', id: 0 },
      { text: '`ReferenceError`', id: 1 },
      { text: '`InternalError`', id: 2 },
      { text: '`TypeError`', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#nested-scopes',
    explanation: `If you try to access a variable's value in a scope where it's not available, you'll get a ReferenceError thrown.
    The ReferenceError object represents an error when a non-existent variable is referenced.
    If you try to set a variable that hasn't been declared, you'll either end up creating a variable in the top-level global scope (bad!) or getting an error (depending on "strict mode"). 
    You can try this out in your console, and see for yourself.`,
  },
  {
    question: 'Which of these statements is NOT true about strict mode?',
    questionId: 'ui7eyeSaCe31okGiUO0k',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          'ES5 added a "strict mode" to the language, which is seen as keeping the code to a safer and more appropriate set of guidelines.',
        id: 0,
      },
      {
        text:
          'One key difference (improvement!) with strict mode is disallowing the implicit auto-global variable declaration from omitting the `var`.',
        id: 1,
      },
      {
        text:
          'To invoke strict mode for an entire script, put the exact statement `use strict mode`; (or `use strict mode;`) before any other statements.',
        id: 2,
      },
      {
        text:
          'You can opt in to strict mode for an individual function, or an entire file, depending on where you put the strict mode pragma.',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#strict-mode',
    explanation:
      'To invoke strict mode for an entire script, put the exact statement `use strict`;',
  },
  {
    question:
      'Which of the lines below will print `"Hello"` to the console when executed?',
    questionId: 'pdnSBOr7Cy4Q6TeZeOpI',
    shouldBeRandomized: false,
    answers: [
      { text: '`(function (){ console( "Hello!" ); })();`', id: 0 },
      { text: '`function (){ console.log( "Hello!" ); }();`', id: 1 },
      { text: '`function (){ console.log( "Hello!" ); }`', id: 2 },
      { text: '`(function (){ console.log( "Hello!" ); })();`', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#immediately-invoked-function-expressions-iifes',
    explanation:
      'Immediately Invoked Function Expressions (IIFE) is a way to execute a function expression. It requires an outer set of parentheses `( .. )` that surrounds the function expression. It also requires a final set of parentheses at the end of the expression, which is what actually executes the function expression referenced immediately before it.',
  },
  {
    question: 'What is Polyfilling?',
    questionId: '7Ol2G2u5bzLOHlVt8mLq',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          'Taking the definition of a newer feature and producing code that offers equivalent behavior, but is able to run in newer JS environments.',
        id: 0,
      },
      {
        text:
          'Taking the definition of a newer feature and producing code that offers equivalent behavior, but is able to run in older JS environments.',
        id: 1,
      },
      {
        text:
          'A way to "remember" and continue to access the scope of a function (its variables) even once the function has finished running.',
        id: 2,
      },
      {
        text:
          'A way to "remember" and continue to access the scope of a function (its variables) even before the function started running.',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#polyfilling',
    explanation: `The word "polyfill" is an invented term used to refer to taking the definition of a newer feature and producing a piece of code that's equivalent to the behavior, but is able to run in older JS environments.
    For example, ES6 defines a utility called Number.isNaN(..) to provide an accurate non-buggy check for NaN values, deprecating the original isNaN(..) utility. 
    But it's easy to polyfill that utility so that you can start using it in your code regardless of whether the end user is in an ES6 browser or not.`,
  },
  {
    question: 'What is Transpiling?',
    questionId: 'WbQGlDdR3y6TnyrvlqIk',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          'A way to define private implementation details (variables, functions), as well as a public API that is accessible from the outside.',
        id: 0,
      },
      {
        text:
          'A way to define public implementation details (variables, functions), as well as a private API that is not accessible to the outside.',
        id: 1,
      },
      {
        text:
          'Using a tool that converts your older code into newer code equivalents.',
        id: 2,
      },
      {
        text:
          'Using a tool that converts your newer code into older code equivalents.',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#transpiling',
    explanation: `Transpiling is using a tool that converts your newer code into older code equivalents. The term combines the terms for transforming + compiling. 
    Essentially, your source code is authored in the new syntax form, but what you deploy to the browser is the transpiled code in old syntax form. 
    You typically insert the transpiler into your build process, similar to your code linter or your minifier.`,
  },
  {
    question:
      'Which of the following expressions is controlled by JavaScript specification?',
    questionId: 'g05Klu0UEqgXh9BLBY8c',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`var el = document.getElementById( "foo" );`',
        id: 0,
      },
      {
        text: '`console.log("Hello World!");`',
        id: 1,
      },
      {
        text: '`alert(document.URL);`',
        id: 2,
      },
      {
        text: '`var a = Object.assign({}, { foo : "bar"})`',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#non-javascript',
    explanation: `The document variable exists as a global variable when your code is running in a browser. It's not provided by the JS engine, nor is it particularly controlled by the JavaScript specification.
    Similarly alert(..) and console.log(..) is provided to your JS program by the browser, not by the JS engine itself. The call you make sends the message to the browser internals and it handles drawing, displaying the message box or logging the message to console. 
    `,
  },
];

export default Ch2Questions;
