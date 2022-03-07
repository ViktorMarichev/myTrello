import taskType from './../types/taskType';
import tasksToolType from '../types/tasksToolType';
import { commentType, cardType } from '../types/taskType';
function generateId(array: Array<any>) {
  const id = Math.random().toString(36).substr(2, 9);

  if (array.find((x) => x.id === id) == undefined) {
    return id;
  } else {
    generateId(array);
  }
}
function updateCardDescription(taskId: string, cardId: string, description: string) {
  const storage: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);
  const index = storage.findIndex((task) => task.id === taskId);
  const cardIndex = storage[index].cards.findIndex((card) => card.id === cardId);
  storage[index].cards[cardIndex].description = description;
  localStorage.setItem('tasks', JSON.stringify(storage));
  return storage[index].cards[cardIndex];
}
function getCard(taskId: string, cardId: string) {
  const storage: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);

  const index = storage.findIndex((task) => task.id === taskId);
  const cardIndex = storage[index].cards.findIndex((card) => card.id === cardId);
  return storage[index].cards[cardIndex];
}
function deleteCard(taskId: string, cardId: string) {
  const storage: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);
  const index = storage.findIndex((task) => task.id === taskId);
  const cards: Array<cardType> = storage[index].cards.filter((card) => card.id !== cardId);
  storage[index].cards = cards;
  localStorage.setItem('tasks', JSON.stringify(storage));
  return storage;
}

function addCardComment(taskId: string, cardId: string, newComment: commentType) {
  const storage: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);
  const index = storage.findIndex((task) => task.id === taskId);
  const cardIndex = storage[index].cards.findIndex((card) => card.id === cardId);
  storage[index].cards[cardIndex].comments.push(newComment);
  localStorage.setItem('tasks', JSON.stringify(storage));
  return storage[index].cards[cardIndex];
}
function updateCardTitle(taskId: string, cardId: string, newTitle: string) {
  const storage: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);
  const index = storage.findIndex((task) => task.id === taskId);
  const cardIndex = storage[index].cards.findIndex((card) => card.id === cardId);
  storage[index].cards[cardIndex].title = newTitle;
  localStorage.setItem('tasks', JSON.stringify(storage));
  return storage[index].cards[cardIndex];
}
function deleteComment(taskId: string, cardId: string, commentId: string) {
  const storage: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);
  const index = storage.findIndex((task) => task.id === taskId);
  const cardIndex = storage[index].cards.findIndex((card) => card.id === cardId);
  storage[index].cards[cardIndex].comments = storage[index].cards[cardIndex].comments.filter(
    (comment) => comment.id !== commentId
  );

  localStorage.setItem('tasks', JSON.stringify(storage));
  return storage[index].cards[cardIndex].comments;
}
function updateComment(taskId: string, cardId: string, commentId: string, message: string) {
  const storage: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);
  const index = storage.findIndex((task) => task.id === taskId);
  const cardIndex = storage[index].cards.findIndex((card) => card.id === cardId);
  const commentIndex = storage[index].cards[cardIndex].comments.findIndex(
    (comment) => comment.id === commentId
  );
  storage[index].cards[cardIndex].comments[commentIndex].message = message;
  storage[index].cards[cardIndex].comments[commentIndex].date = new Date();
  localStorage.setItem('tasks', JSON.stringify(storage));
  return storage[index].cards[cardIndex].comments[commentIndex];
}
export const tasksTool = {
  generateId: generateId,
  updateCardDescription: updateCardDescription,
  getCard: getCard,
  addCardComment: addCardComment,
  updateCardTitle: updateCardTitle,
  deleteCard: deleteCard,
  deleteComment: deleteComment,
  updateComment: updateComment,
} as tasksToolType;
