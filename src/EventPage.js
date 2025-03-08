import React, { useEffect, useState } from 'react';
import './App.css';
import FightCard from './fightCard';

function EventPage() {
  const event_path = window.location.href.split('?')[1];
  const [FightsData, setFightsData] = useState([]);
  const [wallpaper, set_wallpaper] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ufc-prediction-backend-xin1.onrender.com/predict/'+event_path);
        const data = await response.json();
        setFightsData(data.match);
        set_wallpaper(data['event_image'][0]['x2']);
      } catch (error) {
        console.error('Error fetching header text:', error);
      }
    }
  fetchData();
  }, []);

  useEffect(() => {
    if (wallpaper) {

      console.log(wallpaper);
      document.body.style.backgroundImage = `url(${wallpaper})`;
      document.body.style.setProperty("background-image", `url('${wallpaper}')`, "important");
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundColor = "transparent";
      document.body.style.backgroundAttachment = "fixed";
    }
  }, [wallpaper]);

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
