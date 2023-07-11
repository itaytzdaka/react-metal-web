import './App.css';
import Clock from './components/clock/clock';
import { StyledMenuButton } from './components/menu/menu-button.styled';
import { StyledSubMenuButton } from './components/menu/sub-menu-button.styled';
import React, { useState, useEffect } from 'react';


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
    },
    {
      title: 'יציאה',
      subMenu: []
    },
  ];

  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
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
              <li key={index} className="submenu">
                <StyledMenuButton>{menuItem.title}</StyledMenuButton>
                {menuItem.subMenu.length > 0 && (
                  <ul className="submenu-content">
                    {menuItem.subMenu.map((subMenuItem, subIndex) => (
                      <li key={subIndex}><StyledSubMenuButton>{subMenuItem}</StyledSubMenuButton></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* <ul className="menu">
              <li key='submenu1' className= {activeItem === 1 ? 'submenu active' : 'submenu'}  onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}>
                <StyledMenuButton>כרטסות</StyledMenuButton>
                <ul className="submenu-content">
                  <li><StyledSubMenuButton>כרטסת פריטים/מלאי.</StyledSubMenuButton></li>
                  <li><StyledSubMenuButton>כרטסת קודי עבודה.</StyledSubMenuButton></li>
                  <li><StyledSubMenuButton>מחירונים.</StyledSubMenuButton></li>
                  <li><StyledSubMenuButton>כרטיסי הכנסות.</StyledSubMenuButton></li>
                  <li><StyledSubMenuButton onClick={"openModalWindow('../kartasot/kartasot.html','kartasot',600,600)"}>כרטסת לקוחות/ספקים.</StyledSubMenuButton></li>
                  <li><StyledSubMenuButton>כרטיסי קניות/הוצאות.</StyledSubMenuButton></li>
                  <li><StyledSubMenuButton>כרטיסי בנק.</StyledSubMenuButton></li>
                  <li><StyledSubMenuButton>כרטיסי קופה.</StyledSubMenuButton></li>
                  <li><StyledSubMenuButton>כרטיסי מערכת.</StyledSubMenuButton></li>
                </ul>
              </li>
              <li className="submenu">
                <StyledMenuButton>מסמכים</StyledMenuButton>
                <ul className="submenu-content">
                  <li><StyledSubMenuButton href="#">חשבונית מס.</StyledSubMenuButton></li>
                </ul>
              </li>
              <li><StyledMenuButton>קופה</StyledMenuButton></li>
              <li><StyledMenuButton>העתקים</StyledMenuButton></li>
              <li><StyledMenuButton>טופס מורכב</StyledMenuButton></li>
              <li><StyledMenuButton>דוחות</StyledMenuButton></li>
              <li><StyledMenuButton>הנהלת חשבונות</StyledMenuButton></li>
              <li><StyledMenuButton>טבלאות</StyledMenuButton></li>
              <li><StyledMenuButton>עיבוד תמלילים</StyledMenuButton></li>
              <li><StyledMenuButton>שאילתות</StyledMenuButton></li>
              <li><StyledMenuButton>תצוגה גרפית</StyledMenuButton></li>
              <li><StyledMenuButton>התאמות</StyledMenuButton></li>
              <li className="li-space"><StyledMenuButton>תחזוקת מערכת</StyledMenuButton></li>
              <li><StyledMenuButton id="closeStyledMenuButton">יציאה</StyledMenuButton></li>
            </ul> */}
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
              <li><button id="fullscreenStyledMenuButton">מסך מלא</button></li>
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
