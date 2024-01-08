import React from 'react';
import Quiz from './Component/Quiz';
//import Number from './Guess';
import './App.css';
import CombinedApp from './Guess';

const App: React.FC =() =>{
  return (
  <div className="App">

        <><Quiz/></>
       <><CombinedApp/></> 
       
    </div>
    
  )
}
export default App;
