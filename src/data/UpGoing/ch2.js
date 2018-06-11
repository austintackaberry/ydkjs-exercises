const Ch2Questions = [
  {
    question: 'Which of the following are ALL built-in types of values?',
    orderedById: true,
    answers: [
      { text: 'string, operator, boolean', id: 0 },
      { text: 'object, number, null', id: 1 },
      { text: 'boolean, scope, number', id: 2 },
      { text: 'undefined, string literal, object', id: 3 },
    ],
    correctAnswerId: 1,
    explanation: `JavaScript has typed values, not typed variables. The following built-in types are available: 
            string, number, boolean, null and undefined, object, symbol (new to ES6)`,
  },
  {
    question:
      'What is the operator that can be used to find out the type of a value?',
    orderedById: true,
    answers: [
      { text: 'var', id: 0 },
      { text: 'obj', id: 1 },
      { text: 'typeof', id: 2 },
      { text: 'return', id: 3 },
    ],
    correctAnswerId: 2,
    explanation: `JavaScript provides a typeof operator that can examine a value and tell you what type it is.
             The return value from the typeof operator is always one of six (seven as of ES6! - the "symbol" type) string values. 
             That is, typeof "abc" returns "string", not string.`,
  },
  {
    question: 'In which ways can properties be accessed in an object?',
    orderedById: true,
    answers: [
      { text: 'with dot notation OR bracket notation', id: 0 },
      { text: 'by the values corresponding to the properties', id: 1 },
      { text: "with the object's prototype", id: 2 },
      { text: 'the same as in an array', id: 3 },
    ],
    correctAnswerId: 0,
    explanation: `Properties can either be accessed with dot notation (i.e., obj.a) or bracket notation (i.e., obj["a"]). 
            Dot notation is shorter and generally easier to read, and is thus preferred when possible.`,
  },
  {
    question:
      'What is the operator that can be used to find out the type of a value?',
    orderedById: true,
    answers: [
      { text: 'var', id: 0 },
      { text: 'obj', id: 1 },
      { text: 'typeof', id: 2 },
      { text: 'return', id: 3 },
    ],
    correctAnswerId: 2,
    explanation: `JavaScript provides a typeof operator that can examine a value and tell you what type it is.
             The return value from the typeof operator is always one of six (seven as of ES6! - the "symbol" type) string values. 
             That is, typeof "abc" returns "string", not string.`,
  },
  {
    question: 'What is the main difference between an array and an object?',
    orderedById: true,
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
    explanation: `An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically 
            indexed positions. Languages that start counting at zero, like JS does, use 0 as the index of the first element in the array.`,
  },
  {
    question: 'Which of the following is an array property?',
    orderedById: true,
    answers: [
      { text: 'values', id: 0 },
      { text: 'count', id: 1 },
      { text: 'limit', id: 2 },
      { text: 'length', id: 3 },
    ],
    correctAnswerId: 3,
    explanation: `Because arrays are special objects (as typeof implies), they can also have properties, including the automatically 
            updated length property.`,
  },
  {
    question: 'What is the most appropriate use of an object?',
    orderedById: true,
    answers: [
      { text: 'to have numeric properties (keys)', id: 0 },
      { text: 'to only store strings', id: 1 },
      { text: 'to hold pairs of named properties and values', id: 2 },
      { text: 'to find out the count of properties', id: 3 },
    ],
    correctAnswerId: 2,
    explanation: `You theoretically could use an array as a normal object with your own named properties, or you could use an object but 
            only give it numeric properties (0, 1, etc.) similar to an array. However, this would generally be considered improper 
            usage of the respective types. The best and most natural approach is to use arrays for numerically positioned values 
            and use objects for named properties.`,
  },
  {
    question:
      'What are the types of coercion (conversion from one type to another)?',
    orderedById: true,
    answers: [
      { text: 'natural and unnatural', id: 0 },
      { text: 'implicit and explicit', id: 1 },
      { text: 'normal and abnormal', id: 2 },
      { text: 'equal and unequal', id: 3 },
    ],
    correctAnswerId: 1,
    explanation: `Coercion comes in two forms in JavaScript: explicit and implicit. Explicit coercion is simply that you can see 
            obviously from the code that a conversion from one type to another will occur, whereas implicit coercion is when the 
            type conversion can happen as more of a non-obvious side effect of some other operation.`,
  },
  {
    question:
      'If var a = 42 and var b = "42", will the statements a === b AND a == b return ...?',
    orderedById: true,
    answers: [
      { text: 'true / true', id: 0 },
      { text: 'false / true', id: 1 },
      { text: 'true / false', id: 2 },
      { text: 'false / false', id: 3 },
    ],
    correctAnswerId: 1,
    explanation: `== checks for value equality with coercion allowed, and === checks for value equality without allowing coercion; 
            === is often called "strict equality" for this reason. In the a == b comparison, JS notices that the types do not match, 
            so it goes through an ordered series of steps to coerce one or both values to a different type until the types match, 
            where then a simple value equality can be checked. The a === b produces false, because the coercion is not allowed, so 
            the simple value comparison obviously fails. `,
  },
  {
    question:
      'What happens when you assign a variable that has not yet been declared?',
    orderedById: true,
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
    explanation: `If you try to set a variable that hasn't been declared, you'll either end up creating a variable in the top-level global 
            scope (bad!) or getting an error, depending on "strict mode" (see "Strict Mode").`,
  },
  {
    question:
      'If a === 5, which of the following is a correct use of the ternary operator AND returns true?',
    orderedById: true,
    answers: [
      { text: 'a < 20 ? true : false', id: 0 },
      { text: 'a < 20 : false ? true', id: 1 },
      { text: 'a < 20 : true : false', id: 2 },
      { text: 'a < 20 ? false : true', id: 3 },
    ],
    correctAnswerId: 0,
    explanation: `Another form of conditional in JavaScript is the "conditional operator," often called the "ternary operator." 
            It's like a more concise form of a single if..else statement. If the test expression evaluates as true, the first clause 
            (true) results, otherwise the second clause (false) results.`,
  },
];

export default Ch2Questions;
