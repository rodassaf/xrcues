import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Awareness from './Awareness';


export default function ActionAreaCard({thumbnail, category, subcategory, id, setPage, miniDescription, image, visualCues, bibliography}) {
    const handleCardClick = (category, subcategory, image, visualCues, bibliography) => {
        setPage(<Awareness category={category} subcategory={subcategory} image={image} visualCues={visualCues} bibliography={bibliography}/>)
    };

    return (
        <Card onClick={() => handleCardClick(category, subcategory, image, visualCues, bibliography )} 
            sx={{
                maxWidth: 345,
                height: 400,
                width: "100%"
            }}>
            <CardActionArea sx={ {height: 400} }>
                <CardMedia component="img" height="260" image={thumbnail} alt="eye gaze"/>
                <CardContent sx={ {height: 140} } >
                    <Typography gutterBottom="gutterBottom" variant="h5" component="div">
                        {category}
                    </Typography>
                    <Typography gutterBottom="gutterBottom" variant="h7" component="div">
                        {subcategory}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary'
                        }}>
                        {miniDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}