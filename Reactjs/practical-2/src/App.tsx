import React from 'react';
import Quiz from './Component/Quiz';
//import Number from './Guess';
import './App.css';
import Number from './Guess';
import StatusBar from './CoustomHook';
import MainApp from './MainApp';

const App: React.FC =() =>{
  return (
  <div className="App">

        <><Quiz/></>
       <><Number/></> 
       <><StatusBar/></>
       <><MainApp/></>
       
    </div>
    
  )
}
export default App;
