import './home.css';
import Clock from './clock/clock';
import React from 'react';
import FullScreenButton from './nav/full-screen-button';
import Menu from './menu/menu';
import DateAndTime from './date-and-time/date-and-time';

function Home() {
  

  


  return (
    <div className="Home">
      <aside>
        <Menu></Menu>
      </aside>
      <main>

        <header>
          <DateAndTime></DateAndTime>
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

export default Home;
