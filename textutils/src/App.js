import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
 
function App() {

  const [mode,setMode] = useState('light'); //whether dark mode is enabled or not

  const togglemode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <div className="App">
      <Navbar title="Textutils"  abouttext="about" mode={mode} toggelmode={togglemode} />
      <div className="container">
      <TextForm heading='Enter the text to analyze' mode={mode} />
       
      </div>
    </div>
  );
}

export default App;
