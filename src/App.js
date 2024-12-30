import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000');
        const data = await response.json();
        setHeaderText(data[0].event_name);
      } catch (error) {
        console.error('Error fetching header text:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
