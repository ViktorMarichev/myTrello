import { ChangeEvent } from 'react';
import { cardType } from './taskType';
type columnProps = {
  title: string;
  cards: Array<cardType>;
  cardName: string;
  setCardName: (value: string) => void;
  AddCardButtonHandler: () => void;
  textAreaHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  cardClickHandler: (id: string) => void;
};
export default columnProps;
