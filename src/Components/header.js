import React from "react";
import {Box,Grid,Avatar,Typography} from "@material-ui/core";
import AvatarUser from '../images/susla.avatar.jpg';

import {makeStyles} from "@material-ui/core/styles";
import Typed from 'react-typed';

const useStyle = makeStyles(theme=> ({
    headerContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '90vw',
        textAlign: 'center',
        zIndex: '1'


    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: '1rem'
    },
    title: {
        color: 'tomato'
    },
    subTitle: {
        color: 'tan',
        marginBottom: '3rem'
    }
}))

const Header = (props)=>{
    let classes = useStyle();


    return(
        <Box  className={classes.headerContainer}>
            <Grid container justify='center'>
                <Avatar className={classes.avatar} src={AvatarUser} alt='Max'/>
            </Grid>

            <Typography variant='h4' className={classes.title}>
                <Typed strings={['Susla Maksim']} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography variant='h5' className={classes.subTitle}>
                <Typed strings={['Web Development', 'React Redux SPA','Material UA','ES6']}
                       typeSpeed={40}
                       backSpeed={30}
                       loop
                />
            </Typography>
        </Box>
    )
}

export default Header;