import React from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';


//https://youtu.be/4TZ1k3_LhLs
//https://youtu.be/Ls8GBbNa2TY
function App() {
  const opts = {

  }
  return (
    <div className="App">
      <YouTube videoId="Ls8GBbNa2TY" />
    </div>
  );
}

export default App;
