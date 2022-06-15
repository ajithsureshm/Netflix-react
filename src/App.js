import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import { Originals,Actions,Romance,Comedy } from "./url";


import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={Originals} title="Netflix Trending"/>
      <Rowpost url={Actions} title="Action movies" isSmall/>
      <Rowpost url={Romance} title="Romance movies" isSmall/>
      <Rowpost url={Comedy} title="Comedy movies" isSmall/>



    </div>
  );
}

export default App;
