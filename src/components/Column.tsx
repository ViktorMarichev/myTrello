import React from 'react';
import styled from 'styled-components';
import plus from '../img/plus.svg';
import taskType from '../types/taskType';
type ColumnProps = {
  target: taskType;
};
const StyledColumn = styled.div`
  border-radius: 15px;
  max-width: 273px;
  width: 100%;
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
function Column(props: ColumnProps) {
  return (
    <StyledColumn>
      <TitleWrapper>
        <Title>{props.target.title}</Title>
      </TitleWrapper>
      <AddCardWrapper>
        <AddCardIcon src={plus} />
        <AddCardText>Add card</AddCardText>
      </AddCardWrapper>
    </StyledColumn>
  );
}
export default Column;
