import React from 'react';
import './App.css';
// @ts-ignore
import BitCoinList from './Components/bitCoinCall/BitCoinList';

function App() {
  return (
    <>
      <div>
        <h1>마켓 리스트</h1>
        <BitCoinList />
      </div>
    </>
  );
}

export default App;
