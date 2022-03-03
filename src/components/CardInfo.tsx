import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import taskType, { cardType } from '../types/taskType';
import { currentCardType } from '../types/Card';
type cardInfoProps = {
  currentCard: currentCardType;
};
const InfoBody = styled.div`
  background-color: white;
  width: 100%;
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
  padding-left: 23px;
  width: 100%;
  resize: none;
  ::placeholder {
    color: #0b97dc;
  }
`;
const SaveDescriptionButton = styled.button`
width: 100%;
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
function CardInfo(props: cardInfoProps) {
  const [currentCard, setCurrentCard] = useState<cardType | any>({});
  const [isChanged, setIsChanged] = useState(Boolean);
  useEffect(() => {
    if (props.currentCard.cardId === null) return;

    const currCard: cardType = getCard(props.currentCard.taskId!, props.currentCard.cardId!);
    setCurrentCard(currCard);
  }, [props.currentCard]);
  const keyPressHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentCard((prevState: cardType) => {
      return { ...prevState, description: e.target.value };
    });
    if (currentCard.description != '') setIsChanged(true);
    else setIsChanged(false);
  };
  function getCard(taskId: string, cardId: string) {
    const storage: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);

    const index = storage.findIndex((task) => task.id === props.currentCard.taskId);
    const cardIndex = storage[index].cards.findIndex(
      (card) => card.id === props.currentCard.cardId
    );
    return storage[index].cards[cardIndex];
  }
  const sendCardToStorage = (description: string) => {
    const storage: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);

    const index = storage.findIndex((task) => task.id === props.currentCard.taskId);
    const cardIndex = storage[index].cards.findIndex(
      (card) => card.id === props.currentCard.cardId
    );
    storage[index].cards[cardIndex] = currentCard;
    localStorage.setItem('tasks', JSON.stringify(storage));
  };
  return (
    <InfoBody>
      <TitleWrapper>
        <Title>{currentCard.title}</Title>
        <DescriptionWrapper>
          <Description
            onChange={keyPressHandler}
            value={currentCard.description}
            placeholder="enter description"
          />
        </DescriptionWrapper>
        {isChanged ? (
          <SaveDescriptionButton onClick={() => sendCardToStorage(currentCard.description)}>
            Save description
          </SaveDescriptionButton>
        ) : null}
      </TitleWrapper>
    </InfoBody>
  );
}
export default CardInfo;
