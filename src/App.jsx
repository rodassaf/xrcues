import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from './ResponsiveBar.jsx'
import Box from '@mui/material/Box';

function App() {
  const [page, setPage] = useState("")

  const handleButtonClick = (buttonName) => {
    //console.log("Button clicked in AppBar:", buttonName);
    setPage(buttonName);
  };

  return (
    <>
    <Box sx={{ width: "100vw" }}>
      <ResponsiveAppBar getButtonCliked={handleButtonClick} />
    </Box>
    <Box
        sx={{
          width: '100%',
          height: 'fit-content',
          borderRadius: 1,
          marginTop: '2em',
          marginLeft: '2em'
        }}
      >
    <Typography variant="h5"> How users perceive
      others during collaborative tasks? The possibility of knowing
      where the users are, where they are looking at, their intentions,
      and which task they are performing enhances communication
      and, consequently, collaboration. The crucial design challenges to
      support collaboration lie in providing sufficient awareness of other
      users.
    </Typography>
    </Box>
    </>
  )
}

export default App
