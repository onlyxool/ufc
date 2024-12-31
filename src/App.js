//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isActive, setActive] = useState(false);

  const [Event_name0, setEvent_name0] = useState('');
  const [Event_time0, setEvent_time0] = useState('');
  const [Event_Link0, setEvent_Link0] = useState('');
  const [Event_image0, setEvent_image0] = useState('');
  const [Event_match0, setEvent_match0] = useState('');

  const [Event_name1, setEvent_name1] = useState('');
  const [Event_time1, setEvent_time1] = useState('');
  const [Event_Link1, setEvent_Link1] = useState('');
  const [Event_image1, setEvent_image1] = useState('');
  const [Event_match1, setEvent_match1] = useState('');

  const [Event_name2, setEvent_name2] = useState('');
  const [Event_time2, setEvent_time2] = useState('');
  const [Event_Link2, setEvent_Link2] = useState('');
  const [Event_image2, setEvent_image2] = useState('');
  const [Event_match2, setEvent_match2] = useState('');

  const [Event_name3, setEvent_name3] = useState('');
  const [Event_time3, setEvent_time3] = useState('');
  const [Event_Link3, setEvent_Link3] = useState('');
  const [Event_image3, setEvent_image3] = useState('');
  const [Event_match3, setEvent_match3] = useState('');

  const [Event_name4, setEvent_name4] = useState('');
  const [Event_time4, setEvent_time4] = useState('');
  const [Event_Link4, setEvent_Link4] = useState('');
  const [Event_image4, setEvent_image4] = useState('');
  const [Event_match4, setEvent_match4] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000');
        const data = await response.json();
        setEvent_name0(data[0].event_name);
        setEvent_time0(data[0].event_time);
        setEvent_Link0("event.html?event="+data[0].event_path);
        setEvent_image0(data[0].event_image[1].x1);
        setEvent_match0(data[0].main_event_red+'     VS     '+data[0].main_event_blue);

        setEvent_name1(data[1].event_name);
        setEvent_time1(data[1].event_time);
        setEvent_Link1("event.html?event="+data[1].event_path);
        setEvent_image1(data[1].event_image[2].x1);
        setEvent_match1(data[1].main_event_red+'     VS     '+data[1].main_event_blue);

        setEvent_name2(data[2].event_name);
        setEvent_time2(data[2].event_time);
        setEvent_Link2("event.html?event="+data[2].event_path);
        setEvent_image2(data[2].event_image[2].x1);
        setEvent_match2(data[2].main_event_red+'     VS     '+data[2].main_event_blue);

        setEvent_name3(data[3].event_name);
        setEvent_time3(data[3].event_time);
        setEvent_Link3("event.html?event="+data[3].event_path);
        setEvent_image3(data[3].event_image[2].x1);
        setEvent_match3(data[3].main_event_red+'     VS     '+data[3].main_event_blue);

        setEvent_name4(data[4].event_name);
        setEvent_time4(data[4].event_time);
        setEvent_Link4("event.html?event="+data[4].event_path);
        setEvent_image4(data[4].event_image[2].x1);
        setEvent_match4(data[4].main_event_red+'     VS     '+data[4].main_event_blue);

        setActive(true);
      } catch (error) {
        console.error('Error fetching header text:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <article className="post featured">
        <header className="major">
          <a id="Event_nameLink0" href={Event_Link0}><h2 id="Event_name0">{Event_name0}</h2></a>
          <span id="Event_time0" className="date">{Event_time0}</span>
        </header>
        <h3>{Event_match0}</h3>
        <a id="Event_imageLink0" href={Event_Link0} className="image main"><img id="Event_image0" src={isActive ? Event_image0 : null} alt="" loading="lazy"/></a>
        <ul className="actions special">
          <li><a id="Event_bottonLink0" href={Event_Link0} className="button large">View</a></li>
        </ul>
      </article>

      <section className="posts">
        <article>
          <header>
            <a id="Event_nameLink1" href={Event_Link1}><h2 id="Event_name1">{Event_name1}</h2></a>
            <span id="Event_time1" className="date">{Event_time1}</span>
          </header>
          <a id="Event_imageLink1" href={Event_Link1} className="image fit"><img id="Event_image1" src={isActive ? Event_image1 : null} alt="" loading="lazy"/></a>
          <h3>{Event_match1}</h3>
          <ul className="actions special">
            <li><a id="Event_bottonLink1" href={Event_Link1} className="button">View</a></li>
          </ul>
        </article>
        <article>
          <header>
            <a id="Event_nameLink2" href={Event_Link2}><h2 id="Event_name2">{Event_name2}</h2></a>
            <span id="Event_time2" className="date">{Event_time2}</span>
          </header>
          <a id="Event_imageLink2" href={Event_Link2} className="image fit"><img id="Event_image2" src={isActive ? Event_image2:null} alt="" loading="lazy"/></a>
          <h3>{Event_match2}</h3>
          <ul className="actions special">
            <li><a id="Event_bottonLink2" href={Event_Link2} className="button">View</a></li>
          </ul>
        </article>
        <article>
          <header>
            <a id="Event_nameLink3" href={Event_Link3}><h2 id="Event_name3">{Event_name3}</h2></a>
            <span id="Event_time3" className="date">{Event_time3}</span>
          </header>
          <a id="Event_imageLink3" href={Event_Link3} className="image fit"><img id="Event_image3" src={isActive ? Event_image3:null} alt="" loading="lazy"/></a>
          <h3>{Event_match3}</h3>
          <ul className="actions special">
            <li><a id="Event_bottonLink3" href={Event_Link3} className="button">View</a></li>
          </ul>
        </article>
        <article>
          <header>
            <a id="Event_nameLink4" href={Event_Link4}><h2 id="Event_name4">{Event_name4}</h2></a>
            <span id="Event_time4" className="date">{Event_time4}</span>
          </header>
          <a id="Event_imageLink4" href={Event_Link4} className="image fit"><img id="Event_image4" src={isActive ? Event_image4:null} alt="" loading="lazy"/></a>
          <h3>{Event_match4}</h3>
          <ul className="actions special">
            <li><a id="Event_bottonLink4" href={Event_Link4} className="button">View</a></li>
          </ul>
        </article>
      </section>

      <footer>
        <div className="pagination">
          <a href="#post featured" className="page active">1</a>
        </div>
      </footer>
    </>
  );

}

export default App;
