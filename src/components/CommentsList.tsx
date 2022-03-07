import React, { useRef } from 'react';
import styled from 'styled-components';
import userImage from '../img/userImage.png';
import { commentType } from '../types/taskType';
import CommentItemContainer from './CommentItemContainer';
const CommentListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #5e6c84;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin-top: 5px;
  padding: 5px 5px;
  box-sizing: border-box;
`;
const CommentInput = styled.textarea`
  background: #ffffff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  font-family: 'Balsamiq Sans', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #e1528d !important;
  line-height: 20px;
  border: 1px solid #242528;
  padding: 10px;
  height: 35px;
  width: 100%;
  overflow: hidden;
  resize: none;
  ::placeholder {
    color: #0b97dc;
  }
`;
const UserImageWrapper = styled.div`
  padding: 3px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  grid-area: userImage;
`;
const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CommentInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const CommentsList = styled.div`
  width: 100%;
`;
const SaveCommentButton = styled.button`
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
  width: 100%;
`;
type commentListProps = {
  commentsArray: Array<commentType>;
  addComment: () => void;
  input: string;
  taskId: string;
  cardId: string;
  inputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  deleteCommentHandler: (commentId: string) => void;
};
function CommentList(props: commentListProps) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  function resize(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    setTimeout(function () {
      textAreaRef.current!.style.cssText = 'height:auto; padding:1';
      textAreaRef.current!.style.cssText = 'height:' + textAreaRef.current!.scrollHeight + 'px';
    }, 1);
  }
  return (
    <CommentListWrapper>
      <CommentInputWrapper>
        <UserImageWrapper>
          <UserImage src={userImage} />
        </UserImageWrapper>
        <CommentInput
          ref={textAreaRef}
          onKeyPress={resize}
          onChange={props.inputChange}
          placeholder="enter your comment"
          value={props.input}
          rows={1}
        />
      </CommentInputWrapper>
      <ButtonWrapper>
        <SaveCommentButton onClick={() => props.addComment()}>Send</SaveCommentButton>
      </ButtonWrapper>

      <CommentsList>
        {props.commentsArray.map((elem: commentType) => {
          return (
            <CommentItemContainer
              taskId={props.taskId}
              cardId={props.cardId}
              key={elem.id}
              comment={elem}
              deleteCommentHandler={props.deleteCommentHandler}
            />
          );
        })}
      </CommentsList>
    </CommentListWrapper>
  );
}

export default CommentList;
