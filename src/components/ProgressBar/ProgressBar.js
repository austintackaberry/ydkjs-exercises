import React from 'react';
import { Bar, Segment } from './styled';

const ProgressBar = props => {
  const correctWidth = Math.round(
    (100 * props.score.correct) / props.score.possible
  );
  const incorrectWidth = Math.round(
    (100 * props.score.incorrect) / props.score.possible
  );
  return (
    <Bar>
      <Segment backgroundColor="correct" width={`${correctWidth}%`} />
      <Segment backgroundColor="incorrect" width={`${incorrectWidth}%`} />
    </Bar>
  );
};

export default ProgressBar;
