export const getNewScore = ({
  prevStatus,
  isCorrect,
  score,
  bookId,
  chapterId,
  questionIndex,
}) => {
  const CORRECT = 'CORRECT';
  const INCORRECT = 'INCORRECT';
  const UNANSWERED = 'UNANSWERED';

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
        if (question.status === 'CORRECT') {
          question.status = 'UNANSWERED';
        }
      });
    });
  });

  return newScore;
};
