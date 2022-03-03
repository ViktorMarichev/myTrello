import React from 'react';
import styled from 'styled-components';
import cardType from '../types/Card';
import commentImage from '../img/comment.png';
const CardListItem = styled.div`
  background-color: white;
  border-radius: 10px;
  min-height: 60px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
const CardListItemTitle = styled.div`
  font-family: 'Balsamiq Sans', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #0b97dc;
  padding: 5px;
`;
const CardBottom = styled.div`
  display: flex;
  padding: 5px 5px;
  align-items: center;
`;
const CommentImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 3px;
`;
const CommentCount = styled.div`
  font-family: 'Balsamiq Sans', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #e1528d;
`;
function Card(props: cardType) {
  return (
    <CardListItem key={props.id} onClick={() => props.onClick(props.id)}>
      <CardListItemTitle>{props.title}</CardListItemTitle>
      <CardBottom>
        <CommentImage src={commentImage} />
        <CommentCount>{props.comentsCount}</CommentCount>
      </CardBottom>
    </CardListItem>
  );
}
export default Card;
