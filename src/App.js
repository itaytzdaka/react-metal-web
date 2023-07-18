import './App.css';
import Clock from './components/clock/clock';
import { StyledMenuButton } from './components/menu/menu-button.styled';
import { StyledSubMenuButton } from './components/menu/sub-menu-button.styled';
import React, { useState, useEffect } from 'react';
import FullScreenButton from './components/nav/full-screen-button';
import CloseWindowButton from './components/menu/close-window-button';

function App() {
  const menu = [
    {
      title: 'כרטסות',
      subMenu: [
        'כרטסת פריטים/מלאי.',
        'כרטסת קודי עבודה.',
        'מחירונים.',
        'כרטיסי הכנסות.',
        'כרטסת לקוחות/ספקים.',
        'כרטיסי קניות/הוצאות.',
        'כרטיסי בנק.',
        'כרטיסי קופה.',
        'כרטיסי מערכת.'
      ]
    },
    {
      title: 'מסמכים',
      subMenu: [
        'חשבונית מס.'
      ]
    },
    {
      title: 'קופה',
      subMenu: []
    },
    {
      title: 'העתקים',
      subMenu: []
    },
    {
      title: 'טופס מורכב',
      subMenu: []
    },
    {
      title: 'דוחות',
      subMenu: []
    },
    {
      title: 'הנהלת חשבונות',
      subMenu: []
    },
    {
      title: 'טבלאות',
      subMenu: []
    },
    {
      title: 'עיבוד תמלילים',
      subMenu: []
    },
    {
      title: 'שאילתות',
      subMenu: []
    },
    {
      title: 'תצוגה גרפית',
      subMenu: []
    },
    {
      title: 'התאמות',
      subMenu: []
    },
    {
      title: 'תחזוקת מערכת',
      subMenu: []
    }
  ];

  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

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

        <nav>
          <ul className='menu'>
            {menu.map((menuItem, index) => (

              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <StyledMenuButton className={hoveredItem === index ? 'active' : ''}>{menuItem.title}</StyledMenuButton>

                {menuItem.subMenu.length > 0 && (
                  <ul className="submenu">
                    {menuItem.subMenu.map((subMenuItem, subIndex) => (
                      <li key={subIndex}><StyledSubMenuButton>{subMenuItem}</StyledSubMenuButton></li>
                    ))}
                  </ul>
                )}

              </li>

            ))}
            <li><CloseWindowButton></CloseWindowButton></li>
          </ul>
        </nav>

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
