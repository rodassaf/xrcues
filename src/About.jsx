import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function About() {

  return (
    < div style={{margin: 'auto', display: 'flex', alignContent: 'center', justifyContent: 'center', width: '100vw'}}>

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


   
    <Typography variant="h3" sx={{ fontWeight: 300}} > 
      About
      </Typography>

    <Typography variant="h6" sx={{ fontWeight: 300, marginTop: '2.5em', marginBottom: '2.5em'}} > 
    This work is based on an article published in Computer Graphics Forum (2024), as part of the Open Access State-of-the-Art Reports. You can download, read, check all the bibliography from the full paper using the link below. <br /> <br />  <Button variant="outlined" onClick={() => window.open('https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.15066', '_blank')}> Cues to fast-forward collaboration: A Survey of Workspace Awareness and Visual Cues in XR Collaborative Systems </Button>
    <br /> <br />
    My name is Rodrigo Assaf - rodassaf@gmail.com <Button variant="text" onClick={() => window.open('https://orcid.org/0000-0002-6999-1848', '_blank')}>Orcid</Button> <Button variant="text" onClick={() => window.open('https://www.linkedin.com/in/rodassaf/', '_blank')}>Linkedin</Button> and this is part of my PhD. research which is still under development. I am developing at the moment a collaborative prototype using webgl, webxr, and sockets to allow users design review 3D models with animation and blendshapes in an asymmetric setup. My supervisors are PhD. Prof. Rui Rodrigues <Button variant="text" onClick={() => window.open('https://orcid.org/0000-0003-4883-1375', '_blank')}>Orcid</Button> and PhD. Prof. Daniel Mendes <Button variant="text" onClick={() => window.open('https://orcid.org/0000-0002-1129-7941', '_blank')}>Orcid</Button> from <Button variant="text" onClick={() => window.open('https://sigarra.up.pt/feup/en/WEB_PAGE.INICIAL', '_blank')}>University of Porto - FEUP, Portugal </Button>. 
    <br /> <br />
    This research primarily aims to explore recent research findings concerning how users perceive one another in XR collaborative systems, focusing on categorizing these perceptions based on collaborative situations that influence user behavior and their overall immersive experience. This classification serves as a foundation for studying and designing XR systems and technologies related to awareness in various domains. We hope that researchers can use this work as a guide to help design their own collaborative XR applications or even contribute to expanding the proposed classification. We also expect to help newcomers in the field grasp the key concepts and approaches to handling awareness in XR and its related visual cues.
    <br /> <br />
    We also understand that workspace awareness augmented with visual cues is essential for promoting effective collaboration, reducing the challenges of distributed work, and enhancing the design of collaborative tools. As XR work environments continue to evolve, the concept of workspace awareness remains a cornerstone for creating more efficient and satisfying collaborative experiences in the digital age.

      </Typography>
    


    </Box>

    </div>
  )
}

export default About