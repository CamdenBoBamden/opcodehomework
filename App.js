import React from 'react';
import logo from './walk.jpeg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Switch } from 'react-router';
import Contact from './Contact'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function App() {
  const classes = useStyles();
  return (
<Router>


    <Switch>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This isn't me. I swapped the logo for a picture because I wasn't trying to mess with sizing the image. 
        </p>
        <p>
          <Link to="/contact"><Button variant="contained" color="primary" className={classes.button}>
        Contact
      </Button></Link>
          <Route path="/contact" component={Contact} />
        </p>
        <div>
          <Link to="/">Back</Link>
        </div>
      </header>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
