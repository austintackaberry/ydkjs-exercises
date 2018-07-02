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
      'In a traditional compiled-language process, what is the correct order of the three main steps a program will undergo before executing?',
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
    question: 'What is Parsing?',
    orderedById: false,
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
    orderedById: false,
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
    orderedById: false,
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
    explanation: `LHS stands for "left hand side", and RHS stands for "right hand side". For a = b, the RHS looks for the value of b, and the LHS looks for the location of "a" in memory, so that it can update its value.`,
  },
  {
    question: `How many LHS look-ups are in the code below:
    function foo(a) {
      var b = a;
      return a + b;
    }
    
    var c = foo( 2 );
    
    `,
    orderedById: true,
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
    explanation: `c = .., a = 2 (implicit param assignment) and b = ..`,
  },
  {
    question: `How many RHS look-ups are in the code below:
    function foo(a) {
      var b = a;
      return a + b;
    }
    
    var c = foo( 2 );
    
    `,
    orderedById: true,
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
    explanation: `foo(2.., = a;, a + .. and .. + b`,
  },
  {
    question: `If an RHS look-up fails to find a variable, what kind of error is thrown?`,
    orderedById: false,
    answers: [
      {
        text: 'SyntaxError',
        id: 0,
      },
      {
        text: 'ReferenceError',
        id: 1,
      },
      {
        text: 'TypeError',
        id: 2,
      },
      {
        text: 'EvalError',
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
