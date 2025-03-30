import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppHeader from './AppHeader';
import reportWebVitals from './reportWebVitals';

async function fetchData() {
const event_path = window.location.href.split('?')[1];
const url = new URL(window.location.href);
const pathname = url.pathname;

const basePath = 'https://ufc-prediction-backend-xin1.onrender.com';

let data = null;
try {
  if (pathname === '/ufc/' || pathname === '/ufc') {
    const response = await fetch(basePath);
    data = await response.json();
  } else if (pathname === '/ufc/event') {
    const response = await fetch(basePath + '/predict/' + event_path);
    data = await response.json();
  }
} catch (error) {
  console.error('Error fetching header text:', error);
}

const main = ReactDOM.createRoot(document.getElementById('main'));
const header = ReactDOM.createRoot(document.getElementById('header'));

main.render(<App data={data}/>);
header.render(<AppHeader data={data} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
}
fetchData();
reportWebVitals();
