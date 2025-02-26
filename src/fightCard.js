import React, { useEffect, useState } from 'react';
import './fightCard.css';
import ReactCountryFlag from "react-country-flag"


function FightCard({index, red, blue}) {
  const [Match, setMatch] = useState([]);
  return (
    <div className="fight-card">
      <h2 className="fight-category">{Match}</h2>
      <div className="fighters">
        <div className="fighter">
          <div>
            <img
              src={red.image}
              alt={red.Name}
              className="fighter-image"
            />
          </div>
          <h3 className="fight-name">{red.Name} / </h3>
          <p className="country">
            <ReactCountryFlag
              countryCode={red.country_code}
              svg
              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.2.3/flags/4x3/"
              cdnSuffix="svg"
              style={{
                width: '2em',
                height: '2em',
              }}
              title={red.country}
            /> {red.country}
          </p>
          <p className="odds"><b>{red.outcome}</b></p>
        </div>
        <div className="vs">VS</div>
        <div className="fighter">
          <div>
            <img
              src={blue.image}
              alt={blue.Name}
              className="fighter-image"
            />
          </div>
          <h3 className="fight-name">{blue.Name} / </h3>
          <p className="country">
            <ReactCountryFlag
              countryCode={blue.country_code}
              svg
              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.2.3/flags/4x3/"
              cdnSuffix="svg"
              style={{
                width: '2em',
                height: '2em',
              }}
              title={red.country}
            /> {blue.country}
          </p>
          <p className="odds"><b>{blue.outcome}</b></p>
        </div>
      </div>
    </div>
  );
}

export default FightCard;
