import React, { useState } from 'react';
import './App.css';
import ListLoans from './components/ListLoans';
import { toString,toNumber } from './helpers';

const App = () => {
  const [total, setTotal] = useState(0)

  const onInvest = (value) => {
    let a = toString(toNumber(total) + toNumber(value))
    setTotal(a)
  }

  return (
    <div className="main-view">
      <h4>Current Loans</h4>
      <ListLoans onInvest={onInvest}/>
      <h4> Total invest: {total}</h4>
    </div>    
  );
}

export default App;
