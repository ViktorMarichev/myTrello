import { cardPositionType } from './Card';
import { ChangeEvent } from 'react';
import { cardType } from './taskType';
type columnProps = {
  id: string;
  title: string;
  cards: Array<cardType>;
  cardName: string;
  setCardName: (value: string) => void;
  AddCardButtonHandler: () => void;
  textAreaHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  cardClickHandler: (cardPosition: cardPositionType) => void;
  setAction: (s: string) => void;
};
export default columnProps;
