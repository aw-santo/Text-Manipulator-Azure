
import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import { Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = ( tp, msg ) => {
    setAlert({
      message: msg,  
      type: tp
    });

    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = "#363836";
      showAlert("success", "Dark mode hase been enabled");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "#FFFFFF";
      showAlert("success", "Dark mode hase been disabled");
    }
  }

  return (
    <>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} alert={showAlert} />} />
          </Routes>
          {/* <TextForm heading="Enter the text to analyze" mode={mode} alert={showAlert} /> */}
        </div>
    </>
  );
}

export default App;
