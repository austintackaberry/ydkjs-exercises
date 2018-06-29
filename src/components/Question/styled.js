import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  width: 100%;
  margin: auto;
  min-height: 16em;
  position: relative;
  padding: 30px 20px;
`;
Wrapper.displayName = 'Wrapper';

export const MessageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2px;
  fontsize: 18px;
  fontweight: 700;
`;
MessageWrapper.displayName = 'MessageWrapper';

export const Section = styled.section`
  display: flex;
  width: 40%;
  margin: 1em auto;
  justify-content: space-around;
`;
Section.displayName = 'Section';

export const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
`;
SubmitButton.displayName = 'SubmitButton';

export const Fieldset = styled.fieldset`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
  border: none;
`;
Fieldset.displayName = 'Fieldset';

export const Header3 = styled.h3`
  margin: 10px;
`;
Header3.displayName = 'Header3';

export const Header4 = styled.h4`
  margin: 0;
`;
Header4.displayName = 'Header4';

export const FlatButton = styled.button`
  background-color: lightgrey;
  border: none;
  padding: 0.5rem 1.5rem;
  disabled: ${p => p.disabled};
`;
FlatButton.displayName = 'FlatButton';
