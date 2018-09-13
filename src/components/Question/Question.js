import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Fieldset,
  FlatButton,
  Header3,
  QuestionStyle,
  MessageWrapper,
  Section,
  SubmitButton,
  Wrapper,
} from './styled';

import './styles.css';
import CodeBlock from '../markdown-renderers/CodeBlock';
import CodeInline from '../markdown-renderers/CodeInline';
import Root from '../markdown-renderers/Root';
import Paragraph from '../markdown-renderers/Paragraph';
import { getNewScore } from '../../helpers/helpers';
const ReactMarkdown = require('react-markdown');

const NavigationButton = props =>
  withRouter(({ history }) => (
    <FlatButton
      disabled={!props.enabled}
      onClick={() => {
        history.push(props.destination);
      }}
    >
      {props.label}
    </FlatButton>
  ))(props);

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
      answerSubmitted: null,
      error: false,
      correctAnswer: null,
      explanationRequested: false,
      navigation: {
        previous: {
          enabled: this.props.index > 1,
          url: this.props.baseUrl + '/q' + (this.props.index - 1),
        },
        next: {
          enabled: this.props.index < this.props.numberOfQuestions,
          url: this.props.baseUrl + '/q' + (this.props.index + 1),
        },
      },
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
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
    let currentAnswer = this.props.question.answers.find(
      a => a.id == this.state.userAnswerId
    );

    if (this.state.userAnswerId === null) {
      this.setState({
        error: true,
      });
    } else {
      this.setState(
        {
          answerSubmitted: true,
          error: false,
          correctAnswer:
            this.props.question.correctAnswerId === currentAnswer.id,
        },
        () => {
          this.calcNewScore(
            this.props.question.correctAnswerId === currentAnswer.id
          );
        }
      );
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
    /* assign navigation variables */
    const { previous, next } = this.state.navigation;
    const actions = {
      ArrowLeft: { route: previous },
      ArrowRight: { route: next },
    };

    /* handle navigation */
    if (actions.hasOwnProperty(event.key)) {
      const { route } = actions[event.key];
      if (route.enabled) {
        this.props.history.push(route.url);
        return;
      }
    }

    /* re-register listener if navigation did not occur */
    window.addEventListener('keydown', this.handleKeyDown);
  }

  toggleExplanationRequest() {
    this.setState({
      explanationRequested: !this.state.explanationRequested,
    });
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { answerSubmitted, userAnswerId, explanationRequested } = this.state;
    const { question, numberOfQuestions, index } = this.props;
    const navigation = this.state.navigation;
    let message;
    if (this.state.error) {
      message = 'Please select an answer';
    } else if (this.state.correctAnswer) {
      message = 'Correct!';
    } else if (this.state.correctAnswer === false) {
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
                    answerColor = { color: 'green' };
                  }
                  if (
                    userAnswerId == answer.id &&
                    !(question.correctAnswerId === answer.id)
                  ) {
                    answerColor = { color: 'red' };
                  }
                }
                return (
                  <div key={answer.id}>
                    <label
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        padding: '3px 0',
                      }}
                      htmlFor={i}
                    >
                      <div style={{ height: '13px' }}>
                        <input
                          type="radio"
                          name={index}
                          id={i}
                          value={answer.id}
                          style={{ marginTop: '0' }}
                          onChange={event => {
                            this.handleAnswerChange(event);
                          }}
                        />
                      </div>
                      <span style={answerColor}>
                        <ReactMarkdown
                          renderers={{
                            code: CodeBlock,
                            inlineCode: CodeInline,
                            root: Root,
                            paragraph: Paragraph,
                          }}
                          source={answer.text}
                        />
                      </span>
                    </label>
                  </div>
                );
              })}
            </Fieldset>
            <SubmitButton type="submit">Submit</SubmitButton>
            {answerSubmitted &&
              explanationRequested && (
                <div>
                  <button
                    className="explanationButton"
                    onClick={event => this.toggleExplanationRequest()}
                    style={{ margin: '4px auto' }}
                  >
                    Hide Explanation
                  </button>
                  <div className="explanation" style={{ lineHeight: '2' }}>
                    <ReactMarkdown
                      renderers={{
                        code: CodeBlock,
                        inlineCode: CodeInline,
                      }}
                      source={question.explanation}
                    />
                    <br />
                    <a
                      href={question.moreInfoUrl}
                      target="_blank"
                      style={{ textDecoration: 'underline', color: 'black' }}
                    >
                      More information here
                    </a>
                  </div>
                </div>
              )}

            {answerSubmitted &&
              !explanationRequested && (
                <button
                  className="explanationButton"
                  onClick={event => this.toggleExplanationRequest()}
                  style={{ margin: '4px auto' }}
                >
                  Show Explanation
                </button>
              )}
          </form>
          <MessageWrapper>{message}</MessageWrapper>
        </Wrapper>
        {/* className="navigation" */}
        <Section>
          <NavigationButton
            label="Previous"
            destination={navigation.previous.url}
            enabled={navigation.previous.enabled}
          />
          <NavigationButton
            label="Next"
            destination={navigation.next.url}
            enabled={navigation.next.enabled}
          />
        </Section>
      </React.Fragment>
    );
  }
}

const QuestionWithRouter = withRouter(Question);
export default QuestionWithRouter;
