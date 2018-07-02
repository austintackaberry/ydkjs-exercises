const Ch1Questions = [
  {
    question: 'What gives a program state?',
    orderedById: true,
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
      'In a traditional compiled-language process, what is the correct order of the three main steps a programwill undergo before executing?',
    orderedById: true,
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
    orderedById: true,
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
    orderedById: true,
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
      "Two distinct actions are taken for a variable assignment such as 'var a = 2; '",
    orderedById: true,
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
    question: 'Which of these next statements are true?',
    orderedById: true,
    answers: [
      {
        text:
          'LHS and RHS meaning "left/right-hand side of an assignment" always literally mean "left/right side of the = assignment operator"',
        id: 0,
      },
      {
        text:
          "The reference to 'a' in the statements 'console.log( a );' and in 'a = 2; ' is an LHS statement.",
        id: 1,
      },
      {
        text:
          "In 'console.log( a );' the reference to 'a' is an LHS reference, while in 'a = 2; ' the reference to 'a' is an RHS statement.",
        id: 2,
      },
      {
        text:
          "In 'console.log( a );' the reference to 'a' is an RHS reference, while in 'a = 2; ' the reference to 'a' is an LHS statement.",
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-speak',
    explanation: `The reference to 'a' in 'console.log( a );' is an RHS reference, because nothing is being assigned to a here.
    By contrast, in 'a = 2;' the reference to 'a' is an LHS reference, because we don't actually care what the current value is.
    We simply want to find the variable as 'a' target for the '= 2' assignment operation.`,
  },
  {
    question:
      'Which of these next statements is true for traversing nested Scope?',
    orderedById: true,
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
    orderedById: true,
    answers: [
      {
        text:
          'Because these two types of look-ups behave differently when the variable has been declared and assigned the value "undefined".',
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
          'If an LHS look-up fails to ever find a variable, anywhere in the nested Scopes, this results in a ReferenceError being thrown by the Engine.',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#errors',
    explanation: `The names matter because these two types of look-ups behave differently in the circumstance where the variable has not yet been declared 
    (is not found in any consulted Scope). If an RHS look-up fails to ever find a variable, this results in a ReferenceError being thrown by the Engine. 
    By contrast, if the Engine is performing an LHS look-up and arrives at the top floor (global Scope) without finding it, 
    and if the program is not running in "Strict Mode", then the global Scope will create a new variable of that name in the global scope.`,
  },
];

export default Ch1Questions;
