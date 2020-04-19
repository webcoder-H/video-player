import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route} from 'react-router-dom';
import Home from "./comp/home";
import Video from "./comp/video";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route exact path="/"  component={Home} />
    <Route path="/:videoName" component={Video}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
