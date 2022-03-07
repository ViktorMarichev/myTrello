export type commentType = {
  id: string;
  username: string;
  message: string;
  date: Date;
};
export type cardType = {
  id: string;
  title: string;
  comments: Array<commentType>;
  description: string;
  author: string;
};
export type taskType = {
  id: string;
  title: string;
  cards: Array<cardType>;
};

export default taskType;
