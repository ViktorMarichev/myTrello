import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Column from './Column';
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
        { id: 0, title: 'TODO', cards: [] },
        { id: 1, title: 'In Progress', cards: [] },
        { id: 2, title: 'Testing', cards: [] },
        { id: 3, title: 'Done', cards: [] },
      ];
  useEffect(() => {
    if (localStorage.getItem('tasks') === null)
      localStorage.setItem('tasks', JSON.stringify(initialState));
    console.log(localStorage.getItem('tasks'));
  }, []);
  const [tasks, setTasks] = useState<Array<taskType>>(initialState);
  const addCardHandler = (card: string, id: number) => {
    const storageСopy: Array<taskType> = Array.from(JSON.parse(localStorage.getItem('tasks')!)!);
    const index = storageСopy.findIndex((task) => task.id === id);
    storageСopy[index].cards.push({ id: storageСopy.length + 1, title: card, comments: [] });
    localStorage.setItem('tasks', JSON.stringify(storageСopy));
    setTasks(storageСopy);
  };
  return (
    <StyledMain>
      {tasks.map((elem) => {
        return <Column key={elem.id} target={elem} addCard={addCardHandler} />;
      })}
    </StyledMain>
  );
}
export default Main;
