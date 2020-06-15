import React from "react";
import {Avatar, Box, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import PhotoAvatar from "../images/susla.avatar.jpg";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom';


let useStyles = makeStyles(theme =>({

    slyderContainer: {
        width: '250px',
        backgroundColor: '#511',
        height: '100%'
    },
    avatar: {
        margin: '0.5rem auto',
        display: "block",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItemColor: {
        color: 'tan'
    }
}))
const SlyderNav = (props)=>{
    let classes = useStyles();
    return(
        <Box className={classes.slyderContainer} component='div' onClick={props.toggleSlider("right",false)}>
            <Avatar className={classes.avatar} src={PhotoAvatar} alt='Max Susla'/>
            <Divider/>
            <List>
                {props.items.map((item,key)=>{
                    return <ListItem  button key = {key} component={Link} to={item.listLink}>
                        <ListItemIcon className={classes.listItemColor} >{item.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItemColor} primary={item.listText}/>
                    </ListItem>
                })}
            </List>

        </Box>


    )
}

export default SlyderNav