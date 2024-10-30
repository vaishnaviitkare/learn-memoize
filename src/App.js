import React, { useCallback, useMemo, useState } from 'react';
import Button from "./components/UI/Button/Button";
import DemoList from "./components/DemoList";
import './App.css';

function App() {
  const [listTitle,setListTitle]=useState('My List');
  const [sortState,setSortState]=useState('ascending');
  const changeTitleHandler=useCallback(()=>{
    setListTitle('New Title');
  },[])
  const titleHandler=useCallback(()=>{
    setSortState((prevState)=>prevState==='ascending'?'descending':'ascending')
  },[])
  const ListItems=useMemo(()=>[5,3,1,10,9],[]);
  return (
    <div className="app">
      <DemoList title={listTitle} items={ListItems} sortState={sortState}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={titleHandler}>{sortState==='ascending'?'Change to Descending Order':'Change to Ascending Order'}</Button>
    </div>
  );
}

export default App;
