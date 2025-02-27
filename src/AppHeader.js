//import { BrowserRouter as Router, Routes, Route, useParams, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';

function AppHeader() {
  const [isActive, setActive] = useState(false);

  const event_path = window.location.href.split('?')[1];

  const url = new URL(window.location.href);
  const pathname = url.pathname;
  const queryString = url.search.substring(1);

  const [Event_name, setEvent_name] = useState('');
  const [Event_time, setEvent_time] = useState('');
  const [Event_Link0, setEvent_Link0] = useState('');
  const [Event_image0, setEvent_image0] = useState('');
  const [Event_match0, setEvent_match0] = useState('');

  if (pathname === '/') {
    ;
  } else if (pathname === '/event') {
    //const [Event_name, setEvent_name] = useState('');
    //const [Event_time0, setEvent_time0] = useState('');
    //const [Event_Link0, setEvent_Link0] = useState('');
    //const [Event_image0, setEvent_image0] = useState('');
    //const [Event_match0, setEvent_match0] = useState('');
  } else {

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (pathname === '/ufc') {
          ;
        } else if (pathname === '/ufc/event') {
          const response = await fetch('https://ufc-prediction-backend-xin1.onrender.com/predict/'+event_path);
          const data = await response.json();
          setEvent_name(data.event_name);
          setEvent_time(data.event_time);
          setActive(true);
        }
      } catch (error) {
        console.error('Error fetching header text:', error);
      }
    };

    fetchData();
  }, []);

  if (pathname === '/ufc') {
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
        <a id="Recently_Event" href="index.html" className="logo">{Event_name}</a>
      </header>
    );
  }

}

export default AppHeader;
