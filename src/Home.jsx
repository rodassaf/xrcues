import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ActionAreaCard from './card.jsx';
import {useState, useEffect} from 'react'

function Home({setPage}) {
    const [list, setList] = useState([])

    useEffect(() => {

        fetch("./src/assets/json/awareness.json")
            .then(response => response.json())
            .then(data => {
                setList(data.UserAwareness)
            })
            .catch(error => console.error("Error fetching JSON:", error));

    }, []);

    return (
        <> < Box sx = {{
          maxWidth: '1200px',
          height: 'fit-content',
          borderRadius: 1,
          margin: 'auto'
        }} > <Typography
            id="title"
            variant="h3"
            sx={{
                marginTop: '2em',
                marginLeft: '1em',
                marginRight: '1em',
                fontWeight: 300
            }}>
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

        }}>
        <div
            style={{
                marginLeft: '3em',
                marginRight: '3em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                marginBottom: '4em'
            }}>
            {list.map((awareness) => (<ActionAreaCard 
                setPage={setPage}
                key={awareness.id}
                id={awareness.id}
                thumbnail={awareness.thumbnail} 
                category={awareness.category} 
                subcategory={awareness.subcategory}
                miniDescription={awareness.miniDescription}
                image={awareness.image}
                visualCues={awareness.visualCues}
                bibliography={awareness.bibliography}
                description={awareness.description}
                />))}

        </div>
    </Box>

</>
    )
}

export default Home