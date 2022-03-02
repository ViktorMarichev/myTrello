type commentType = {
  id: number;
  username: string;
  message: string;
};
type cardType = {
  id: number;
  title: string;
  comments: Array<commentType>;
};
type taskType = {
  id: number;
  title: string;
  cards: Array<cardType>;
};

export default taskType;
