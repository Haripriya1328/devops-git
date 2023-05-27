import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigate>
          <Route exact path="/">
            <ShowList shows={shows} />
          </Route>
          <Route path="/details/:id" component={ShowDetails} />
          <Route path="/booking/:id" component={BookingForm} />
        </Navigate>
      </div>
    </Router>
  );
}
export default App;