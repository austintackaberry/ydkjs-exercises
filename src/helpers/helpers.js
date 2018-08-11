const CORRECT = 'CORRECT';
const INCORRECT = 'INCORRECT';
const UNANSWERED = 'UNANSWERED';

export const getNewScore = ({
  prevStatus,
  isCorrect,
  score,
  bookId,
  chapterId,
  questionIndex,
}) => {
  let scoreDiff = {};
  switch (prevStatus) {
    case CORRECT:
      scoreDiff = { correct: 0, incorrect: 0, set: CORRECT };
      break;
    case INCORRECT:
      scoreDiff = {
        correct: isCorrect ? 1 : 0,
        incorrect: isCorrect ? -1 : 0,
        set: isCorrect ? CORRECT : INCORRECT,
      };
      break;
    case UNANSWERED:
      scoreDiff = {
        correct: isCorrect ? 1 : 0,
        incorrect: isCorrect ? 0 : 1,
        set: isCorrect ? CORRECT : INCORRECT,
      };
      break;
    default:
      break;
  }

  // Calculate numeric score difference
  // based on current score state

  const newScore = {
    ...score,
    books: score.books.map((book, index) => {
      if (index === bookId) {
        return {
          ...book,
          chapters: book.chapters.map((chapter, index) => {
            if (index === chapterId) {
              return {
                ...chapter,
                questions: chapter.questions.map((question, index) => {
                  if (questionIndex === index) {
                    return {
                      status: scoreDiff.set,
                      questionId: question.questionId,
                    };
                  }
                  return question;
                }),
              };
            }
            return chapter;
          }),
        };
      }
      return book;
    }),
  };

  // Update total score

  newScore.correct = newScore.correct + scoreDiff.correct;
  newScore.incorrect = newScore.incorrect + scoreDiff.incorrect;
  return newScore;
};

//Restart Score

export const reinitializeScore = newScore => {
  newScore.correct = 0;
  newScore.incorrect = 0;

  newScore.books.forEach(book => {
    book.chapters.forEach(chapter => {
      chapter.questions.forEach(question => {
        question.status = UNANSWERED;
      });
    });
  });

  return newScore;
};

const createScoreMap = score => {
  return score.books.reduce((acc, book) => {
    book.chapters.forEach(chapter => {
      chapter.questions.forEach(question => {
        acc[question.questionId] = question;
      });
    });
    return acc;
  }, {});
};

/*

Merge localStorage score with new initialized score.
This isn't straightforward because the new intialized state
should not overwrite the old state if questions are
re-arranged or if new questions are added.

*/

export const mergeScores = ({ lsScore, newScore }) => {
  const lsScoreMap = createScoreMap(lsScore);
  let correct = 0;
  let incorrect = 0;
  newScore.books = newScore.books.map(book => {
    return {
      ...book,
      chapters: book.chapters.map(chapter => {
        return {
          ...chapter,
          questions: chapter.questions.map(question => {
            if (question.questionId in lsScoreMap) {
              if (lsScoreMap[question.questionId].status === INCORRECT) {
                incorrect++;
              }
              if (lsScoreMap[question.questionId].status === CORRECT) {
                correct++;
              }
              return lsScoreMap[question.questionId];
            }
            return question;
          }),
        };
      }),
    };
  });
  newScore.correct = correct;
  newScore.incorrect = incorrect;
  return newScore;
};
