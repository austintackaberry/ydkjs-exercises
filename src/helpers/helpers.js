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

export const createScoreMap = score => {
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

export const initializeBooks = books => {
  return books.map((book, bookIndex) => {
    return {
      ...book,
      chapters: book.chapters.map((chapter, chapterIndex) => {
        return {
          ...chapter,
          questions: chapter.questions.map((question, questionIndex) => {
            let nextUrl;
            let nextButtonLabel;
            if (questionIndex < chapter.questions.length - 1) {
              nextUrl = `${book.url + chapter.url}/q${questionIndex + 2}`;
              nextButtonLabel = 'Next';
            } else if (chapterIndex < book.chapters.length - 1) {
              nextUrl = `${book.url + book.chapters[chapterIndex + 1].url}/q1`;
              nextButtonLabel = 'Next Chapter';
            } else if (bookIndex < books.length - 1) {
              nextUrl = `${books[bookIndex + 1].url +
                books[bookIndex + 1].chapters[0].url}/q1`;
              nextButtonLabel = 'Next Book';
            } else {
              nextUrl = '/';
              nextButtonLabel = 'Home';
            }

            let prevUrl;
            let prevButtonLabel;
            if (questionIndex > 0) {
              prevUrl = `${book.url + chapter.url}/q${questionIndex}`;
              prevButtonLabel = 'Previous';
            } else if (chapterIndex > 0) {
              prevUrl = `${book.url + book.chapters[chapterIndex - 1].url}/q${
                book.chapters[chapterIndex - 1].questions.length
              }`;
              prevButtonLabel = 'Previous Chapter';
            } else if (bookIndex > 0) {
              const book = books[bookIndex - 1];
              const chapter = book.chapters[book.chapters.length - 1];
              const questionUrl = `/q${chapter.questions.length}`;
              prevUrl = book.url + chapter.url + questionUrl;
              prevButtonLabel = 'Previous Book';
            } else {
              prevUrl = null;
              prevButtonLabel = 'Previous';
            }

            return {
              ...question,
              nextUrl,
              prevUrl,
              nextButtonLabel,
              prevButtonLabel,
            };
          }),
        };
      }),
    };
  });
};
