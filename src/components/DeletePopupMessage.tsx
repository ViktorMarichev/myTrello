import React from 'react';
import styled from 'styled-components';

type DeletePopupMessageProps = {
  title: string;
  onAgree: () => void;
  onCancel: () => void;
};
const DeletePopupTitle = styled.div`
  font-family: 'Balsamiq Sans', cursive;
  font-weight: bold;
  font-size: 15px;
  color: #0b97dc;
  text-shadow: 1px 1px 1px white;
  width: 100%;
  text-align: center;
`;
const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
const AgreeButton = styled.button`
width: 100%;
height: 40px;
max-width: 125px;
justify-content: center;
align-items: center;
border: none;
border-radius: 12px;
background-color: #0b97dc; !important;
font-family: 'Comfortaa', cursive;
font-weight: bold;
font-size:15px;
color: white;
padding: 5px 5px 5px 10px;
cursor: default;
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Chrome/Safari/Opera */
-khtml-user-select: none; /* Konqueror */
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* Internet Explorer/Edge */
user-select: none;
margin-right: 5px;
&:hover {
background-color:#0a85c2;
}
&:active {
  box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
  transform: scale(0.98);
}`;
const CancelButton = styled(AgreeButton)`
  background-color: red;
  &:hover {
    background: rgb(227 6 6);
  }
`;

function DeletePopupMessage(props: DeletePopupMessageProps) {
  return (
    <>
      <DeletePopupTitle>Are you sure delete {"'" + props.title + "'"}</DeletePopupTitle>
      <ButtonsWrapper>
        <AgreeButton onClick={props.onAgree}>OK</AgreeButton>
        <CancelButton onClick={props.onCancel}>Cancel</CancelButton>
      </ButtonsWrapper>
    </>
  );
}
export default DeletePopupMessage;
