//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import EventPage from './EventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ufc" element={<HomePage />} />
        <Route path="/ufc/event" element={<EventPage />} />
      </Routes>
    </Router>
  );

}

export default App;
