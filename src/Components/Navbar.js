import React,{useState} from "react";
import {Box,AppBar,Toolbar,IconButton, Typography} from "@material-ui/core";
import {ArrowBack} from "@material-ui/icons";
import SlyderNav from "./SlyderNav";
import Footer from "./Footer";
import MobileRightMenuSlider from '@material-ui/core/Drawer';

const Navbar = (props)=>{

    const[state,setState] = useState({right:false});

    const toggleSlider = ((slider,open) => ()=> {
        setState({...state,[slider]:open})
    })


    const sideList = (props, slider )=> <SlyderNav items = {props.items} toggleSlider = {toggleSlider}/>

    return(
        <>

            <Box component='nav'>
                <AppBar position='static' style={{backgroundColor: '#222'}}>
                    <Toolbar style={{height:'7%'}}>
                        <IconButton onClick={toggleSlider('right',true)}>
                            <ArrowBack style={{color: 'tomato'}}/>
                        </IconButton>
                        <Typography variant='h5' style={{color: "tan" }}>
                            Portfolio
                        </Typography>
                        <MobileRightMenuSlider open={state.right} anchor='right' onClose={toggleSlider('right',false)}>
                            {sideList(props,'right')}
                            <Footer/>
                        </MobileRightMenuSlider>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;