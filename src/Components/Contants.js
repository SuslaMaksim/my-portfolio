import React from 'react';
import Navbar from "./Navbar";
import {Box,Typography,Grid,Button,TextField} from "@material-ui/core";
import {makeStyles,withStyles} from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send'
import Typed from 'react-typed';

const InputField = withStyles({
    root:{
        '& label.Mui-focused':{
            color: 'tomato'
        },
        '& label': {
            color: 'tomato'
        },
        '& .MuiOutlinedInput-root':{
            '& fieldset':{
                borderColor: 'tan'
            },
            '&:hover fieldset':{
                borderColor: 'tan'
            },
            '&.Mui-focused fieldset':{
                borderColor: 'tan'
            }
        }
    }

})(TextField)



const useStyle  = makeStyles(theme=>({
    form: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        [theme.breakpoints.down('xs')]:{
            top: '50%',
            left: '50%',
            width: '75%'
        }
    },
    button: {
        marginTop: '1rem',
        color: 'tomato',
        borderColor: 'tomato'
    },
    warning: {
        color: 'tan',
        margin: '50px',
        textAlign: 'center',
        '& .text':{
            color:'white',
            cursor: 'pointer',
            textDecoration: 'underline'},
        [theme.breakpoints.down('xs')]:{
            margin: '10px 30px',
            fontSize: '1rem'
        }

     }

}))
const Contacts = (props)=>{
    const classes = useStyle();
    return(
        <Box component='div' style={{background: '#233',height: '100vh'}}>
         <Navbar items = {props.items}/>

             <Grid container justify='center'>
                 <Typography variant='h5' className={classes.warning}>
                     <Typed strings={['Sorry, Form doesn\'t work yet, you can send me a letter to <span class="text">susla.maksim@gmail.com</span> mail ! ']} typeSpeed={40}/>
                 </Typography>
                 <Box component='form' className={classes.form} >
                     <Typography variant='h5' style={{color: 'tomato',textTransform:'upperCase',textAlign: 'center'}}>
                         Hire of contact me ...
                     </Typography>
                     <InputField
                         fullWidth={true}
                         label = 'Name'
                         variant='outlined'
                         margin='dense'
                         size='medium'
                         inputProps = {{style: {color: 'white'}}}
                     />
                     <br/>
                     <InputField
                         fullWidth={true}
                         label = 'Email'
                         variant='outlined'
                         margin='dense'
                         size='medium'
                         inputProps = {{style: {color: 'white'}}}
                     />
                     <br/>
                     <InputField
                         fullWidth={true}
                         label = 'Company name'
                         variant='outlined'
                         margin='dense'
                         size='medium'
                         inputProps = {{style: {color: 'white'}}}
                     />
                     <br/>
                     <Button variant='outlined' fullWidth={true} endIcon={<SendIcon/>} className={classes.button}>Contact Me</Button>

                 </Box>

             </Grid>

        </Box>
    )
}

export default Contacts;