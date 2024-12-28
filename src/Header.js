import React, { useEffect, useState } from 'react';

function Header() {
  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    const fetchHeaderText = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000');
        const data = await response.json();
        setHeaderText(data[0].event_name);
      } catch (error) {
        console.error('Error fetching header text:', error);
      }
    };

    fetchHeaderText();
  }, []);

  return (
    <header id="header">
      <a href="index.html" id="Recently_Event" className="logo">
        {headerText} {}
      </a>
    </header>
  );
}

export default Header;

