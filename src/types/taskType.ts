export type commentType = {
  id: string;
  username: string;
  message: string;
};
export type cardType = {
  id: string;
  title: string;
  comments: Array<commentType>;
  description: string;
};
export type taskType = {
  id: string;
  title: string;
  cards: Array<cardType>;
};

export default taskType;
