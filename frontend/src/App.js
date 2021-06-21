import React from 'react';
import { useEffect } from 'react';
import Main from './pages/Main';

function App() {

  

  let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access_token'));

    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    }; 
  
    useEffect(() => {
      if(localStorage.getItem('access_token') !== null && localStorage.getItem('access_token') !== 'undefined') {
        fetch(process.env.REACT_APP_BACKEND + "tests", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('result', result.data);
            //setTests(result.data);
        })
      .catch(error => console.log('error', error))
      }
    }, []);
  
  return (
    <div className="App">
      <Main></Main>
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
      <p>Dieser Text ist nur nach Anmeldung sichtbar</p>
    </div>
  );
}

export default App;
