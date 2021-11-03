import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from '../assets/Pathfinder-logo.jpg';

const HomePage = () => {
    return (
        <div style={{padding: '5px'}}>
            <Card sx={{ maxWidth: 450 }} style={{
                margin: 'auto',
                transition: '0.3s',
                boxshadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
            }}>
            <CardActionArea style={{padding: "10px"}}>
            <CardMedia
            component="img"
            height="140"
            image={logo}
            alt="Pathfinder Logo"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
            Welcome!
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{textAlign: 'center'}}>
            Welcome to my Pathfinder DM Tool. This tool was designed to help the DM keep track of, and manage your player characters throughout the campaign.
            </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
        </div>
    );
}

export default HomePage