import React from 'react';
import Navbar from "./Navbar";
import Header from './header'
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/styles";

const useStyle  = makeStyles({

    particlesCanva: {
        position: 'absolute',

    }
})


const Home = (props)=>{
    const classes = useStyle();
    return(
        <>
            <Navbar items = {props.items}/>
            <Header/>
            <Particles
                canvasClassName={classes.particlesCanva}
                height='100%'
                params={{
                    particles:{
                        number:{
                            value: 60
                        }
                    }
                }}

            />
        </>
    )
}

export default Home;
