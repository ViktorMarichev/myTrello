import { MouseEvent } from 'react';
export type cardPositionType = {
  taskId: null | string;
  cardId: null | string;
  columnName?: null | string;
  cardName?: null | string;
};
type cardType = {
  id: string;
  title: string;
  textAreaHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  comentsCount: number;
  onClick: (id: string) => void;
  isChangedCard: boolean;
  SaveTitleButtonHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  EditButtonHandler: (e: MouseEvent<HTMLImageElement>) => void;
  CancellButtonHandler: (e: MouseEvent<HTMLImageElement>) => void;
  deleteCardHandler: (cardId: string) => void;
};

export default cardType;
