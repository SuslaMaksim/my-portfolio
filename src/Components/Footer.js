import React from "react";
import {makeStyles} from "@material-ui/core";
import {BottomNavigation,BottomNavigationAction} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";


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
                href='https://www.facebook.com/profile.php?id=100004980878034'
                target='_blank'

            />
            <BottomNavigationAction
                style={{padding: 0}}
                icon = {<LinkedIn/>}
                href='https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D1%81%D1%83%D1%81%D0%BB%D0%B0-260a5a197/'
                target='_blank'

            />
            <BottomNavigationAction
                style={{padding: 0}}
                icon = {<GitHub/>}
                href='https://github.com/SuslaMaksim'
                target='_blank'

            />

        </BottomNavigation>
    )
}
export default Footer;