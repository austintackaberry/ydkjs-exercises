import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  width: 40%;
  margin: auto;
  position: relative;
  height: 18em;
  padding: 30px 20px;
`;

export const MessageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2px;
  fontsize: 18px;
  fontweight: 700;
`;

export const Section = styled.section`
  display: flex;
  width: 40%;
  margin: 1em auto;
  justify-content: space-around;
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
`;

export const Fieldset = styled.fieldset`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
  border: none;
`;

export const Header3 = styled.h3`
  margin: 10px;
`;

export const Header4 = styled.h4`
  margin: 0;
`;

export const FlatButton = styled.button`
  background-color: lightgrey;
  border: none;
  padding: 0.5rem 1.5rem;
  disabled: ${p => p.disabled};
`;
