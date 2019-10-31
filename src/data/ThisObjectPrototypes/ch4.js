const Ch4Questions = [
  {
    question: `JavaScript classes work like Ruby's and Python's dynamic classes and unlike Java's and C++'s static classes.`,
    questionId: 'Y4iwu68HDhZCPAvqnXQX',
    shouldBeRandomized: false,
    answers: [
      {
        text: `True`,
        id: 0,
      },
      { text: `False`, id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch4.md#javascript-classes',
    explanation: `JavaScript ES6 classes are objects, which allows us to add and remove fields and methods at runtime.`,
  },
  {
    question: `Which of the following is true about classes in JavaScript?`,
    questionId: 'UESib3GYVwXJAaz5AS9I',
    shouldBeRandomized: true,
    answers: [
      {
        text: `By default, when a child class inherits from a parent class, the child has a copy of the parent's behaviors.`,
        id: 0,
      },
      {
        text: `By default, changing the parent's behaviors does not change the child's behaviors.`,
        id: 1,
      },
      {
        text: `It's not possible to inherit behaviors in JavaScript because classes are an abstraction over objects.`,
        id: 2,
      },
      {
        text: `In a child class, we can store copies of the parent's behaviors if we explicitly program them in.`,
        id: 3,
      },
    ],
    correctAnswerId: 3,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch4.md#review-tldr',
    explanation:
      'By default, inheritance in JavaScript works by linking two classes (objects) together, not by copying one over to another. Class copy behavior can be emulated using the mixin pattern (both explicit and implicit), but this usually leads to ugly and brittle syntax like explicit pseudo-polymorphism (`OtherObj.methodName.call(this, ...)`), which often results in harder to understand and maintain code.',
  },
  {
    question: `JavaScript does not provide a native mechanism for "multiple inheritance".`,
    questionId: '1t67cQUrk7gRm4bIdZlp',
    shouldBeRandomized: false,
    answers: [
      {
        text: `True`,
        id: 0,
      },
      { text: `False`, id: 1 },
    ],
    correctAnswerId: 0,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch4.md#multiple-inheritance',
    explanation: `Multiple-inheritance means that each parent class contributes definitions to the child class. JavaScript does not provide a native mechanism for "multiple inheritance". Many see this is a good thing, because the complexity savings more than make up for the "reduced" functionality. But this doesn't stop developers from trying to fake it in various ways.`,
  },
  {
    question: `What is the main difference between an explicit mixin and an implicit mixin?`,
    questionId: 'cKWfiiULXkqv2DM0Tb8L',
    shouldBeRandomized: true,
    answers: [
      {
        text: `Explicit mixins are native to JavaScript while implicit mixins are not.`,
        id: 0,
      },
      {
        text: `Explicit mixin is when the properties of the parent are copied over to the child.`,
        id: 1,
      },
      { text: 'Explicit mixins are recommended.', id: 2 },
      {
        text:
          'Explicit mixins are not native to Javascript while implicit mixins are.',
        id: 3,
      },
    ],
    correctAnswerId: 1,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch4.md#mixins',
    explanation:
      "Implicit mixin is when there isn't an explicit mixin function that copies all of the properties from the parent to the child. Rather, it is when the parent method is called with the `this` bound to the child's `this`",
  },
  {
    question: `What is a similarity between explicit and implicit mixins?`,
    questionId: 'Wf4giVL54w2w0QORiKYh',
    shouldBeRandomized: false,
    answers: [
      {
        text: `They are both native to JavaScript`,
        id: 0,
      },
      { text: 'They are both recommended', id: 1 },
      {
        text: `With either, you cannot always avoid absolutely (as opposed to relatively) referring to the parent`,
        id: 2,
      },
      { text: 'None of the above', id: 3 },
    ],
    correctAnswerId: 2,
    moreInfoUrl:
      'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch4.md#mixins',
    explanation: `Implicit mixins always require absolutely referring to the parent, and explicit mixins require absolutely referring to the parent when shadowing is desired.`,
  },
];

export default Ch4Questions;
