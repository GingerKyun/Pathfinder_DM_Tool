import * as React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from 'react';
import { TableRow, TableCell, Table, TableHead, TableBody, Grid } from '@mui/material';
import { CardActionArea } from '@mui/material';

export default function RoomList() {

    const [roomList, setRoomList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/room').then( (allRooms) => {
          setRoomList(allRooms.data);
        })
    }, [])

    const gotoRoom = (id) => {
      window.location.href=`http://localhost:3000/pages/rooms/${id}`
    }

    return(
      <div style={{padding: '10px'}}>
        <Grid container spacing ={2}>
          {roomList.map((room, key) => (
            <Grid item xs={12} md={4} key={key}>
            <Card sx={{ maxWidth: 300 }} onClick={() => gotoRoom(room._id)} style={{
              margin: 'auto',
              transition: '0.3s',
              boxshadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
          }}>
        <CardActionArea>
        <CardContent>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Room Name</TableCell>
                <TableCell align="right">Host Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{room.roomName}</TableCell>
              <TableCell align="right">{room.hostName}</TableCell>
            </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
        ))}
        </Grid>
        </div>
    );
}