import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Main from './Main';
import Modal from './Modal';
const Global = createGlobalStyle`
* {
  margin:0;
}
`;
function App() {
  const [userName, setUserName] = useState<string>(
    localStorage.getItem('username') != null ? localStorage.getItem('username')! : ''
  );
  const setUserNameHandler = (name: string) => {
    localStorage.setItem('username', name);
    setUserName(name);
  };
  // localStorage.removeItem('username');

  return (
    <>
      <Global />
      <Modal
        setUserName={setUserNameHandler}
        display={userName !== '' ? 'none' : 'block'}
        title="Enter your Name"
      />

      <Header title="oreGairu" />
      <Main />
    </>
  );
}

export default App;
