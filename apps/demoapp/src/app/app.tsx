import React from 'react';

import './app.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import SomeClass from './SomeClass';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.css file.
   */
  const someClass = new SomeClass('Demo App')

  return (
    <div className="app">
      <header className="flex">
        <h1>Welcome to {someClass.getName()}</h1>
      </header>
    </div>
  );
};

export default App;
