import React, { useState, useRef } from 'react';

const FullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const fullscreenRef = useRef(null);

  const handleFullScreen = () => {
    const element = document.documentElement;

    if (!isFullScreen) {
      console.log("enter2");
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      // Set the element to the ref so we can later exit full screen on the same element
      fullscreenRef.current = element;
    } else {
      console.log("exit2");
      const currentFullscreenElement = document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;

      if (currentFullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  return (
    <button onClick={handleFullScreen}>
      מסך מלא
    </button>
  );
};

export default FullScreenButton;