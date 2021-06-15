import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    textDecoration: 'none'
  });

const SingleCharacter = ({name, gender, id}) => {
    const classes = useStyles();
    
    return (
        <Card elevation={5} className={classes.root}>
            <CardHeader title={name}/>
            <CardContent>
                <Typography>{gender}</Typography>
            </CardContent>
            
            <Link to={`character/${id}/quote`}>
                <CardActions>
                    <Button className={classes.textDecoration}variant='contained'>Character quote</Button>
                </CardActions>
            </Link>
            
        </Card>
    )
}

export default SingleCharacter
