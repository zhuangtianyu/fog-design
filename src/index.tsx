import React from 'react';
import ReactDOM from 'react-dom';
import ButtonDemo from './components/button/demo';

const App = () => {

  return (
    <div className="app">
      <ButtonDemo />
    </div>
  );
};

const root = document.querySelector('.root');

ReactDOM.render(<App />, root);
