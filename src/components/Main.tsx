import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ColumnContainer from './ColumnContainer';
import Container from './Container';
import taskType from '../types/taskType';

const StyledMain = styled(Container)`
  display: flex;
  flex-wrap: no-wrap;
  padding-left: 15px;
  padding-top: 15px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: auto;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  height: 100%;
`;
// comment
function Main() {
  const initialState: any = localStorage.getItem('tasks')
    ? Array.from(JSON.parse(localStorage.getItem('tasks')!))
    : [
        { id: '0', title: 'TODO', cards: [] },
        { id: '1', title: 'In Progress', cards: [] },
        { id: '2', title: 'Testing', cards: [] },
        { id: '3', title: 'Done', cards: [] },
      ];
  useEffect(() => {
    if (localStorage.getItem('tasks') === null)
      localStorage.setItem('tasks', JSON.stringify(initialState));
    console.log(localStorage.getItem('tasks'));
  }, []);
  const [tasks, setTasks] = useState<Array<taskType>>(initialState);
  function generateId(array: Array<taskType>) {
    const id = Math.random().toString(36).substr(2, 9);

    if (array.find((x) => x.id === id) == undefined) {
      return id;
    } else {
      generateId(array);
    }
  }

  return (
    <StyledMain>
      {tasks.map((elem) => {
        return (
          <ColumnContainer
            key={elem.id}
            target={elem}
            tasks={tasks}
            setTasks={setTasks}
            generateId={generateId}
          />
        );
      })}
    </StyledMain>
  );
}
export default Main;
