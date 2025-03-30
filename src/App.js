import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import EventPage from './EventPage';

function App({data}) {
  return (
    <Router basename='/ufc'>
      <Routes>
        <Route path="/" element={<HomePage data={data}/>} />
        <Route path="/event" element={<EventPage data={data}/>} />
      </Routes>
    </Router>
  );

}

export default App;
