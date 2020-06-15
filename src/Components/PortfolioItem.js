import React from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    cardContainer: {
        maxWidth: '375px',
        margin: '5rem auto'
    }

})
const PortfolioItem = (props)=>{
const classes =  useStyle();
    return(
        <>
            <Grid item  sm={10} xs={12}  md={6}  >
                <Card className={classes.cardContainer}>
                    <CardActionArea href={props.urlApplication} target='_blank'>
                        <CardMedia component='img'  image={props.picture} height='190' />
                        <CardContent>
                            <Typography variant='h5'>{props.projectName}</Typography>
                            <Typography variant='body2' component='p'>
                             {props.projectDescription}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions  >
                        <Button href={props.gitHubCode} target='_blank' size='small' color='primary' variant='outlined'>Show Code</Button>
                        <Button href={props.urlApplication} target='_blank' size='small' color='primary' variant='outlined'>Show Application</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default PortfolioItem;