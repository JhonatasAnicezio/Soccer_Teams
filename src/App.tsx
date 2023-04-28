import React from 'react';
import Card from './components/Card';
import classes  from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <h1>SELEÇÃO DE TIMES</h1>
        <Card />
      </div>
    </div>
  );
}

export default App;
