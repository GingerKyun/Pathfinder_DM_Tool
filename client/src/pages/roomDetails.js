import * as React from 'react';
import axios from 'axios';
import { Grid, Card, CardActionArea, CardContent, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function RoomDetails() {

    const {id} = useParams()

    const [room, setRoom] = useState([])
    const [allCharacters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/room/' + id).then( (room) => {
            console.log(room)
            setRoom(room.data);
        })
        axios.get('http://localhost:5000/api/v1/characters').then( (allCharacters) => {
            console.log(allCharacters)
            setCharacters(allCharacters.data);
        })
    }, [id])
    
    return(
    <div>
        <h1>{room.roomName}</h1>
        <Grid container spacing ={2}>
          {allCharacters.map((allCharacters, key) => (
            <Grid item xs={12} md={6} key={key}>
            <Card sx={{ maxWidth: 650 }} style={{
              margin: 'auto',
              transition: '0.3s',
              boxshadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
          }}>
        <CardActionArea>
        <CardContent sx={{"& .MuiTextField-root": { m: 1, width: "25ch" }}}>
                <TextField label="Player Name" id="outlined-read-only-input" defaultValue={`${allCharacters.playerName}`} InputProps={{readOnly: true,}}/>
                <TextField label="Host Name" id="outlined-read-only-input" defaultValue={`${allCharacters.hostName}`} InputProps={{readOnly: true,}}/>
                <TextField label="Age" id="outlined-read-only-input" defaultValue={`${allCharacters.age}`} InputProps={{readOnly: true,}}/>
                <TextField label="Race" id="outlined-read-only-input" defaultValue={`${allCharacters.race}`} InputProps={{readOnly: true,}}/>
                <TextField label="Armor Class" id="outlined-read-only-input" defaultValue={`${allCharacters.ac}`} InputProps={{readOnly: true,}}/>
        </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
        ))}
        </Grid>
    </div>
    );
}