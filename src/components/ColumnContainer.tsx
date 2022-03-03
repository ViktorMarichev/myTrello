import React, { useState } from 'react';
import Column from './Column';
import taskType from '../types/taskType';

type ColumnContainerProps = {
  target: taskType;
  tasks: Array<taskType>;
  setTasks: (arr: Array<taskType>) => void;
  generateId: (arr: Array<taskType>) => any;
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
      id: props.generateId(storageСopy),
      title: cardName,
      comments: [],
    });
    localStorage.setItem('tasks', JSON.stringify(storageСopy));
    props.setTasks(storageСopy);
    setCardName('');
  };
  return (
    <Column
      cardName={cardName}
      setCardName={setCardName}
      textAreaHandler={textAreaHandler}
      AddCardButtonHandler={addCardHandler}
      title={props.target.title}
      cards={props.target.cards}
    />
  );
}

export default ColumnContainer;
