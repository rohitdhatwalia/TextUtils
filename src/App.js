import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1000);

    
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode';
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - LightMode';
    }
  }

  return (
    
    <> 
    <Router>
      {/* <Navbar  title = "TextUtils" aboutText = "About" /> */}
      <Navbar  title = "TextUtils" mode={mode} toggleMode={toggleMode}  aboutText = "About"/>
      {/* <Navbar/> */}
      <Alert alert = {alert}/>
      <div className ="container my-3">

      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
        </Switch>

        

         {/* <About/> */}
      </div>
      </Router> 
    </>

    
  );
}

export default App;
