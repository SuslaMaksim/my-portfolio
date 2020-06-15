import React from "react";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

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
    timeLineItem:{
        borderBottom: '2px solid tan',
        margin: '1rem 3rem 1rem 1rem',
        padding: '1rem',
        position: 'relative',
        clear: 'both',
        '&:after':{
            content: "''",
            position: 'absolute'
        },
        '&:before':{
            content: "''",
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]:{
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)':{
                float:'right',
                margin: '1rem',
                borderColor: 'tan'
            },
            '&:nth-of-type(2n):before':{
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent tomato tomato'

            }
        }
    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        fontSize: '1.8rem',
        margin: '0 3rem 0 auto',
        background: 'tomato',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before':{
            display: 'none'
        },
        [theme.breakpoints.up('md')]:{
            margin: '0 auto',
            textAlign: 'center',
            '&:nth-of-type(2n)':{
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before':{
                display: 'none'
            }
        }
    },
    heading: {
        color: 'tomato',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subTitle: {
        padding: '0.5rem 0',
        color: 'white',
        textTransform: 'uppercase'
    }


}))

const ResumeItems = (props)=>{
    const classes = useStyle();



    return(
        <>
            <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant='h2'>{props.year}</Typography>
            <Box component='div' className={classes.timeLineItem}>

                <Typography className={classes.subTitle} variant='h5' >{props.language}</Typography>
                <Typography variant='body1'   style={{color: 'tomato'}}>{props.skills}</Typography>
                <Typography variant='subtitle1'  style={{color: 'tan'}}>
                    {props.bodyText}
                </Typography>
            </Box>
        </>
    )
}

export default ResumeItems;