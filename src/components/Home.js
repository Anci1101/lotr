import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import { MovieContext } from '../contexts/MovieContext'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Container, Grid, Paper } from '@material-ui/core';


const useStyles = makeStyles({
    btn:{
        fontSize:60
    },
    root: {
        minWidth:200
    },
    title: {
        fontSize: 14,
    },
    gridContainer:{
        marginTop: 10,
        marginBottom: 10,
    }
})

const Home = () => {
    const classes = useStyles();
    const {books} = useContext(BookContext)
    const {movies} = useContext(MovieContext)
    return (
        <Container>
            <div>
                
                <Typography 
                    variant='h4'
                    component='h2'
                    color='primary'
                    gutterBottom
                >
                    Books
                </Typography>
                <Grid container spacing={3} className={classes.gridContainer}>
                
                {books.map((item)=>(
                    <Grid item key={item._id} xs={12} md={6} lg={4}>
                        <Paper>
                            <Card elevation={5} className={classes.root}>
                                <CardHeader title={item.name}/>
                            </Card>
                            
                        </Paper>
                    </Grid>
                    
                ))}
                </Grid>
            </div>

            <div>
                <Typography 
                    variant='h4'
                    color='Primary'
                    >
                        Movies
                    </Typography>

                <Grid container spacing={3} className={classes.gridContainer}>
                    {movies.map((item)=>(
                        <Grid item key={item._id} xs={12} md={6} lg={4}>
                        <Paper>
                            <Card elevation={5} className={classes.root}>
                                <CardHeader title={item.name}/>
                            </Card>
                        </Paper>
                    </Grid>
                    ))}
                    
                
                </Grid>
            </div>

            
        </Container>
    )
}

export default Home
