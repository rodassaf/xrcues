import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Awareness({category, subcategory, image, visualCues, bibliography}) {
  console.log(subcategory)

 function SubCat() {
    return(
      <Typography variant="h4" sx={{ fontWeight: 300}} > 
      {subcategory}
      </Typography>
    );
 }
 let subCategory = <SubCat />;

  return (
    < div style={{margin: 'auto', display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
    <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          height: 'fit-content',
          borderRadius: 4,
          backgroundColor: '#00000060',
          marginLeft:'0.8em',
          marginRight:'0.8em',
          padding: '2.8em', 
          marginTop: '2em',
        
          
        }}
      >
      <Typography variant="h3" sx={{ fontWeight: 300}} > 
      Awareness: {category}
      </Typography>

      {(subcategory != "") && subCategory }
      
      <div style={{margin: 'auto', display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
        <img
              src={image}
              alt={category}
              loading="lazy"
              style={{marginTop: '5em', maxWidth: '700px', width: '100%'}}
            />
      </div>

    </Box>


    </div>
  )
}

export default Awareness