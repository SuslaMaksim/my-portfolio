import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './Components/index'
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contacts from "./Components/Contants";
import {items,resumeData,portfolioData} from './data'
import {Route} from 'react-router-dom'
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles(theme=>({

    BoxContainer:{
        position: 'relative',
        height:'94vh',
        [theme.breakpoints.down('md')]:{
            height:'95vh'
        },
        [theme.breakpoints.down('sm')]:{
            height:'94vh'
        },
        [theme.breakpoints.down('xs')]:{
            height:'93vh'
        },
    }

}))


function App() {
    let classes = useStyle()
  return (
      <Box component='div' className={classes.BoxContainer} >
        <CssBaseline/>
        <Route exact path='/' component = {()=> <Home items = {items}  />}/>
        <Route  path='/resume' component = {()=> <Resume items = {items} resumeData={resumeData}/> }/>
        <Route  path='/portfolio' component = {()=> <Portfolio items = {items} portfolioData={portfolioData}/> }/>
        <Route  path='/contacts' component = {()=> <Contacts items = {items}/> }/>

      </Box>
  );
}

export default App;
