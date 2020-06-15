import React from "react";
import {Typography,Box }from "@material-ui/core";
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/core/styles";
import ResumeItems from "./ResumeItem";

const useStyle = makeStyles(theme =>({
    resumeContainer: {
        backgroundColor: '#233'
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: "''",
            position: "absolute",
            height: '100%',
            border: '1px solid tan',
            top: 0,
            right: '40px'
        },
        '&:after': {
            content: "''",
            display: 'table',
            clear: 'both'
        },
        [theme.breakpoints.up('md')]:{
            padding: '2rem',
            '&:before':{
                right: 'auto',
                left: 'calc(50% - 1px)'
            }
        }
    },
    heading: {
        color: 'tomato',
        padding: '3rem 0',
        textTransform: 'uppercase'
    }



}))

const Resume = (props)=>{
    const classes = useStyle();
    return(
        <>
            <Navbar items = {props.items}/>
            <Box component='header' className={classes.resumeContainer}>
                <Typography className={classes.heading} variant='h4' align='center'> My Skills</Typography>
                <Box component='div' className={classes.timeLine}>
                    {props.resumeData.map(item => <ResumeItems key = {item.id} {...item}

                    /> )}
                </Box>


            </Box>

        </>
    )
}

export default Resume;