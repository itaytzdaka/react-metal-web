import './home.css';
import Clock from './clock/clock';
import React from 'react';
import Menu from './menu/menu';
import DateAndTime from './date-and-time/date-and-time';
import Nav from './nav/nav';

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
          <Nav></Nav>
        </footer>

      </main>
    </div>
  );
}

export default Home;
