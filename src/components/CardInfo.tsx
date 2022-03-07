import React, { useRef } from 'react';
import styled from 'styled-components';
import { cardType } from '../types/taskType';
import CommentsListContainer from './commentsListContainer';
import spinner from '../img/spinner.gif';
import { cardPositionType } from '../types/Card';
type cardInfoProps = {
  currentCard: cardType;
  cardPosition: cardPositionType;
  columnName: string;
  isChangedDescription: boolean;
  setIsChangedDescription: (b: boolean) => void;
  userComment: string;
  keyPressHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  keyPressCommentHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setDescription: () => void;
};
const InfoBody = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleWrapper = styled.div`
  padding: 10px 8px;
`;
const Title = styled.div`
  font-family: 'Balsamiq Sans', cursive;
  font-weight: bold;
  font-size: 20px;
  color: #0b97dc;
`;
const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Description = styled.textarea`
  background: #ffffff;
  overflow-y: hidden;
  height: auto;
  min-height: 100px;
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
  padding: 10px;
  width: 100%;
  resize: none;
  ::placeholder {
    color: #0b97dc;
  }
`;
const SaveDescriptionButton = styled.button`
height: 40px;
justify-content: center;
align-items: center;
border: none;
border-radius: 12px;
background-color: #0b97dc; !important;
font-family: 'Comfortaa', cursive;
font-weight: bold;
font-size:15px;
color: white;
padding: 10px 10px 10px 16px;
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
}
`;
const ButtonWrapper = styled.div`
  padding: 5px;
  font-family: 'Balsamiq Sans', cursive;
  font-size: 15px;
  width: 100%;
`;
const Spinner = styled.img`
  width: 40px;
  height: 40px;
`;
const ColumnName = styled.div`
  width: 100%;
  color: #5e6c84;
`;
const AuthorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
function CardInfo(props: cardInfoProps) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  function resize(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    setTimeout(function () {
      textAreaRef.current!.style.cssText = 'height:auto; padding:0';
      textAreaRef.current!.style.cssText = 'height:' + textAreaRef.current!.scrollHeight + 'px';
    }, 1);
  }
  return (
    <InfoBody>
      {props.currentCard.title === undefined ? (
        <Spinner src={spinner} />
      ) : (
        <>
          <TitleWrapper>
            <Title>{props.currentCard.title}</Title>
            <ColumnName>{props.columnName}</ColumnName>
          </TitleWrapper>
          <DescriptionWrapper>
            <Description
              ref={textAreaRef}
              onKeyDown={resize}
              onChange={props.keyPressHandler}
              value={props.currentCard.description}
              placeholder="enter description"
              rows={1}
            />
          </DescriptionWrapper>
          {props.isChangedDescription ? (
            <ButtonWrapper>
              <SaveDescriptionButton
                onClick={() => {
                  props.setDescription();
                }}
              >
                Save
              </SaveDescriptionButton>
            </ButtonWrapper>
          ) : null}
          <AuthorWrapper>author:{props.currentCard.author}</AuthorWrapper>
          <CommentsListContainer
            userComment={props.userComment}
            keyPressCommentHandler={props.keyPressCommentHandler}
            currentCard={props.currentCard}
            taskId={props.cardPosition.taskId!}
          />
        </>
      )}
    </InfoBody>
  );
}
export default CardInfo;
