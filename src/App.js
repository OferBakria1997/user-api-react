import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
import { Gallery } from './Gallery'
import { Navbar } from './Navbar/Navbar'
import { Home } from './Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [stringToSearch, setstringToSearch] = useState("");//to change the search via user input
  const [users, setUsers] = useState([]);//init my user array with empty array
  const url = 'https://randomuser.me/api/?results=20';

  useEffect(() => {
    axios.get(url).then(response => {
        setUsers(response.data.results)
    })
}, []);

  return (
    <>
      <div>
        <Router>
          <Navbar whatIs={(event)=>setstringToSearch(event.target.value)}/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/gallery' component={() => <Gallery search={stringToSearch} userArr={users} />}/>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
