import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Awareness from './Awareness';


export default function ActionAreaCard({thumbnail, category, subcategory, id, setPage}) {
    const handleCardClick = (id) => {
        setPage(<Awareness category={category} />)
    };

    return (
        <Card onClick={() => handleCardClick(category)} 
            sx={{
                maxWidth: 345,
                height: 390
            }}>
            <CardActionArea>
                <CardMedia component="img" height="260" image={thumbnail} alt="eye gaze"/>
                <CardContent >
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
                        Eye-gaze awareness enables individuals to use natural nonverbal cues to perceive
                        where others are looking in real time.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}