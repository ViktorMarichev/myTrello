import React, { useState } from 'react';
// import { cardType } from '../types/taskType';
import { cardType } from '../types/taskType';
import { cardPositionType } from '../types/Card';
import { tasksTool } from '../context/tasksTool';
import Card from './Card';
type CardContainerType = {
  card: cardType;
  columnId: string;
  columnName: string;
  cardClickHandler: (cardPosition: cardPositionType) => void;
  setAction: (s: string) => void;
};
function CardContainer(props: CardContainerType) {
  const [isChangedCard, setIsChangedCard] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(props.card.title);
  const EditButtonHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setIsChangedCard(true);
  };
  const SaveTitleButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log(e.currentTarget.textContent);
    tasksTool.updateCardTitle(props.columnId, props.card.id, title);
    setIsChangedCard(false);
  };
  const CancellButtonHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setIsChangedCard(false);
    setTitle(props.card.title);
  };
  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.currentTarget.value);
  };
  const cardClickHandler = (id: string) => {
    const cardPosition = {
      cardId: id,
      taskId: props.columnId,
      columnName: props.columnName,
    } as cardPositionType;
    setIsChangedCard(false);
    setTitle(props.card.title);
    props.cardClickHandler(cardPosition);
    props.setAction('openDetails');
  };
  const deleteCardHandler = (cardId: string) => {
    const cardPosition = {
      cardId: cardId,
      taskId: props.columnId,
      columnName: props.columnName,
    } as cardPositionType;
    props.cardClickHandler(cardPosition);
    props.setAction('delete');
  };
  return (
    <Card
      key={props.card.id}
      id={props.card.id}
      title={title}
      textAreaHandler={textAreaHandler}
      comentsCount={props.card.comments.length}
      onClick={cardClickHandler}
      isChangedCard={isChangedCard}
      SaveTitleButtonHandler={SaveTitleButtonHandler}
      EditButtonHandler={EditButtonHandler}
      CancellButtonHandler={CancellButtonHandler}
      deleteCardHandler={deleteCardHandler}
    />
  );
}
export default CardContainer;
