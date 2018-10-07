import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import {
  Fieldset,
  FlatButton,
  Header3,
  QuestionStyle,
  MessageWrapper,
  Section,
  SubmitButton,
  Wrapper,
  StyledLabel,
  StyledDiv,
  StyledInput,
  StyledSpan,
  StyledButton,
  StyledLink,
} from './styled';

import './styles.css';
import CodeBlock from '../markdown-renderers/CodeBlock';
import CodeInline from '../markdown-renderers/CodeInline';
import Root from '../markdown-renderers/Root';
import Paragraph from '../markdown-renderers/Paragraph';
import { getNewScore } from '../../helpers/helpers';
const ReactMarkdown = require('react-markdown');

export class Question extends Component {
  static propTypes = {
    baseUrl: PropTypes.string.isRequired,
    bookId: PropTypes.number.isRequired,
    chapterId: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    numberOfQuestions: PropTypes.number.isRequired,
    question: PropTypes.shape({
      question: PropTypes.string.isRequired,
      questionId: PropTypes.string.isRequired,
      shouldBeRandomized: PropTypes.bool.isRequired,
      answers: PropTypes.array.isRequired,
      correctAnswerId: PropTypes.number.isRequired,
      moreInfoUrl: PropTypes.string.isRequired,
      explanation: PropTypes.string.isRequired,
    }).isRequired,
    score: PropTypes.object.isRequired,
    updateScore: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      userAnswerId: null,
      answerSubmitted: false,
      error: false,
      correctAnswer: null,
      explanationRequested: false,
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  calcNewScore(isCorrect) {
    const { updateScore, score, bookId, chapterId, index } = this.props;
    const questionIndex = index - 1;

    // Check if current question was already answered correctly
    const prevStatus =
      score.books[bookId].chapters[chapterId].questions[questionIndex].status;

    const newScore = getNewScore({
      prevStatus,
      isCorrect,
      score,
      bookId,
      chapterId,
      questionIndex,
    });

    updateScore(newScore);
  }

  handleSubmit(event) {
    const { question } = this.props;
    const { userAnswerId } = this.state;
    const currentAnswer = question.answers.find(a => a.id == userAnswerId);

    // User did not select an answer
    if (userAnswerId === null) {
      this.setState({
        error: true,
      });
    } else {
      const userAnswerIsCorrect = question.correctAnswerId === currentAnswer.id;
      this.setState({
        answerSubmitted: true,
        error: false,
        correctAnswer: userAnswerIsCorrect,
      });
      this.calcNewScore(userAnswerIsCorrect);
    }

    event.preventDefault();
  }

  handleAnswerChange(event) {
    this.setState({
      userAnswerId: event.target.value,
      answerSubmitted: null,
      correctAnswer: null,
    });
  }

  handleKeyDown(event) {
    const { question, history } = this.props;
    const actions = {
      ArrowLeft: question.prevUrl,
      ArrowRight: question.nextUrl,
    };

    const url = actions[event.key];
    if (url) {
      history.push(url);
    }
  }

  toggleExplanationRequest() {
    this.setState({
      explanationRequested: !this.state.explanationRequested,
    });
  }

  render() {
    const { question, numberOfQuestions, index } = this.props;
    const {
      answerSubmitted,
      userAnswerId,
      explanationRequested,
      error,
      correctAnswer,
    } = this.state;

    let message;
    if (error) {
      message = 'Please select an answer';
    } else if (correctAnswer) {
      message = 'Correct!';
    } else if (correctAnswer === false) {
      // not undefined
      message = 'Incorrect! Try Again!';
    }

    return (
      <React.Fragment>
        <Wrapper>
          <Header3>{`Question ${index} of ${numberOfQuestions}`}</Header3>
          <QuestionStyle>
            <ReactMarkdown
              renderers={{
                code: CodeBlock,
                inlineCode: CodeInline,
              }}
              source={question.question}
            />
          </QuestionStyle>
          <form onSubmit={event => this.handleSubmit(event)}>
            <Fieldset>
              {question.answers.map((answer, i) => {
                let answerColor;
                if (answerSubmitted) {
                  if (
                    userAnswerId == answer.id &&
                    question.correctAnswerId === answer.id
                  ) {
                    answerColor = 'green';
                  }
                  if (
                    userAnswerId == answer.id &&
                    !(question.correctAnswerId === answer.id)
                  ) {
                    answerColor = 'red';
                  }
                }
                return (
                  <div key={answer.id}>
                    <StyledLabel htmlFor={i}>
                      <StyledDiv>
                        <StyledInput
                          type="radio"
                          name={index}
                          id={i}
                          value={answer.id}
                          onChange={event => {
                            this.handleAnswerChange(event);
                          }}
                        />
                      </StyledDiv>
                      <StyledSpan answerColor={answerColor}>
                        <ReactMarkdown
                          renderers={{
                            code: CodeBlock,
                            inlineCode: CodeInline,
                            root: Root,
                            paragraph: Paragraph,
                          }}
                          source={answer.text}
                        />
                      </StyledSpan>
                    </StyledLabel>
                  </div>
                );
              })}
            </Fieldset>
            <SubmitButton type="submit">Submit</SubmitButton>
            {answerSubmitted &&
              explanationRequested && (
                <div>
                  <StyledButton
                    className="explanationButton"
                    onClick={event => this.toggleExplanationRequest()}
                  >
                    Hide Explanation
                  </StyledButton>
                  <div className="explanation">
                    <ReactMarkdown
                      renderers={{
                        code: CodeBlock,
                        inlineCode: CodeInline,
                      }}
                      source={question.explanation}
                    />
                    <br />
                    <StyledLink href={question.moreInfoUrl} target="_blank">
                      More information here
                    </StyledLink>
                  </div>
                </div>
              )}

            {answerSubmitted &&
              !explanationRequested && (
                <StyledButton
                  className="explanationButton"
                  onClick={event => this.toggleExplanationRequest()}
                >
                  Show Explanation
                </StyledButton>
              )}
          </form>
          <MessageWrapper>{message}</MessageWrapper>
        </Wrapper>

        <Section>
          {question.prevUrl ? (
            <Link to={question.prevUrl}>
              <FlatButton disabled={false}>
                {question.prevButtonLabel}
              </FlatButton>
            </Link>
          ) : (
            <FlatButton disabled={true}>{question.prevButtonLabel}</FlatButton>
          )}
          <Link to={question.nextUrl}>
            <FlatButton disabled={false}>{question.nextButtonLabel}</FlatButton>
          </Link>
        </Section>
      </React.Fragment>
    );
  }
}

const QuestionWithRouter = withRouter(Question);
export default QuestionWithRouter;
