import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBarMenu from './components/menu.js';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage.js';
import CharacterCreation from './pages/charactercreation.js';
import useStlyes from './styles.js';
import './App.css';

function App() {

  const classes = useStlyes();

  return (
  <Router>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <NavBarMenu />
        <Link to="/" className={classes.goHome}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Pathfinder DM Tool
        </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  </Box>

  <Box>
    <Switch>
      <Route exact path ='/'>
        <HomePage />
      </Route>
      <Route path='/pages/charactercreation'>
        <CharacterCreation />
      </Route>
    </Switch>
  </Box>
</Router>
  );
}

export default App;
