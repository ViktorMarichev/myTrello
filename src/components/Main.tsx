import React, { useState } from 'react';
import styled from 'styled-components';
import Column from './Column';
import Container from './Container';
import taskType from '../types/taskType';
const StyledMain = styled.main`
  display: flex;
  flex-wrap: no-wrap;
  padding-left: 15px;
  padding-top: 15px;
`;
// famous
function Main() {
  const initialState: any = localStorage.getItem('tasks')
    ? Array.from(JSON.parse(localStorage.getItem('tasks')!))
    : [
        { id: 0, title: 'TODO', cards: [] },
        { id: 1, title: 'In Progress', cards: [] },
        { id: 2, title: 'Testing', cards: [] },
        { id: 3, title: 'Done', cards: [] },
      ];
  const [tasks] = useState<Array<taskType>>(initialState);

  return (
    <Container>
      <StyledMain>
        {tasks.map((elem) => {
          return <Column key={elem.id} target={elem} />;
        })}
      </StyledMain>
    </Container>
  );
}
export default Main;
