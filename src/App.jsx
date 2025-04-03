import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './ResponsiveBar.jsx';
import Box from '@mui/material/Box';
import Home from './Home.jsx';
import About from './About.jsx';
import Method from './Method.jsx';
import {useEffect} from 'react'
import Button from '@mui/material/Button';

function App() {
  const [page, setPage] = useState(null);
  const [mySearch, setMySearch] = useState("");

  const handleButtonClick = (buttonName) => {
    //console.log("Button clicked in AppBar:", buttonName);
    if(buttonName == "About" || buttonName == "ABOUT")
      setPage(<About />);
    if(buttonName == "XR.AWARENESS" || buttonName == "XR.Awareness")
      setPage(<Home setPage={setPage} mySearch={mySearch}/>);
    if(buttonName == "METHOD" || buttonName == "Method")
      setPage(<Method />);
  };

    useEffect(() => {
      if(page != null && page.type.name == "Home" )
        setPage(<Home setPage={setPage} mySearch={mySearch}/>);
    }, [mySearch]);
  

  return (
    <>
    <Box sx={{ width: "100vw" }}>
      <ResponsiveAppBar getButtonCliked={handleButtonClick} setMySearch={setMySearch} />
    </Box>
    {(page == null) ? (<Home setPage={setPage} mySearch={mySearch} />) : page }

    <div style={ {display: 'flex', alignContent:'center', alignItems: 'center', justifyContent: 'center', marginBottom: '2em'}}>
    <Button variant="text" sx={{fontSize:11}} onClick={() => window.open('https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.15066', '_blank')}> This work is based on an article published in Computer Graphics Forum - 2024, as part of the Open Access State-of-the-Art Reports. Download it now. </Button>
    </div>
    </>
  )
}

export default App
