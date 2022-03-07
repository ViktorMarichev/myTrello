import taskType, { cardType, commentType } from './taskType';

type tasksToolType = {
  generateId: (array: Array<any>) => string | undefined;
  updateCardDescription: (taskId: string, cardId: string, description: string) => cardType;
  getCard: (taskId: string, cardId: string) => cardType;
  addCardComment: (taskId: string, cardId: string, comment: commentType) => cardType;
  updateCardTitle: (taskId: string, cardId: string, title: string) => cardType;
  deleteCard: (taskId: string, cardId: string) => Array<taskType>;
  deleteComment: (taskId: string, cardId: string, commentId: string) => Array<commentType>;
  updateComment: (
    taskId: string,
    cardId: string,
    commentId: string,
    message: string
  ) => commentType;
};
export default tasksToolType;
