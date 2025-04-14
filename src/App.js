import './App.css';
import InfoPage from './Components/Pages/InfoPage.tsx';
import LandingPage from './Components/Pages/LandingPage.tsx'
import LastPage from './Components/Pages/LastPage.tsx';
import LuzPage from './Components/Pages/LuzPage.tsx';
import NoticePage from './Components/Pages/NoticePage.tsx';
import SaulsPage from './Components/Pages/SaulsPage.tsx';
// import sound from './Assets/Audio/ThoseEyes.mp3';
// import { useEffect, useRef, useState} from 'react';

function App() {

  // const audioRef = useRef(null);

  // useEffect(() => {
  //   // Initialize audio
  //   audioRef.current = new Audio(sound);
  //   audioRef.current.loop = true; // Loops the audio
  //   audioRef.current.volume = 0.5; // Set volume (0.0 to 1.0)

  //   // Function to start audio on first click
  //   const handleFirstClick = () => {
  //     audioRef.current.play()
  //       .then(() => {
  //         console.log("Audio started successfully");
  //       })
  //       .catch((error) => {
  //         console.error("Error playing audio:", error);
  //       });
  //     // Remove the event listener after the first click
  //     window.removeEventListener('click', handleFirstClick);
  //   };

  //   // Add click listener to the window
  //   window.addEventListener('click', handleFirstClick);

  //   // Cleanup on unmount
  //   return () => {
  //     if (audioRef.current) {
  //       audioRef.current.pause();
  //       audioRef.current = null;
  //     }
  //     window.removeEventListener('click', handleFirstClick); // Cleanup listener
  //   };
  // }, []); // Empty dependency array: runs once on mount

  return (
    <div className="App">
      <LandingPage></LandingPage>
      <NoticePage></NoticePage>
      <SaulsPage></SaulsPage>
      <LuzPage></LuzPage>
      <InfoPage></InfoPage>
      <LastPage></LastPage>
    </div>
  );
}

export default App;
