import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './Components/index'
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contacts from "./Components/Contants";
import {items,resumeData,portfolioData} from './data'
import {Route} from 'react-router-dom'


function App() {
  return (
      <>
        <CssBaseline/>
        <Route exact path='/' component = {()=> <Home items = {items}  />}/>
        <Route  path='/resume' component = {()=> <Resume items = {items} resumeData={resumeData}/> }/>
        <Route  path='/portfolio' component = {()=> <Portfolio items = {items} portfolioData={portfolioData}/> }/>
        <Route  path='/contacts' component = {()=> <Contacts items = {items}/> }/>

      </>
  );
}

export default App;
