import React from 'react'
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import Keyboard from './components/views/Keyboard/Keyboard';
import Rank from './components/views/Rank/Rank';

function App() {
  return (
    <BrowserRouter>
      <div className="balck-nav" style={{color: "red"}}>
            <ul>
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Keyboard">타자치기</Link>
                </li>
                <li>
                    <Link to="/Rank">랭킹보기</Link>
                </li>
            </ul>
        </div>
    
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Keyboard' element={<Keyboard />} />
        <Route path='/Rank' element={<Rank />} />
    </Routes>
</BrowserRouter>
  )
}


export default App;
