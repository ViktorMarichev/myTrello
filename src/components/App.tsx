import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Main from './Main';
import Modal from './Modal';
import Popup from './Popup';
import CardInfo from './CardInfo';
import { currentCardType } from '../types/Card';
const Global = createGlobalStyle`
* {
  margin:0;
}
`;
function App() {
  const [userName, setUserName] = useState<string>(
    localStorage.getItem('username') != null ? localStorage.getItem('username')! : ''
  );

  const [currentCard, setCurrentCard] = useState<currentCardType>({ taskId: null, cardId: null });
  const setUserNameHandler = (name: string) => {
    localStorage.setItem('username', name);
    setUserName(name);
  };
  // localStorage.removeItem('username');
  const closePopup = () => {
    setCurrentCard({ taskId: null, cardId: null });
  };
  return (
    <>
      <Global />
      <Modal
        setUserName={setUserNameHandler}
        display={userName !== '' ? 'none' : 'block'}
        title="Enter your Name"
      />
      <Popup display={currentCard.taskId != null} onClose={closePopup}>
        <CardInfo currentCard={currentCard} />
      </Popup>
      <Header title="oreGairu" />
      <Main setCurrentCard={setCurrentCard} />
    </>
  );
}

export default App;
