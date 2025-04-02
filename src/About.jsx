import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function About() {

  return (
    < div style={{margin: 'auto', display: 'flex', alignContent: 'center', justifyContent: 'center'}}>

    <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          height: 'fit-content',
          borderRadius: 14,
          backgroundColor: '#00000030',
          marginLeft:'0.8em',
          marginRight:'0.8em',
          padding: '7.2em', 
          paddingTop: '5em',
          marginTop: '4em',
          marginBottom: '4em'
        }}
    >


   
    <Typography variant="h3" sx={{ fontWeight: 300}} > 
      About
      </Typography>

    <Typography variant="h6" sx={{ fontWeight: 300, marginTop: '2.5em', marginBottom: '4.5em'}} > 
        sdsds

      </Typography>
    


    </Box>

    </div>
  )
}

export default About