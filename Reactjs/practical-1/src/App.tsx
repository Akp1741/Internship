import React from 'react';
import Timer from './Timer';
import ToggleButton from './ToggleButton';
import List from './To-dolist';
import Filter from './Filter';
import './App.css';

  const App: React.FC =() =>{
    return (
      <div className="App">
        <h3> 1st task
       <Timer/></h3> 
        <h3>2nd task 
        <div>  <ToggleButton/></div></h3>
       <h3> 3rd task <Filter/></h3>
        <h3>4 task<List/></h3>
      </div>
    )
  }
  export default App;