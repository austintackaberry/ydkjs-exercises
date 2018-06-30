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
];

export default Ch1Questions;
