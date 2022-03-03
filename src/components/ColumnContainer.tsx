import React, { useState } from 'react';
import Column from './Column';
import taskType from '../types/taskType';
import { cardType } from '../types/taskType';
import { currentCardType } from '../types/Card';
type ColumnContainerProps = {
  target: taskType;
  setTasks: (arr: Array<taskType>) => void;
  generateId: (arr: Array<cardType>) => any;
  setCurrentCard: (currentCard: currentCardType) => void;
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
      id: props.generateId(storageСopy[index].cards),
      title: cardName,
      comments: [],
      description: '',
    });
    localStorage.setItem('tasks', JSON.stringify(storageСopy));
    props.setTasks(storageСopy);
    setCardName('');
  };
  const cardClickHandler = (id: string) => {
    console.log('click' + id);
    props.setCurrentCard({ cardId: id, taskId: props.target.id });
  };
  return (
    <Column
      cardName={cardName}
      setCardName={setCardName}
      textAreaHandler={textAreaHandler}
      AddCardButtonHandler={addCardHandler}
      title={props.target.title}
      cards={props.target.cards}
      cardClickHandler={cardClickHandler}
    />
  );
}

export default ColumnContainer;
