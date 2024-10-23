import React from 'react';
import MainRouter from './routers/router';
import ModalLoad from './components/ModalLoading';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainRouter />
      <ModalLoad />
    </div>
  );
}

export default App;
