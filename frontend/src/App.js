import React from 'react';
import { useEffect, useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './pages/Login';



function App() {
  const [navValue, setNavValue] = useState('recents');
  const [tests, setTests] = useState([]);

  function login(form) {
    let email = form[0];
    let password = form[1];
    let myHeadersAuth = new Headers();
    myHeadersAuth.append("Content-Type", "application/json");
    //console.log('email', email);
    //console.log('password', password);

    let rawAuth = JSON.stringify({
      "email": email, //"vcummings@example.org",
      "password": password
    });
    //console.log('rawAuth', rawAuth);

    let requestOptionsAuth = {
      method: 'POST',
      headers: myHeadersAuth,
      body: rawAuth,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_BACKEND + "users/login", requestOptionsAuth)
        .then(response => response.json())
        .then(result => localStorage.setItem('access_token', result.token))
  }

  //console.log(localStorage.getItem('access_token'));
  if(localStorage.getItem('access_token') === null || localStorage.getItem('access_token') === 'undefined') {
    <Redirect to="/login" />
  }

  let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access_token'));

    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

  useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND + "tests", requestOptions)
        .then(response => response.json())
        .then(result => setTests(result.data))
    }, []);


  const handleChange = (event, newValue) => {
    setNavValue(newValue);
  };
  
  return (
    <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
            {tests.map(d => (<li key={d.id}>{d.id}: {d.name}</li>))} 

          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login onLogin={login}/>
          </Route>
        </Switch>
      </div>
    </Router>
    <hr />
      <BottomNavigation value={navValue} onChange={handleChange}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>

    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
