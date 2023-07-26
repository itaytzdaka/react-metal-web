import React, { useState, useEffect } from 'react';

const DateAndTime = () => {

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
    <span id="dateAndTime"> {renderMessage()}</span>
  );
};

export default DateAndTime;