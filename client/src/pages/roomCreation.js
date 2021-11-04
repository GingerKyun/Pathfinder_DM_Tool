import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Box } from '@mui/material';

export default function RoomCreation() {

    const [room, setRoom] = React.useState({
        roomName: '',
        hostName: ''
    })

    const createRoom = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/v1/room',
            data: room
        }).then( () => {
            window.location.href='http://localhost:3000/pages/rooms'
        })
    }

    return (
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        style={{padding: '5px'}}
      >
        <div>
          <TextField id="outlined-basic" label="Room Name" variant="outlined" value={room.roomName} onChange={(event) => {
              setRoom({...room, roomName: event.target.value})
          }}/>
          <TextField id="outlined-basic" label="Host Name" variant="outlined" value={room.hostName} onChange={(event) => {
              setRoom({...room, hostName: event.target.value})
          }}/>
          </div>
          <Button variant="contained" onClick={createRoom}>Create</Button>
        </Box>
    );
}