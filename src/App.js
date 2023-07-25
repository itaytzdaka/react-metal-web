import './App.css';
import Clock from './components/clock/clock';
import { StyledMenuButton } from './components/menu/menu-button.styled';
import { StyledSubMenuButton } from './components/menu/sub-menu-button.styled';
import React, { useState, useEffect } from 'react';
import FullScreenButton from './components/nav/full-screen-button';
import CloseWindowButton from './components/menu/close-window-button';
import Menu from './components/menu/menu';

function App() {
  

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderMessage = () => {
    const daysArray = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
    const monthsArray = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];

    let day, month, fullTime, year;


    day = daysArray[currentTime.getDay()];
    month = monthsArray[currentTime.getMonth()];
    year = currentTime.getFullYear();
    fullTime = currentTime.toLocaleTimeString();

    return `תאריך יום ${day}, ${currentTime.getDate() + 1} ל${month} , ${year} \u00A0 ${fullTime}`;
  };


  return (
    <div className="App">
      <aside>
        <Menu></Menu>
      </aside>
      <main>

        <header>
          <span id="dateAndTime"> {renderMessage()}</span>
        </header>

        <section>
          <div className="right"></div>
          <div className="left">
            <Clock></Clock>
          </div>
        </section>

        <footer>
          <nav>
            <ul className="options-menu">
              <li><FullScreenButton></FullScreenButton></li>
              <li>גיבוי</li>
              <li>צבע</li>
              <li>מערכת</li>
              <li>טכני</li>
              <li>גופן</li>
              <li>יומן</li>
              <li>עזרה</li>
            </ul>
          </nav>
        </footer>

      </main>
    </div>
  );
}

export default App;
