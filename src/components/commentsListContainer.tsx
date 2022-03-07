import React, { useState } from 'react';
import CommentsList from './CommentsList';
import { cardType, commentType } from '../types/taskType';
import { tasksTool } from '../context/tasksTool';
type CommentsListContainer = {
  currentCard: cardType;
  userComment: string;
  keyPressCommentHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  taskId: string;
};

function CommentsListContainer(props: CommentsListContainer) {
  const [comments, setComments] = useState<Array<commentType>>(props.currentCard.comments);

  const deleteCommentHandler = (commentId: string) => {
    setComments(tasksTool.deleteComment(props.taskId, props.currentCard.id, commentId));
  };
  const addComment = () => {
    if (props.userComment.length >= 2) {
      const newComment: commentType = {
        id: tasksTool.generateId(comments)!,
        message: props.userComment,
        date: new Date(),
        username: localStorage.getItem('username')!,
      };
      console.log('setCurrentCard ', newComment);
      setComments((prevState: Array<commentType>) => {
        return [...prevState, newComment];
      });

      tasksTool.addCardComment(props.taskId!, props.currentCard.id!, newComment);
    } else {
      alert('The Comment is too short');
    }
  };

  return (
    <CommentsList
      input={props.userComment}
      taskId={props.taskId}
      cardId={props.currentCard.id}
      inputChange={props.keyPressCommentHandler}
      addComment={addComment}
      deleteCommentHandler={deleteCommentHandler}
      commentsArray={comments}
    />
  );
}
export default CommentsListContainer;
