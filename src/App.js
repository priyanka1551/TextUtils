import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// import Features from './Features';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#6c757d';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
     <Navbar mode={mode} toggleMode={toggleMode} />
     <Home mode={mode} />
      {/* <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="conatiner my-3"> */}
          {/* <Switch> */}
            {/* <Route exact path="/"> */}
              {/* <Home mode={mode} /> */}
            {/* </Route> */}
            {/* <Route exact path="/features">
              <Features />
            </Route> */}
          {/* </Switch> */}
        {/* </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
