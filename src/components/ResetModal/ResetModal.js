import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { reinitializeScore } from '../../helpers/helpers';
import {
  Blackout,
  ModalContainer,
  ModalText,
  ModalButtonContainer,
  ModalButton,
} from './styles';

const ResetButton = props =>
  withRouter(({ history, resetScore }) => (
    <ModalButton
      onClick={() => {
        resetScore();
        history.push('/');
      }}
    >
      Yes
    </ModalButton>
  ))(props);

class ResetModal extends Component {
  constructor(props) {
    super(props);

    this.resetScore = this.resetScore.bind(this);
  }

  resetScore() {
    const { score, updateScore } = this.props;
    const newScore = reinitializeScore(score);
    updateScore(newScore);
    this.props.handleShowReset();
  }

  render() {
    return (
      <Blackout>
        <ModalContainer>
          <ModalText>Are you sure you want to reset your score?</ModalText>
          <ModalButtonContainer>
            <ResetButton resetScore={this.resetScore} />
            <ModalButton onClick={this.props.handleShowReset}>No</ModalButton>
          </ModalButtonContainer>
        </ModalContainer>
      </Blackout>
    );
  }
}

export default ResetModal;
