import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Method() {

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
      Method
      </Typography>

    <Typography variant="h6" sx={{ fontWeight: 300, marginTop: '2.5em', marginBottom: '4.5em'}} > 
    To understand how people work together in virtual and augmented reality (known as XR), we studied research from the past 10 years. We started by searching a major academic database using keywords related to collaboration and awareness in XR environments. This gave us 47 studies to consider. <br /> <br />

After reviewing them carefully, we filtered out those that didn’t focus directly on how people stay aware of each other in shared virtual spaces — for example, studies mostly about sound, touch, or games. This left us with 11 key papers that explored visual cues and user awareness in XR collaboration. <br /><br />

We then created a framework to analyze these studies, looking at things like group sizes, types of visual cues used, the size of the virtual environment, and what kind of tasks people were doing together. All the authors participated in this analysis to make sure it was done consistently and fairly.<br /><br />

To find even more relevant work, we also reviewed papers from top XR conferences using a technique called "snowballing," where we followed leads from existing research. This added another 32 valuable papers to our study.<br /><br />

Finally, we grouped together common ideas about how users stay aware of each other in XR, along with the types of visual cues used. This helped us build a clear classification system that reflects the different ways people interact and collaborate in virtual spaces.
      </Typography>
    


    </Box>

    </div>
  )
}

export default Method