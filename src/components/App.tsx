import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Container from './Container';
import ColumnContainer from './ColumnContainer';
import Modal from './Modal';
import Popup from './Popup';
import CardInfo from './CardInfo';
import DeletePopupMessage from './DeletePopupMessage';
import { cardPositionType } from '../types/Card';
import taskType, { cardType } from '../types/taskType';
import { tasksTool } from '../context/tasksTool';

const Global = createGlobalStyle`
* {
  margin:0;
}

`;
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
  height: 100%;
`;
function App() {
  const [userName, setUserName] = useState<string>(
    localStorage.getItem('username') != null ? localStorage.getItem('username')! : ''
  );
  const [currentCard, setCurrentCard] = useState<any>({});
  const [action, setAction] = useState<string>('');
  const [cardPosition, setCardPosition] = useState<cardPositionType>({
    taskId: null,
    cardId: null,
    columnName: null,
  });
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
  }, []);
  const [isChangedDescription, setIsChangedDescription] = useState<boolean>(false);
  const [userComment, setUserComment] = useState<string>('');

  const [tasks, setTasks] = useState<Array<taskType>>(initialState);

  useEffect(() => {
    if (cardPosition.cardId !== null) {
      const currCard: cardType = tasksTool.getCard(cardPosition.taskId!, cardPosition.cardId!);

      setCurrentCard(currCard);
      console.log(currentCard);
    }
  }, [cardPosition]);

  const setUserNameHandler = (name: string) => {
    localStorage.setItem('username', name);
    setUserName(name);
  };

  // localStorage.removeItem('username');
  const closePopupDetails = () => {
    setAction('');
    setCardPosition({ taskId: null, cardId: null, columnName: null });
    setCurrentCard({});
    setIsChangedDescription(false);
  };
  const closePopupDelete = () => {
    setCardPosition({ taskId: null, cardId: null, columnName: null });
    setCurrentCard({});
    setAction('');
  };
  const onAgreeDelete = () => {
    setTasks(tasksTool.deleteCard(cardPosition.taskId!, cardPosition.cardId!));
    setAction('');
  };
  const onCancelDelete = () => {
    setAction('');
  };

  const keyPressHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentCard((prevState: cardType) => {
      return { ...prevState, description: e.target.value };
    });
    if (currentCard.description != '') setIsChangedDescription(true);
    else setIsChangedDescription(false);
  };

  const keyPressCommentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserComment(e.target.value);
  };

  const setDescription = () => {
    tasksTool.updateCardDescription(
      cardPosition.taskId!,
      cardPosition.cardId!,
      currentCard.description
    );
  };
  return (
    <>
      <Global />
      <Modal
        setUserName={setUserNameHandler}
        display={userName !== '' ? 'none' : 'block'}
        title="Enter your Name"
      />

      <Popup display={action === 'openDetails'} onClose={closePopupDetails}>
        <CardInfo
          isChangedDescription={isChangedDescription}
          setIsChangedDescription={setIsChangedDescription}
          columnName={cardPosition.columnName!}
          userComment={userComment}
          keyPressHandler={keyPressHandler}
          keyPressCommentHandler={keyPressCommentHandler}
          currentCard={currentCard}
          cardPosition={cardPosition}
          setDescription={setDescription}
        />
      </Popup>
      <Popup display={action === 'delete'} onClose={closePopupDelete}>
        <DeletePopupMessage
          title={currentCard.title}
          onAgree={onAgreeDelete}
          onCancel={onCancelDelete}
        />
      </Popup>
      <Header title="oreGairu" />
      <StyledMain>
        {tasks.map((elem: taskType) => {
          return (
            <ColumnContainer
              username={userName}
              columnId={elem.id}
              key={elem.id}
              target={elem}
              setTasks={setTasks}
              setCardPosition={setCardPosition}
              setAction={setAction}
            />
          );
        })}
      </StyledMain>
    </>
  );
}

export default App;
