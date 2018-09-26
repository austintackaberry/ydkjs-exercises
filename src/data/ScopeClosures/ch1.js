const Ch1Questions = [
  {
    question: 'What gives a program state?',
    questionId: 'VZwCST0WyEIUQYvUE6KU',
    shouldBeRandomized: false,
    answers: [
      { text: 'The ability for a program to execute', id: 0 },
      { text: 'The abiliy for a program to be compiled', id: 1 },
      {
        text: 'The ability to store values and pull values out of variables',
        id: 2,
      },
      { text: 'The process of creating an Abstract Syntax Tree', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#chapter-1-what-is-scope',
    explanation: `A program is described as stateful if it is designed to remember preceding events or user interactions.
                    The remembered information is called the state. Without state, a program could perform some tasks, but
                    they would be extremely limited in functionality.`,
  },
  {
    question:
      'In a traditional compiled-language process, what is the correct order of the three main steps a program will undergo before executing?',
    questionId: 'jSYBDPCqlwv8ZrZGHvAw',
    shouldBeRandomized: false,
    answers: [
      { text: 'Tokenizing/Lexing, Parsing, Code-Generation', id: 0 },
      { text: 'Tokenizing/Lexing, Code-Generation, Parsing', id: 1 },
      { text: 'Parsing, Code-Generation, Tokenzing/Lexing', id: 2 },
      { text: 'Code-Generation, Tokenzing/Lexing, Parsing', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-theory',
    explanation: `Tokenizing/Lexing is the process of breaking up a string of characters into meaningful chunks called tokens.
                    Parsing is the act of taking a stream of tokens and turning it into a tree of nested elements which represent
                    the structure of the program. Code-Generation is the process of taking the tree and turning it into executable code.`,
  },
  {
    question:
      'In a traditional compiled-language process, during which phase is a string of characters broken into meaningful chunks?',
    questionId: 'jur05a1YBHYX85whROMF',
    shouldBeRandomized: false,
    answers: [
      { text: 'Code-generation phase', id: 0 },
      { text: 'Parsing phase', id: 1 },
      { text: 'Execution phase', id: 2 },
      { text: 'Tokenizing/Lexing phase', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-theory',
    explanation: `E. A string of characters is broken into meaningful chuncks during the tokenization/lexing phase. A token is a
                    string with an assigned meaning. It is structured as a pair consisting of a token name and optional token value.
                    Some common token names include: Identifiers, Keywords, Separators, operators, and literals.`,
  },
  {
    question: 'Which of the following is the responsibility of Scope?',
    questionId: 's9D398qeGLpug0SSfQOs',
    shouldBeRandomized: false,
    answers: [
      { text: 'Parsing and code-generation', id: 0 },
      {
        text:
          'Collecting and maintaining a look-up list of all declared variables ',
        id: 1,
      },
      {
        text:
          'Start-to-Finish compilation and execution of the javaScript prgoram',
        id: 2,
      },
      {
        text:
          'Taking a stream of tokens and turning it into a tree of nested elements',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#the-cast',
    explanation: `The Scope is responsible for maintaing a look-up list of all declared identifiers and enforcing a strict set of
                    rules as to how these are accessible to currently executing code.`,
  },
  {
    question:
      'Two distinct actions are taken for a variable assignment such as `var a = 2; `',
    questionId: 'dD9jisRqzgTC2oKTACTS',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          'Compiler declares a variable (if not previously declared) while simultaneously Engine looks up the variable in Scope and assigns to it, if found.',
        id: 0,
      },
      {
        text:
          'Compiler declares a variable regardless of whether or not it was previously declared, while simultaneously Engine looks up the variable in Scope and assigns to it.',
        id: 1,
      },
      {
        text:
          'First, Compiler declares a variable (if not previously declared in the current scope), and second, when executing, Engine looks up the variable in Scope and assigns to it, if found.',
        id: 2,
      },
      {
        text:
          'First, Engine declares a variable (if not previously declared in the current scope), and second, when executing, Compiler looks up the variable in Scope and assigns to it, if found.',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#back--forth',
    explanation: `Two distinct actions are taken for a variable assignment: First, Compiler declares a variable (if not previously declared in the current scope),
    and second, when executing, Engine looks up the variable in Scope and assigns to it, if found.`,
  },
  {
    question: 'Which of the statements below are true?',
    questionId: 'qKyC5jIwSluNdBgBodAW',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          'LHS and RHS meaning "left/right-hand side of an assignment" always literally mean "left/right side of the `=` assignment operator"',
        id: 0,
      },
      {
        text:
          'The reference to `a` in the statements `console.log( a );` and in `a = 2; ` is a LHS statement.',
        id: 1,
      },
      {
        text:
          'In `console.log( a );` the reference to `a` is an LHS reference, while in `a = 2; ` the reference to `a` is an RHS statement.',
        id: 2,
      },
      {
        text:
          'In `console.log( a );` the reference to `a` is an RHS reference, while in `a = 2; ` the reference to `a` is an LHS statement.',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-speak',
    explanation:
      'The reference to `a` in `console.log( a );` is an RHS reference, because nothing is being assigned to a here. By contrast, in `a = 2;` the reference to `a` is an LHS reference, because we don&#39;t actually care what the current value is. We simply want to find the variable as `a` target for the `= 2` assignment operation.',
  },
  {
    question:
      'Which of these next statements is true for traversing nested Scope?',
    questionId: 'gH3E86se9GXXpWJvxW2e',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          'Engine starts looking for a variable at the outermost global scope.',
        id: 0,
      },
      {
        text:
          'Engine starts looking for a variable at the innermost global scope.',
        id: 1,
      },
      {
        text:
          'If the variable was not found at the currently executing Scope, Engine keeps going down one level, and so on.',
        id: 2,
      },
      {
        text:
          'Engine starts looking for the variable at the currently executing Scope.',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#nested-scope',
    explanation: `Engine starts at the currently executing Scope, looks for the variable there, then if not found, keeps going up one level, and so on.
    If the outermost global scope is reached, the search stops, whether it finds the variable or not.`,
  },
  {
    question: 'Why does it matter whether we call it LHS or RHS?',
    questionId: 'F65nDl791y7QRfBSE7Tq',
    shouldBeRandomized: false,
    answers: [
      {
        text:
          'Because these two types of look-ups behave differently when the variable has been declared and assigned the value `undefined`.',
        id: 0,
      },
      {
        text:
          'Because these two types of look-ups behave differently when the variable has been declared on global Scope vs. the currently executing Scope.',
        id: 1,
      },
      {
        text:
          'Because these two types of look-ups behave differently when the variable has not yet been declared (is not found in any consulted Scope).',
        id: 2,
      },
      {
        text:
          'If an LHS look-up fails to ever find a variable, anywhere in the nested Scopes, this results in a `ReferenceError` being thrown by the Engine.',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#errors',
    explanation:
      'The names matter because these two types of look-ups behave differently in the circumstance where the variable has not yet been declared (is not found in any consulted Scope). If an RHS look-up fails to ever find a variable, this results in a `ReferenceError` being thrown by the Engine. By contrast, if the Engine is performing an LHS look-up and arrives at the top floor (global Scope) without finding it, and if the program is not running in "Strict Mode", then the global Scope will create a new variable of that name in the global scope.',
  },
  {
    question: 'What is Parsing?',
    questionId: 'FfDoQtMBOaFAyFmGBIDe',
    shouldBeRandomized: true,
    answers: [
      { text: 'Taking a string and converting it into tokens', id: 0 },
      {
        text:
          'Taking a stream of tokens and converting them into an abstract syntax tree ',
        id: 1,
      },
      {
        text:
          'Taking an abstract syntax tree and converting it into zeroes and ones',
        id: 2,
      },
      {
        text: 'Taking a string and converting it into assembly',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-theory',
    explanation: `Parsing is typically thought of as taking a string of text and making sense of it. However, the string of text is actually converted into tokens first. Parsing is actually taking the tokens and making them useful by converting them into an abstract syntax tree`,
  },
  {
    question: 'What is the responsibility of a JavaScript engine?',
    questionId: '9yhxzvgu71NjZhC46soN',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'Handling all the dirty work of parsing and code-generation',
        id: 0,
      },
      {
        text: 'Writing JavaScript code that is missing from the file',
        id: 1,
      },
      {
        text:
          'Start-to-finish compilation and execution of our JavaScript program',
        id: 2,
      },
      {
        text: 'Find all unused code and remove it before code generation',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#the-cast',
    explanation: `The engine is the entirety of what reads and executes your code. Each browser has their own engine as does Node (built on Chrome's V8 JavaScript engine).`,
  },
  {
    question: 'What is the difference between an LHS lookup and an RHS lookup?',
    questionId: 'qhtuUqyMS6d4r6F67wKx',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'LHS lookups search for variables whereas RHS search for values',
        id: 0,
      },
      {
        text:
          'LHS looks for assignment operator whereas RHS looks for the value to be assigned',
        id: 1,
      },
      {
        text:
          'LHS looks for the existence of a variable whereas RHS looks for the history of that variable',
        id: 2,
      },
      {
        text:
          'LHS looks for the variable container whereas RHS looks for the value of the variable',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-speak',
    explanation: `LHS stands for "left hand side", and RHS stands for "right hand side". For a = b, the RHS looks for the value of b, and the LHS looks for the location of a in memory, so that it can update its value.`,
  },
  {
    question: `How many LHS look-ups are in the code below:
${'```js'}
function foo(a){
  var b = a; 
  return a + b
}

var c = foo( 2 );
${'```'}
    `,
    questionId: 'qJye44oG77frNCWMzhKV',
    shouldBeRandomized: false,
    answers: [
      {
        text: '1',
        id: 0,
      },
      {
        text: '2',
        id: 1,
      },
      {
        text: '3',
        id: 2,
      },
      {
        text: '4',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#quiz-answers',
    explanation: '`c = ..`, `a = 2` (implicit param assignment) and `b = ..`',
  },
  {
    question: `How many RHS look-ups are in the code below:
${'```js'}
function foo(a){
  var b = a; 
  return a + b
}

var c = foo( 2 );
${'```'}
    `,
    questionId: 'VIlFAV1xDf5EBxW6hYGs',
    shouldBeRandomized: false,
    answers: [
      {
        text: '1',
        id: 0,
      },
      {
        text: '2',
        id: 1,
      },
      {
        text: '3',
        id: 2,
      },
      {
        text: '4',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.co/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#quiz-answers',
    explanation: '`foo(2..`, `= a;`, `a + ..` and `.. + b`',
  },
  {
    question: `If an RHS look-up fails to find a variable, what kind of error is thrown?`,
    questionId: 'vKlM2DHJyc8mpQORzeVV',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`SyntaxError`',
        id: 0,
      },
      {
        text: '`ReferenceError`',
        id: 1,
      },
      {
        text: '`TypeError`',
        id: 2,
      },
      {
        text: '`EvalError`',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#errors',
    explanation: `A ReferenceError is thrown when trying to dereference a variable that has not been declared. The only way for an RHS look-up to fail is if the variable has not been declared.`,
  },
];

export default Ch1Questions;
