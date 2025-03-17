import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Opacity } from '@mui/icons-material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, height: 390 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="./src/assets/thumbnail/eyegaze.jpg"
          alt="eye gaze"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            Eye Gaze
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
           Subtitle
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Eye-gaze awareness enables individuals to use natural nonverbal cues to perceive where others are looking in real time.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}