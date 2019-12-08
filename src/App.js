import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
