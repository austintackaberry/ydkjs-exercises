import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
  max-width: 800px;
  margin: auto;
  min-height: 16em;
  position: relative;
  padding: 20px 10px;
  form {
    line-height: 2;
  }
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
  margin: 4px auto;
`;
SubmitButton.displayName = 'SubmitButton';

export const Fieldset = styled.fieldset`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
  border: none;
  div {
    margin: 7px;
  }
`;
Fieldset.displayName = 'Fieldset';

export const Header3 = styled.h3`
  margin: 10px;
`;
Header3.displayName = 'Header3';

export const QuestionStyle = styled.h4`
  margin: 0;
  line-height: 2.2;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pre {
      flex-grow: 0;
      code {
        text-align: left;
      }
    }
  }
`;
QuestionStyle.displayName = 'QuestionStyle';

export const FlatButton = styled.button`
  background-color: lightgrey;
  border: none;
  padding: 0.5rem 1.5rem;
  disabled: ${p => p.disabled};
`;
FlatButton.displayName = 'FlatButton';
