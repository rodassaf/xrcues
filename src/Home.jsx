import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ActionAreaCard from './Card.jsx';
import {useState, useEffect} from 'react'

function Home({setPage, mySearch}) {
    const [list, setList] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {

        fetch("/assets/json/awareness.json")
            .then(response => response.json())
            .then(data => {
                setList(data.UserAwareness)
                // Filter data based on the keyword (case-insensitive)
                setFilteredData( data.UserAwareness.filter( (item) =>
                item.category.toLowerCase().includes(mySearch.toLowerCase())
                ))
            })
            .catch(error => console.error("Error fetching JSON:", error));

    }, []);

    useEffect(()=>{ 
       // Filter data based on the keyword (case-insensitive)
       setFilteredData( list.filter( (item) =>
        item.category.toLowerCase().includes(mySearch.toLowerCase())
        ))
    }, [mySearch])

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
            {filteredData.map((awareness) => (<ActionAreaCard 
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
                mySearch={mySearch}
                />))}

        </div>
    </Box>

</>
    )
}

export default Home