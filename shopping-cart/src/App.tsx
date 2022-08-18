
import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Nav from './Components/Nav';
import { NamedDeclaration } from 'typescript';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
