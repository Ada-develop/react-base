import logo from './logo.svg';
import './App.css';
import LabasZuiki from './Components/LabasZuiki';
import TekstProps from './Components/TekstProps';
import ZebraiBebrai from './Components/ZebraiBebrai';

import { useState } from 'react';
import DuPropsai from './Components/DuPropsai';
import TrysPropsai from './Components/TrysPropsai';

function App() {

  // 3.Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.

  const randomIntFromInterval = (min, max) =>  {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(0, 1);

  return (
    <div className="App">
      <header className="App-header">
        <LabasZuiki/>
        <TekstProps text="Sitas tekstas ateina is props'o"/>
        <ZebraiBebrai color={rndInt}/>
        <DuPropsai pirmaAntraste={"Ketvirta uzduotis H1 antraste"}  antraAntraste={"Ketvirta uzduotis H2 antraste"}/>
        <TrysPropsai pirmasTekstas={"Ateina is propsu H1 Tekstas"} antrasTekstas={"Ateina is propsu H2 Tekstas"} spalva={"purple"}/>
      </header>
    </div>
  );
}

export default App;
