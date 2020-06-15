import React from "react";
import {makeStyles} from "@material-ui/core";
import {BottomNavigation,BottomNavigationAction} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";


const useStyle = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root':{
            minWidth: 0,
            maxWidth: 250
        },
        '& .MuiSvgIcon-root':{
            fill: 'tan',
            '&:hover':{
                fill: 'tomato',
                fontSize: '1.8rem'
            }
        }
    }

})

const Footer = (props)=>{
    const classes = useStyle();

    return(
        <BottomNavigation width='auto' style={{background: '#222'}} className={classes.root}>
            <BottomNavigationAction
                style={{padding: 0}}
                icon = {<Facebook/>}

            />
            <BottomNavigationAction
                style={{padding: 0}}
                icon = {<LinkedIn/>}
                href='https://pc.com.ua/search?q=9480'

            />
            <BottomNavigationAction
                style={{padding: 0}}
                icon = {<Instagram/>}

            />

        </BottomNavigation>
    )
}
export default Footer;