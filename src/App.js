
import React from 'react';
import './App.css'
import NavBar from './components/navbar/navBar';
import Banner from './components/banner/Banner'
import RowPost from './components/RowPost/RowPost';
import {orginals,actions,HorrorMovies,RomanceMovies} from './url'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={actions}  title='Action Movies' isSmall={true}/>
      <RowPost url={HorrorMovies}  title='Horror Movies' />
      <RowPost url={RomanceMovies}  title='RomanceMovies' isSmall={true}/>
      
    </div>
  );
}

export default App;
