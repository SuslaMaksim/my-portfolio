import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './Components/index'
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contacts from "./Components/Contants";
import {items,resumeData,portfolioData} from './data'
import {Route,Switch} from 'react-router-dom'
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


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
    },
    error:{
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'white',
        [theme.breakpoints.down('sm')]:{
            fontSize: '40px'
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '25px'
        }
    }

}))


function App() {
    let classes = useStyle()
  return (
      <Box component='div' className={classes.BoxContainer} >
          <CssBaseline/>
          <Switch>
            <Route exact path='/' component = {()=> <Home items = {items}  />}/>
            <Route  path='/resume' component = {()=> <Resume items = {items} resumeData={resumeData}/> }/>
            <Route  path='/portfolio' component = {()=> <Portfolio items = {items} portfolioData={portfolioData}/> }/>
            <Route  path='/contacts' component = {()=> <Contacts items = {items}/> }/>
            <Route component={()=> <Typography variant='h3' className={classes.error}>404 Page not found</Typography>} />
          </Switch>
      </Box>
  );
}

export default App;
