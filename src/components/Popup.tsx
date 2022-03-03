import React from 'react';
import styled from 'styled-components';
import { StyledPopupProps, popupProps } from '../types/popupType';
const PopupWrapper = styled.div`
  position: fixed;
  display: ${(props: StyledPopupProps) => props.display};
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0 0.2);
  z-index: 10;
`;
const PopupBody = styled.div`
  position: relative;
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  position: relative;
  max-width: 500px;
  margin: auto;
  background-color: white;
  margin-top: 5%;
  padding: 0px 10px 10px 10px;
  border-radius: 10px;
  border: 1px solid gray;
  max-height: 400px;
  overflow-y: none;
  box-sizing: border-box;
  box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
`;
function Popup(props: popupProps) {
  return (
    <PopupWrapper display={props.display}>
      <PopupBody>{props.children}</PopupBody>
    </PopupWrapper>
  );
}
export default Popup;
