export type currentCardType = {
  taskId: string | null;
  cardId: string | null;
};
type cardType = {
  id: string;
  title: string;
  comentsCount: number;
  onClick: (id: string) => void;
};
export default cardType;
