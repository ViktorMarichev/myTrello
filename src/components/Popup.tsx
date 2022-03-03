import React from 'react';
import styled from 'styled-components';
import { StyledPopupProps, popupProps } from '../types/popupType';
import cross from '../img/cross.svg';
const PopupWrapper = styled.div`
  position: fixed;
  display: ${(props: StyledPopupProps) => props.display};
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0 0 0 / 0.5);
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
const PopupHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const ClosePopup = styled.img`
  width: 20px;
  height: 20px;
  filter: drop-shadow(1px 1px 3px white);
  &:hover {
    box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform: scale(0.98);
  }
`;
function Popup(props: popupProps) {
  return (
    <PopupWrapper display={props.display ? 'block' : 'none'}>
      <PopupBody>
        <PopupHead>
          <ClosePopup src={cross} onClick={() => props.onClose()} />
        </PopupHead>
        {props.children}
      </PopupBody>
    </PopupWrapper>
  );
}
export default Popup;
