import React from 'react';
import MainRouter from './routers/index.router';
import ModalLoad from './components/ModalLoading';

function App() {
  return (
    <div className="App">
      <MainRouter />
      <ModalLoad />
    </div>
  );
}

export default App;
