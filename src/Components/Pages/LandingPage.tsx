import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css"; 
import sound from '../../Assets/Audio/ThoseEyes.mp3';


const LandingPage = () => {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(sound);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Toggle play/stop
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    }
  };

  
  return (
    <div className="book-page">
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="cursive-landing">Luz & Saul</h1>
          {/* <h5 className="wedding-details">Save the date!</h5> */}
          <h6 className="audio-toggle" onClick={toggleAudio}>
            {isPlaying ? "Stop music" : "Play music"}
          </h6>
        </div>
      </div>
    </div>
    
  );
};

export default LandingPage;