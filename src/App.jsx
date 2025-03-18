import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './ResponsiveBar.jsx';
import Box from '@mui/material/Box';
import Home from './Home.jsx';
import About from './About.jsx';
import Method from './Method.jsx';

function App() {
  const [page, setPage] = useState(null)

  const handleButtonClick = (buttonName) => {
    //console.log("Button clicked in AppBar:", buttonName);
    if(buttonName == "About" || buttonName == "ABOUT")
      setPage(<About />);
    if(buttonName == "XR.AWARENESS" || buttonName == "XR.Awareness")
      setPage(<Home setPage={setPage}/>);
    if(buttonName == "METHOD" || buttonName == "Method")
      setPage(<Method />);
  };


  return (
    <>
    <Box sx={{ width: "100vw" }}>
      <ResponsiveAppBar getButtonCliked={handleButtonClick} />
    </Box>
    {(page == null) ? (<Home setPage={setPage} />) : page }

    </>
  )
}

export default App
