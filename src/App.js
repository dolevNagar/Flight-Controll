import './App.css';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import SignIn from './components/SignIn';
import ControlPanel from './components/ControlPanel';
import Sort from './components/Sort';
import AddFlight from './components/AddFlight';
import Delete from './components/Delete';
import FlightList from './components/FlightList';

function App() {
  const [plain, setPlain] = useState([
    {
      id: 11111,
      company: "El-Al",
      passengers: 150
    },
    {
      id: 22222,
      company: "Air Canada",
      passengers: 250
    },
    {
      id: 33333,
      company: "Easy Jet",
      passengers: 100
    },
    {
      id: 44444,
      company: "Delta",
      passengers: 450
    },
  ]);

  useEffect(() => {
    setPlain(plain)
  }, [plain]);

  return (
    <div>
      <Header />
      <HashRouter>
        <div id='appDiv'>
          <FlightList plain={plain} />
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/controlpanel' element={
              <ControlPanel
                plain={plain}
              />} />
            <Route path='/controlpanel/sort' element={
              <Sort
                plain={plain}
                setPlain={setPlain}
              />} />
            <Route path='/controlpanel/add' element={
              <AddFlight
                plain={plain}
                setPlain={setPlain}
              />} />
            <Route path='/controlpanel/delete' element={
              <Delete
                plain={plain}
                setPlain={setPlain}
              />} />
          </Routes>
        </div>
      </HashRouter>
    </div >
  );
}

export default App;
