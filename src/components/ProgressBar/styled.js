import styled from 'styled-components';

const BAR_BOX_SHADOW = '0px 1px 1px 0px rgba( 194, 194, 194, .8 )';
const COLORS = {
  correct: 'linear-gradient( to right, #63c90a, #96c93d )',
  incorrect: 'linear-gradient( to left, #dc2d3e, #ef473a )',
};

export const Bar = styled.div`
  display: flex;
  position: relative;
  height: 10px;
  margin: 0 0.5em;
  background-color: #eee;
  border-radius: 2.5px;
  box-shadow: ${BAR_BOX_SHADOW};
  -webkit-box-shadow: ${BAR_BOX_SHADOW};
  -moz-box-shadow: ${BAR_BOX_SHADOW};
  overflow: hidden;
  z-index: 1;
`;

export const Segment = styled.div`
  display: flex;
  position: relative;
  background: ${props => COLORS[props.backgroundColor]};
  width: ${props => props.width};
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: -1;
`;
