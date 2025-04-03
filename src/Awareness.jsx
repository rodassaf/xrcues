import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Home from './Home.jsx';
import {useEffect} from 'react'

function Awareness({category, subcategory, image, visualCues, bibliography, setPage, description, mySearch}) {

 function SubCat() {
    return(
      <Typography variant="h4" sx={{ fontWeight: 300, marginTop: '0.5em'}} > 
      {subcategory}
      </Typography>
    );
 }
 let subCategory = <SubCat />;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top-left
  }, []);

  return (
    
    < div style={{margin: 'auto', display: 'flex', alignContent: 'center', justifyContent: 'center',  width: '100vw'}}>

    <Box
        sx={{
          overflowX: 'hidden',
          maxWidth: '1200px',
          width:  {
            xs: '90%',
            sm: '90%',
            md: '90%',
            lg: '100%'
          }, 
          height: 'fit-content',
          borderRadius: 14,
          backgroundColor: '#00000030',
          marginLeft: '0.8em',
          marginRight:'0.8em',
          padding: {
            xs: '2em',
            sm: '7.2em',
          },
          paddingTop: '5em',
          marginTop: '4em',
          marginBottom: '4em'
        }}
    >
    <div style={{display: 'flex', alignItems: 'center'}}>
      <ArrowBackIcon sx={{ fontSize: 40, marginRight: '0.3em', cursor: 'pointer', '&:hover': {color: '#999999'} }} onClick={() => setPage(<Home setPage={setPage} mySearch={mySearch} />)} /> 

      <Typography variant="h3" sx={{ fontWeight: 300}} > 
      {category}
      </Typography>
    </div>

    {(subcategory != "") && subCategory }
   
    
    <Typography variant="h6" sx={{ fontWeight: 300, marginTop: '2.5em', marginBottom: '4.5em'}} > 
      {description}
      </Typography>
    
      <Typography variant="h3" sx={{ fontWeight: 300, marginBottom: '1.5em'}} > 
      Visual Cues
      </Typography>

    <div style={{margin: 'auto', display: 'flex', alignContent: 'center', justifyContent: 'center' , borderRadius: 24}}>
      <img
        src={image}
        alt={category}
        loading="lazy"
        style={{marginTop: '0em', marginBottom: '0em', width: '100%'}}
      />
    </div>

    <Typography variant="h3" sx={{ fontWeight: 300, marginTop:'1.5em'}} > 
      References
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 300, marginTop: '2.5em', marginBottom: '1.5em'}} > 
      { bibliography.map((bib, index)=>(  <p key={index}>{bib}</p> )) } 
      </Typography>

    </Box>

    </div>
  )
}

export default Awareness