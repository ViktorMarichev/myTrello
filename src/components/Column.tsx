import React, { useState } from 'react';
import styled from 'styled-components';
import plus from '../img/plus.svg';
import cross from '../img/cross.svg';
import taskType from '../types/taskType';

type ColumnProps = {
  target: taskType;
  addCard: (card: string, id: number) => void;
};
const StyledColumn = styled.div`
  border-radius: 15px;
  min-width: 273px;
  width: 100%;
  height: auto;
  padding: 0 5px 0px 5px;
  margin-right: 15px;
  background-color: #4b494a;
  border: 1px solid #4b494a;
  overflow: hidden;
`;
const TitleWrapper = styled.div`
  padding: 10px 8px;
`;
const Title = styled.div`
  font-family: 'Balsamiq Sans', cursive;
  font-weight: bold;
  color: white;
`;
const AddCardWrapper = styled.div`
  border-radius: 3px;

  display: flex;
  flex: 1 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 8px;
  cursor: default;
  &:hover {
    background-color: #e2e2e2;
  }
`;
const AddingACard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddCardIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  text-shadow: 2px 1px 1px white;
`;
const AddCardText = styled.div`
  font-family: 'Comfortaa', cursive;
  font-weight: bold;
  color: white;
  font-size: 15px;
  ${AddCardWrapper}:hover & {
    color: #e1528d !important;
    text-shadow: 2px 1px 1px white;
  }
`;
const CardTitle = styled.textarea`
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
const AddingACardButton = styled.button`
  width: 100%;
  height: 40px;
  max-width: 125px;
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
const AddingACardButtonWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding 5px; 2px; 5px; 2px;
`;

const CloseButton = styled.img`
  width: 30px;
  height: 30px;
  filter: drop-shadow(1px 1px 3px white);
  &:hover {
    box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform: scale(0.98);
  }
`;
const CardList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const CardListItem = styled.div`
  background-color: white;
  border-radius: 10px;
  min-height: 60px;
  margin-bottom: 5px;
`;
function Column(props: ColumnProps) {
  // const [id] = useState<number>(props.target.id);
  const [iSaddedTo, setIsAddedTo] = useState<boolean>();
  const [cardName, setCardName] = useState<string>('');
  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardName(e.currentTarget.value);
  };

  return (
    <StyledColumn>
      <TitleWrapper>
        <Title>{props.target.title}</Title>
      </TitleWrapper>
      <CardList>
        {props.target.cards.map((elem) => {
          return <CardListItem key={elem.id}>{elem.title}</CardListItem>;
        })}
      </CardList>
      {!iSaddedTo ? (
        <AddCardWrapper onClick={() => setIsAddedTo(true)}>
          <AddCardIcon src={plus} />
          <AddCardText>Add card</AddCardText>
        </AddCardWrapper>
      ) : (
        <AddingACard>
          <CardTitle placeholder="Enter the title" onChange={textAreaHandler} value={cardName} />
          <AddingACardButtonWrapper>
            <AddingACardButton onClick={() => props.addCard(cardName, props.target.id)}>
              Add card
            </AddingACardButton>
            <CloseButton
              src={cross}
              onClick={() => {
                setIsAddedTo(false);
                setCardName('');
              }}
            />
          </AddingACardButtonWrapper>
        </AddingACard>
      )}
    </StyledColumn>
  );
}
export default Column;
