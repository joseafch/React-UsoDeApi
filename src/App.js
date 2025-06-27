
import './App.css';
import { Route, Routes, BrowserRouter as Router, useLocation } from "react-router-dom";
// import { ThemeContext } from "./contexts/ThemeContext";
// import { useState } from "react";
import CharactersPage from './pages/CharactersPage/CharactersPage';
import Home from './pages/HomePage/Home';
import DetailCharacter from './pages/CharactersPage/DetailCharacter';
import Header from './pages/Header/Header';
import EpisodeDetail from './pages/EpisodesDetail/EpisodioDetail';

function App() {
  const location =useLocation()
  console.log('este es location ', location);
  return (
    
    <div className= {location.pathname === '/'? "padre-div" : location.pathname === '/Characters' ? 'padre-character' : 'detail' }>
  
   <Header></Header>
    <Routes>
<Route path="/" element={<Home></Home>}/>
<Route path='/Characters' element={<CharactersPage></CharactersPage>}/>
<Route path='/Characters/:id' element={<DetailCharacter></DetailCharacter>}/>
<Route path='/Episode/:id' element={<EpisodeDetail></EpisodeDetail>}/>
    </Routes>
    
      {/* <CharactersPage></CharactersPage> */}
    </div>
   
  );
}

export default App;
