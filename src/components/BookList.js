import React, {useState} from 'react'
import useFetch from '../contexts/useFetch'
import BookChapters from './BookChapters'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';


const useStyles = makeStyles({
    btn: {
        fontSize:60,
        backgroundColor: 'violet',
        '&:hover' : {
            backgroundColor: 'blue'
        }
    },
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
})

const BookList = ({name, id}) => {

    const classes = useStyles()

    const {data: chapters} = useFetch(`https://the-one-api.dev/v2/book/` + id + `/chapter`)
    
    const [chaptersOfOneBook, setChaptersOfOneBook] = useState([])
    const [showChaptersOfOneBook, setShowChaptersOfOneBook] = useState(false)

    const getBookChapters = () => {
        
        const bookChapters = chapters.map((chapter)=>chapter.chapterName)
        setChaptersOfOneBook(bookChapters)
        setShowChaptersOfOneBook(true)
    }

    const closeChapters = () => {
        setShowChaptersOfOneBook(false)
    }

    
    
    return (
        <Card elevation={5} className={classes.root}>

            <div>
                <CardHeader title={name}/>
                
                <CardActions>
                    {showChaptersOfOneBook ? (
                        <div>
                            <Button 
                                variant='outlined'
                                size='small'
                                onClick={()=>closeChapters()}
                            >
                                close
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Button 
                                // className={classes.btn}
                                variant='outlined'
                                onClick={()=>getBookChapters()}
                                size="small"
                            >
                                chapters
                            </Button>    
                        </div>
                    )}
                </CardActions>    
            </div>
                
            <div>
            
                {showChaptersOfOneBook && (
                    <CardContent>
                        <BookChapters chaptersOfOneBook={chaptersOfOneBook}/>
                    </CardContent>
                )}    
            </div>
            
        </Card>
    )
}

export default BookList
