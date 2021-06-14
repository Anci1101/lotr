import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../contexts/useFetch'
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
    // const {data: quotes, loading, error} = useFetch(`https://the-one-api.dev/v2/character/` + id + `/quote`)
    // console.log(quotes, 'quotes');

    // const getCharacterQuotes = () => {
    //     console.log('ana');
    // }
    
    return (
        <Card elevation={5} className={classes.root}>
            <CardHeader title={name}/>
            <CardContent>
            <Typography>{gender}</Typography>
            </CardContent>
            {/* <button onClick={()=>getCharacterQuotes(id)}>character quote</button> */}
            <Link to={`character/${id}`}>
                <CardActions>
                <Button className={classes.textDecoration}variant='contained'>Character quote</Button>
                </CardActions>
            </Link>
            
        </Card>
    )
}

export default SingleCharacter
