import { useState, useEffect } from 'react'
import './App.css'
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from './ResponsiveBar.jsx';
import Box from '@mui/material/Box';
import ActionAreaCard from './card.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Method from './Method.jsx';

function App() {
  const [page, setPage] = useState(<Home />)

  const handleButtonClick = (buttonName) => {
    //console.log("Button clicked in AppBar:", buttonName);
    if(buttonName == "About" || buttonName == "ABOUT")
      setPage(<About />);
    if(buttonName == "XR AWARENESS & VISUAL CUES" || buttonName == "XR Awareness & Visual Cues")
      setPage(<Home />);
    if(buttonName == "METHOD" || buttonName == "Method")
      setPage(<Method />);
  };

  useEffect(() => {
    console.log("MEh");
    }, []);



  return (
    <>
    <Box sx={{ width: "100vw" }}>
      <ResponsiveAppBar getButtonCliked={handleButtonClick} />
    </Box>
    {page}

    </>
  )
}

export default App
