import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookList from './BookList';


const Books = () => {
    const {books, loading, error} = useContext(BookContext)

    return (
        <Container>
            <Typography variant='h4' color='primary'>
                Books
            </Typography>

            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
                <Grid container  spacing={3} style={{marginTop:10}} >
                    {books && (books.map((item)=>(
                        <Grid item key={item._id} xs={12} md={6} lg={4}>
                            <Paper>
                                <BookList name={item.name} id={item._id}/>
                            </Paper>
                        </Grid>   
                    )))}
                </Grid>
            
        </Container>
    )
}

export default Books
