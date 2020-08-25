import React from 'react';
import Navbar from "./Navbar";
import {Box,Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PortfolioItem from "./PortfolioItem";

const useStyle = makeStyles({
    boxContainer: {

        background: '#233'
    },
    cardContainer: {
        maxWidth: '375px',
        margin: '5rem auto'
    }

})

const Portfolio = ( props)=>{
const classes = useStyle()

    return(
        <Box component='div' className={classes.boxContainer}>
         <Navbar items ={props.items}/>
            <Grid container justify='center' >
                {props.portfolioData.map(item => <PortfolioItem key = {item.id} {...item}/> )}
            </Grid>
        </Box>
    )
}

export default Portfolio;












