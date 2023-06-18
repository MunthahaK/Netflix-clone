import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import requests from './requests';
import Navbar from './Components/NavBar/Navbar';

function App() {
  return (
    <div className='app'>
      
      <Navbar/>
      <Banner/>
      <Rowpost title='TRENDING NOW' fetchUrl={requests.trending} isLargeRow/>
      <Rowpost title='Netflix Originals' fetchUrl={requests.originals}/>
      <Rowpost title='Action Movies' fetchUrl={requests.actionMovies}/>
      <Rowpost title='Comedy Movies' fetchUrl={requests.comedyMovies}/>
      <Rowpost title='Horror Movies' fetchUrl={requests.horrorMovies}/>
      <Rowpost title='Romance Movies' fetchUrl={requests.romanceMovies}/>
      <Rowpost title='Documentaries' fetchUrl={requests.documentaries}/>
       
    </div>
  )
}

export default App
