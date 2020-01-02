const Ch1Questions = [
  {
    question:
      'How many expressions are there in the following statement: `a = b * 2;` ?',
    questionId: 'Wdbb9JW9sN2oYU1dcTHB',
    shouldBeRandomized: false,
    answers: [
      { text: 'One', id: 0 },
      { text: 'Two', id: 1 },
      { text: 'Three', id: 2 },
      { text: 'Four', id: 3 },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#expressions',
    explanation: `This statement has four expressions in it:
      2 is a literal value expression;
      b is a variable expression, which means to retrieve its current value;
      b \\* 2 is an arithmetic expression, which means to do the multiplication;
      a = b \\* 2 is an assignment expression, which means to assign the result of the b \\* 2 expression to the variable a.`,
  },
  {
    question: 'What is a computer program (source code / code)?',
    questionId: '0kMgoiRFhdMGoZGPREgy',
    shouldBeRandomized: true,
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

    explanation: `A program, often referred to as source code or just code, is a set of special instructions to tell the computer what tasks
      to perform. Usually code is saved in a text file, although with JavaScript you can also type code directly into a developer
      console in a browser.`,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#code',
  },
  {
    question: 'What is a computer language (syntax)?',
    questionId: 'arLlte0WGjBfHdtP4cc3',
    shouldBeRandomized: true,
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
    explanation: `The rules for valid format and combinations of instructions is called a computer language, sometimes referred to as its syntax,
    much the same as English tells you how to spell words and how to create valid sentences using words and punctuation.`,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#code',
  },
  {
    question: 'What is an expression?',
    questionId: 'SyrKBdRNm8qnRnMBbbIq',
    shouldBeRandomized: true,
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
    explanation: `Statements are made up of one or more expressions.
    An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators.`,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#expressions',
  },
  {
    question: 'Interpreting the code is when... ?',
    questionId: 'DdMUZgJYx4MWFIDrvERZ',
    shouldBeRandomized: true,
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
    explanation: `Statements like a = b \\* 2 are helpful for developers when reading and writing, but are not actually in a form the computer can
      directly understand. So a special utility on the computer (either an interpreter or a compiler) is used to translate the code you
      write into commands a computer can understand.
      For some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program
      is run, which is usually called interpreting the code.`,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#executing-a-program',
  },
  {
    question: 'Compiling is when... ?',
    questionId: 'vUTGAhPHQ04YbJyL2bIn',
    shouldBeRandomized: true,
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
    explanation: `It's typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time it's run.
      But that's not entirely accurate. The JavaScript engine actually compiles the program on the fly and then immediately runs the
      compiled code.`,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#executing-a-program',
  },
  {
    question:
      'Which of these next expressions has exactly one literal value, one variable, and one operator?',
    questionId: 'WXDAKz3JrrVyrZ9jyvKT',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`var even = 4;`',
        id: 0,
      },
      {
        text: '`var farm = "cat" + "dog" + "cow";`',
        id: 1,
      },
      {
        text: '`var newCounter = oldCounter + 1;`',
        id: 2,
      },
      {
        text: '`var bool = 5 > minimum;`',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#statements',
    explanation:
      'Characters like `=` and `*` are called operators. They perform actions with the values and variables such as assignment and mathematic multiplication. Variables are like simple boxes you can store any of your stuff in, and should be declared before they are used. In programs, variables hold values to be used by the program. By contrast to variables, literal values are the value itself. For example, `4` or `"cat"` is a literal value. In other words, it stands alone without being stored in a variable.',
  },
  {
    question:
      'Which of these next statements is NOT true about `alert()` and `console.log()`? Remember, you can open the console in your browser and experiment.',
    questionId: 'O5a9FcYfysMIlnCglUfK',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'Using `alert()` will block your user from interacting with your web page until the alert is closed.',
        id: 0,
      },
      {
        text: 'The user cannot view more than one `alert()` message at a time.',
        id: 1,
      },
      {
        text:
          'The user cannot view more than one `console.log()` message at a time.',
        id: 2,
      },
      {
        text:
          '`console.log()` statements often have an interactive pointer to the line of code that issued the logged statement.',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#output',
    explanation:
      'This statement is not true, because the console can display many `log()` messages simultaneously (unlike the `alert()` method, which only displays one at a time). This is what makes `console.log()` a great tool for debugging your code, and for finding out what&#39;s going on under the hood.',
  },
  {
    question: 'Which is the correct way to get input from the user?',
    questionId: 'JKQnIvClbwetSWw9L09F',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`var name = console.log("What is your name? ");`',
        id: 0,
      },
      {
        text: '`var name = alert("What is your name? ");`',
        id: 1,
      },
      {
        text: '`var name = console.get("What is your name? ");`',
        id: 2,
      },
      {
        text: '`var name = prompt("What is your name? ");`',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#input',
    explanation:
      'The `prompt()` method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page. The `prompt()` method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns `null`.',
  },
  {
    question:
      'Fill in the blanks: In the expression `var num = 20; `, the operator `=` is used to ______ the literal value `20` to the _______ `num`. The keyword `var` is used to _______ the variable. ',
    questionId: 'zRcsGCwSLJGzFuxbIbrD',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'assign, variable, declare',
        id: 0,
      },
      {
        text: 'assign, variable, increase',
        id: 1,
      },
      {
        text: 'declare, variable, introduce',
        id: 2,
      },
      {
        text: 'introduce, variable, declare',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#operators',
    explanation:
      'In the expression `var num = 20; `, the operator `=` is used to assign the literal value `20` to the variable `num`. The keyword `var` is used to declare the variable. ',
  },
  {
    question: 'Which of these next expressions is NOT a compound assignment?',
    questionId: '6MbAIQi1P0UgAazCImSM',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`var even *= 2; `',
        id: 0,
      },
      {
        text: '`var counter += 1; `',
        id: 1,
      },
      {
        text: '`var diff -= 2; `',
        id: 2,
      },
      {
        text: '`b == a; `',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#operators',
    explanation:
      'Compound Assignment examples: `-=`, `*=`, and `+=` are compound operators that combine a math operation with assignment, as in `a += 2` (same as `a = a + 2`). The double equal sign `==` is used to check equality.',
  },
  {
    question:
      'Which of these next equations will output the boolean value `false`? Remember, you can open the console in your browser and experiment.',
    questionId: 'JdFJJbwrqFkeuJIKI8rM',
    shouldBeRandomized: true,
    answers: [
      {
        text: '`99 === Number("99"); `',
        id: 0,
      },
      {
        text: '`-"99" == 99; `',
        id: 1,
      },
      {
        text: '`-"99" == -99.00; `',
        id: 2,
      },
      {
        text: '`99 == "99.00"; `',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#converting-between-types',
    explanation:
      'When we use the`==` loose equals operator to make the comparison like `"99.00" == 99.00`, JavaScript will convert the left-hand side `"99.00"` to its number equivalent `99.00`. The comparison then becomes `99.00 == 99.00`, which is of course `true`. This is even true when the negative sign is outside of the double quotes, like so: `-"99" == -99.00`; . However, comparing negative and positive values returns false even when using the loose equals `==`.',
  },
  {
    question: 'Which of these next statements is false?',
    questionId: 'WfYtOiRdq3ka12suPaZi',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'The if statement requires an expression that can be treated as either `true` or `false`. ',
        id: 0,
      },
      {
        text:
          'You can provide an alternative if the condition is not `true`, called an else clause.',
        id: 1,
      },
      {
        text:
          'JavaScript defines a list of specific values that are considered "falsy" (e.g: `0`, `""`). Any other value not on the "falsy" list is automatically "truthy" (e.g: `99.99`, `"free"`)',
        id: 2,
      },
      {
        text:
          'The code: `if true { console.log("this is true!"); }` is written in valid syntax and will print out the string.',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#conditionals',
    explanation:
      'JavaScript requires wrapping the conditional in parentheses, otherwise it returns a syntax error. You can test this by running the code `if true { console.log("this is true!"); }` in your browser console. Remember to also try running the same code with parentheses around the conditional.',
  },
  {
    question:
      'Which of these next statements is NOT an example of how functions improve our code?',
    questionId: 'tLjdPnckzEpzxDj4bs9C',
    shouldBeRandomized: true,
    answers: [
      {
        text:
          'Functions allow us to split our code into reusable pieces which saves time and energy.',
        id: 0,
      },
      {
        text: 'Functions make our code more readable.',
        id: 1,
      },
      {
        text:
          'Each function gets its own scope, which includes a collection of variables as well as the rules for how those variables are accessed. This allows us to be in better control of our variables and prevent bugs.',
        id: 2,
      },
      {
        text:
          'All functions use loops (for, while, or do...while), which shorten our code significantly. ',
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#functions',
    explanation: `A function does not have to include a loop in order to save us time and make our code more readable.
      Some functions only have one line of code, for example console.log() (as shown in the chapter's examples)`,
  },
  {
    question:
      'Fill in the blank: You need _______ to perform actions on values.',
    questionId: 'f2v9MPqpQs0JEaMnVJjS',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'operators',
        id: 0,
      },
      {
        text: 'values',
        id: 1,
      },
      {
        text: 'types',
        id: 2,
      },
      {
        text: 'variables',
        id: 3,
      },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#statements',
    explanation: `The =, +, /, and * characters are examples of operators.
    They perform actions with the values and variables such as assignment, summation, division and mathematic multiplication.`,
  },
  {
    question:
      'Fill in the blank: You need _______ to store data (aka state) during the execution of your program.',
    questionId: 'Lm2dlA3e3Kr5cHhfa1Eg',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'loops',
        id: 0,
      },
      {
        text: 'functions',
        id: 1,
      },
      {
        text: 'variables',
        id: 2,
      },
      {
        text: 'if statements',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#statements',
    explanation: `Variables are like simple boxes you can store any of your stuff in.
    In programs, variables hold values (like the number 42) to be used by the program.
    Think of them as symbolic placeholders for the values themselves.`,
  },
  {
    question: 'You need _______ like _______ to make decisions.',
    questionId: 'HO6TLxfyBRvysdmA72RR',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'loops, do...while',
        id: 0,
      },
      {
        text: 'functions, scope',
        id: 1,
      },
      {
        text: 'conditionals, if statements',
        id: 2,
      },
      {
        text: 'strings, "Hello, Worlds"',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#conditionals',
    explanation: `Conditionals are just simple "yes or no" questions used to make decisions.
    Does my account have enough balance to purchase this?. The most common conditional is an if statement.`,
  },
  {
    question:
      'You need _______ to repeat tasks until a condition stops being true.',
    questionId: '5inbO1OYyYBMNkdvqGnF',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'variables',
        id: 0,
      },
      {
        text: 'loops',
        id: 1,
      },
      {
        text: 'conditionals',
        id: 2,
      },
      {
        text: 'operators',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#loops',
    explanation: `Repeating a set of actions until a certain condition fails -- in other words, repeating only while the condition holds --
    is the job of programming loops. Loops can take different forms, but they all satisfy this basic behavior.`,
  },
  {
    question:
      'You need _______ to organize your code into logical and reusable chunks.',
    questionId: 'OaslHejOxZmz4rfKSfGz',
    shouldBeRandomized: true,
    answers: [
      {
        text: 'conditionals',
        id: 0,
      },
      {
        text: 'loops',
        id: 1,
      },
      {
        text: 'functions',
        id: 2,
      },
      {
        text: 'operators',
        id: 3,
      },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#functions',
    explanation: `A function is generally a named section of code that can be "called" by name, and the code inside it will be run each time.
    Functions are often used for code that you plan to call multiple times, but they can also be useful just to organize related bits of code into named collections, even if you only plan to call them once.`,
  },
];

export default Ch1Questions;
