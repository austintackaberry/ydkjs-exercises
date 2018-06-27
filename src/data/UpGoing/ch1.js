const Ch1Questions = [
  {
    question:
      'How many expressions are in the following statement: a = b * 2; ?',
    orderedById: true,
    answers: [
      { text: 'one', id: 0 },
      { text: 'two', id: 1 },
      { text: 'three', id: 2 },
      { text: 'four', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#expressions',
    explanation: `This statement has four expressions in it:
      2 is a literal value expression; 
      b is a variable expression, which means to retrieve its current value; 
      b * 2 is an arithmetic expression, which means to do the multiplication; 
      a = b * 2 is an assignment expression, which means to assign the result of the b * 2 expression to the variable a.`,
  },
  {
    question: 'What is a computer program (source code / code)?',
    orderedById: false,
    answers: [
      {
        text:
          'A set of special instructions to tell the computer what tasks to perform.',
        id: 0,
      },
      { text: 'A planned series of future events or performances.', id: 1 },
      {
        text:
          'A sheet or booklet giving details of items or performers at an event or performance.',
        id: 2,
      },
      { text: 'A plan of action to accomplish a specified end.', id: 3 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#code',
    explanation: `A program, often referred to as source code or just code, is a set of special instructions to tell the computer what tasks 
      to perform. Usually code is saved in a text file, although with JavaScript you can also type code directly into a developer 
      console in a browser.`,
  },
  {
    question: 'What is a computer language (syntax)?',
    orderedById: false,
    answers: [
      {
        text:
          'The arrangement of words and phrases to create well-formed sentences.',
        id: 0,
      },
      {
        text: 'The rules for valid format and combinations of instructions.',
        id: 1,
      },
      { text: 'The use of words in a structured and conventional way.', id: 2 },
      { text: 'A system of communication.', id: 3 },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#code',
    explanation: `The rules for valid format and combinations of instructions is called a computer language, sometimes referred to as its syntax, 
      much the same as English tells you how to spell words and how to create valid sentences using words and punctuation.`,
  },
  {
    question: 'What is an expression?',
    orderedById: false,
    answers: [
      { text: "The action of making known one's thoughts or feelings.", id: 0 },
      { text: 'Values that are included directly in the source code.', id: 1 },
      {
        text:
          'Any reference to a variable or value OR a set of variable(s) and value(s) combined with operators.',
        id: 2,
      },
      {
        text: 'A statement that performs actions with values and variables.',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#expressions',
    explanation: `Statements are made up of one or more expressions. 
      An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators.`,
  },
  {
    question: 'Interpreting the code is when... ?',
    orderedById: false,
    answers: [
      { text: 'Changes to values are tracked as your program runs.', id: 0 },
      {
        text:
          'Actions are performed with values and variables such as assignment and mathematic multiplication.',
        id: 1,
      },
      {
        text:
          "The translation of commands is done ahead of time so when the program is executed, what's running is the already translated computer instructions.",
        id: 2,
      },
      {
        text:
          'Translation of commands is typically done from top to bottom, line by line, every time the program is run.',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#executing-a-program',
    explanation: `Statements like a = b * 2 are helpful for developers when reading and writing, but are not actually in a form the computer can 
      directly understand. So a special utility on the computer (either an interpreter or a compiler) is used to translate the code you 
      write into commands a computer can understand.
      For some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program
       is run, which is usually called interpreting the code.`,
  },
  {
    question: 'Compiling is when... ?',
    orderedById: false,
    answers: [
      {
        text:
          "The translation of commands is done ahead of time so when the program is executed, what's running is the already translated computer instructions.",
        id: 0,
      },
      { text: 'Changes to values are tracked as your program runs.', id: 1 },
      {
        text:
          'Actions are performed with values and variables such as assignment and mathematic multiplication.',
        id: 2,
      },
      {
        text:
          'Translation of commands is typically done from top to bottom, line by line, every time the program is run.',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#executing-a-program',
    explanation: `It's typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time it's run. 
      But that's not entirely accurate. The JavaScript engine actually compiles the program on the fly and then immediately runs the 
      compiled code.`,
  },
];

export default Ch1Questions;
