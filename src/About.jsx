import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function About() {

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
    <Typography variant="h4" sx={{marginTop:'2em', marginLeft:'1.4em', marginRight:'1.4em', fontWeight: 200}} > 
    About meeeee
    </Typography>
    
    </Box>


    </>
  )
}

export default About