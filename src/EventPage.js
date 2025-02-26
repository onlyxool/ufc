import React, { useEffect, useState } from 'react';
import './App.css';
import FightCard from './fightCard';

function EventPage() {
  const event_path = window.location.href.split('?')[1];
  const [FightsData, setFightsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ufc-prediction-backend-xin1.onrender.com/predict/'+event_path);
        const data = await response.json();
        setFightsData(data.match);
      } catch (error) {
        console.error('Error fetching header text:', error);
      }
    }
  fetchData();
  }, []);

  return (
    <div className="App">
      {FightsData.map((match, index) => (
        <FightCard
          key = {index}
          red = {match.red}
          blue = {match.blue}
        />
      ))}
    </div>
  );

}

export default EventPage;
