import React, { useEffect, useState } from 'react';
import './App.css';

function AppHeader({data}) {
  const url = new URL(window.location.href);
  const pathname = url.pathname;

  const match = window.location.href.match(/^(https?:\/\/[^/]+\/ufc\/)/);
  const basePath = match ? match[1] : "";

  const [Event_name, setEvent_name] = useState('');
  const [Event_time, setEvent_time] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (pathname === '/ufc/' || pathname === '/ufc') {
          ;
        } else if (pathname === '/ufc/event') {
          setEvent_name(data.event_name);
          setEvent_time(data.event_time);
        }
      } catch (error) {
        console.error('Error fetching header text:', error);
      }
    };

    fetchData();
  }, []);

  if (pathname === '/ufc/' || pathname === '/ufc') {
    return (
        <div>
          <br></br>
          <h1>UFC Match Prediction<br/></h1>
          <p>This project explores the use of machine learning to predict UFC fight outcomes based on historical data and fighter statistics. The model analyzes key metrics like striking accuracy, takedown success, and other performance factors to estimate the probability of each fighter winning.</p>
          <p>In addition to the predictions, we provide a comparison with real-time betting odds from several major platforms, offering an interesting benchmark for evaluating the model accuracy.
Explore the predictions below and see how the model performs!<br/></p>

        </div>
    );
  } else if (pathname === '/ufc/event') {
    return (
      <header id="header">
        <h3>{Event_time}</h3>
        <a id="Recently_Event" href={basePath} className="logo">{Event_name}</a>
      </header>
    );
  }

}

export default AppHeader;
