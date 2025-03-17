import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ActionAreaCard from './card.jsx';


function Home() {

  return (
    <>
    <Box
        sx={{
          maxWidth: '1200px',
          height: 'fit-content',
          borderRadius: 1,
          margin: 'auto'
        }}
      >
    <Typography id="title"variant="h3" sx={{marginTop:'2em', marginLeft:'1em', marginRight:'1em', fontWeight: 300 }} > 
    The following classification outlines key user awareness categories and their 
    corresponding visual cues. 
    </Typography>

    
    
    </Box>

    <Box
        sx={{
          maxWidth: '1200px',
          height: 'fit-content',
          borderRadius: 1,
          margin: 'auto',
          marginTop: '6em'
          
        }}
      >
        <div style={{marginLeft: '3em', marginRight: '3em', display:'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '4em'}}>
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        </div>
      </Box>

    </>
  )
}

export default Home