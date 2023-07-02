import React from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import GetInTouch from './pages/GetInTouch';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='//signup' element={<SignUp />} />
        <Route path='/touch' element={<GetInTouch />} />
      </Routes>
    </>
  );
}

export default App;
