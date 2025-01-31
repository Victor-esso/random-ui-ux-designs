import { useState, useEffect } from "react";

const FullscreenButton = ({isFullscreen  , setIsFullscreen , children , onFullScreen }) => {
  

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
        onFullScreen()
      }).catch(err => {
        console.error("Error enabling full-screen mode:", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.error("Error disabling full-screen mode:", err);
      });
    }
  };

  // Listen for fullscreen changes and update state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <button onClick={toggleFullscreen} className="hover:scale-[1.2] active:scale-[1] transition-all">
      {children}
    </button>
  );
};

export default FullscreenButton;
