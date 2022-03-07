import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  background: #ffffff;
  overflow-y: hidden;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  font-family: 'Balsamiq Sans', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #e1528d !important;
  line-height: 25px;
  padding-left: 23px;
  width: 100%;
  resize: none;
  ::placeholder {
    color: #0b97dc;
  }
`;
export { StyledTextArea };
