import React, { useState } from 'react';
import Column from './Column';
import taskType from '../types/taskType';
import { cardPositionType } from '../types/Card';
import { tasksTool } from '../context/tasksTool';
type ColumnContainerProps = {
  columnId: string;
  target: taskType;
  setTasks: (arr: Array<taskType>) => void;
  setCardPosition: (currentCard: cardPositionType) => void;
  setAction: (s: string) => void;
  username: string;
};
function ColumnContainer(props: ColumnContainerProps) {
  const [cardName, setCardName] = useState<string>('');
  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardName(e.currentTarget.value);
  };
  const addCardHandler = () => {
    if (cardName === '') return;
    const id = props.target.id;
    const storageСopy: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);
    const index = storageСopy.findIndex((task) => task.id === id);
    storageСopy[index].cards.push({
      id: tasksTool.generateId(storageСopy[index].cards)!,
      title: cardName,
      comments: [],
      description: '',
      author: props.username,
    });
    localStorage.setItem('tasks', JSON.stringify(storageСopy));
    props.setTasks(storageСopy);
    setCardName('');
  };
  return (
    <Column
      id={props.target.id}
      cardName={cardName}
      setCardName={setCardName}
      textAreaHandler={textAreaHandler}
      AddCardButtonHandler={addCardHandler}
      title={props.target.title}
      cards={props.target.cards}
      cardClickHandler={props.setCardPosition}
      setAction={props.setAction}
    />
  );
}

export default ColumnContainer;
