import React from 'react';
import logo from './logo.svg';
import './App.css';
import Async from 'react-async';

const getTime = () =>
  fetch("http://localhost:3000/")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Async promiseFn={getTime}>
            {({ data, err, isLoading }) => {
              if (isLoading) return "Loading..."
              if (err) return `Something went wrong: ${err.message}`
              if (data)
                return (
                  <div>
                    <h2>The time from the database is: {data.time}</h2>
                  </div>
                )
            }}
          </Async>
        </p>
      </header>
    </div>
  );
}

export default App;
