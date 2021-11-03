import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Box } from '@mui/material';

export default function CharacterCreation() {

    const [character, setCharacter] = React.useState({
        name: '',
        age: '',
        race: '',
        hp: '',
        ac: '',
        RoomID: ''
    })

    const createCharacter = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/v1/characters',
            data: character
        }).then( () => {
            window.location.reload(false)
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
          <TextField id="outlined-basic" label="Name" variant="outlined" value={character.name} onChange={(event) => {
              setCharacter({...character, name: event.target.value})
          }}/>
          <TextField id="outlined-basic" label="Age" variant="outlined" value={character.age} onChange={(event) => {
              setCharacter({...character, age: event.target.value.toString()})
          }}/>
          <TextField id="outlined-basic" label="Race" variant="outlined" value={character.race} onChange={(event) => {
              setCharacter({...character, race: event.target.value})
          }}/>
          <TextField id="outlined-basic" label="HP" variant="outlined" value={character.hp} onChange={(event) => {
              setCharacter({...character, hp: event.target.value})
          }}/>
          <TextField id="outlined-basic" label="Armor Class" variant="outlined" value={character.ac} onChange={(event) => {
              setCharacter({...character, ac: event.target.value})
          }}/>
          </div>
          <Button variant="contained" onClick={createCharacter}>Create</Button>
        </Box>
    );
}