import React, { useState } from 'react';
import CommentItem from './CommentItem';
import { commentType } from '../types/taskType';
import { tasksTool } from '../context/tasksTool';
type CommentItemContainerType = {
  comment: commentType;
  deleteCommentHandler: (commentId: string) => void;
  taskId: string;
  cardId: string;
};
function CommentItemContainer(props: CommentItemContainerType) {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [comment, setComment] = useState<commentType>(props.comment);
  const [editedComment, setEditedComment] = useState<string>(props.comment.message);
  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedComment(e.target.value);
  };
  const setCommentHandler = () => {
    const newComment: commentType = tasksTool.updateComment(
      props.taskId,
      props.cardId,
      comment.id,
      editedComment
    );
    console.log(newComment);
    setComment(newComment);
    setIsChanged(false);
  };
  return (
    <CommentItem
      key={props.comment.id}
      comment={comment}
      deleteCommentHandler={props.deleteCommentHandler}
      isChanged={isChanged}
      setIsChanged={setIsChanged}
      input={editedComment}
      onChangeInput={onChangeInput}
      setCommentHandler={setCommentHandler}
    />
  );
}

export default CommentItemContainer;
