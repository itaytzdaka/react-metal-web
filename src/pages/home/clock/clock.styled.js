import styled from "styled-components";


export const StyledClock = styled.div`
    position: absolute;
    display: flex;
    height: 65%;
    justify-content: center;
    align-items: center;
    place-items: center;
    aspect-ratio: 1/1;
    overflow: hidden;
    top: 30px;
    left: 30px;
  
  
  &:after{
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--clock-numbers-color);
    z-index: 2;
  }
  
   .hour,
   .min,
   .sec{
    position: absolute;
  }
  
   .hour, .hr{
    width: 50%;
    height: 50%;
  }
  
   .min, .mn{
    width: 70%;
    height: 70%;
  }
  
  .sec, .sc{
    width: 95%;
    height: 95%;
  }
  
  .hr, .mn, .sc{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .hr:before{
    content: '';
    position: absolute;
    width: 8px;
    height: 50%;
    background: var(--clock-hand-hours);
    border-radius: 6px 6px;
  }
  
  .mn:before{
    content: '';
    position: absolute;
    width: 4px;
    height: 50%;
    background: var(--clock-hand-minutes);
    border-radius: 6px 6px 0 0;
  }
  
  .sc:before{
    content: '';
    position: absolute;
    width: 2px;
    height: 60%;
    background: var(--clock-hand-seconds);
    border-radius: 6px 6px 0 0;
  }
  
  .one, .two, .four, .five, .seven, .eight, .ten, .eleven{
    position: absolute;
    display: flex;
    justify-content: center;
    width: 95%;
    height: 95%;
  }
  
  .one:before, .two:before, .four:before, .five:before, .seven:before, .eight:before, .ten:before, .eleven:before{
    content: '';
    position: absolute;
    width: 2px;
    height: 6%;
    background: var(--clock-numbers-color);
  }
  
  .numbers{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  
  .number {
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    color: var(--clock-numbers-color);
  }
  
  
  .clock-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  font-size: 24px;
  }
  
  .number-12 {
  top: 3%;
  }
  
  .number-3 {
  right: 3%;
  }
  
  .number-6 {
  bottom: 3%;
  }
  
  .number-9 {
  left: 3%;
  }
  
  .one { transform: rotate(30deg)}
  .two { transform: rotate(60deg) }
  .four { transform: rotate(120deg)}
  .five { transform: rotate(150deg)}
  .seven { transform: rotate(210deg)}
  .eight { transform: rotate(240deg)}
  .ten { transform: rotate(300deg)}
  .eleven { transform: rotate(330deg)}
`
