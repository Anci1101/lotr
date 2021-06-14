import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { HomeOutlined, LibraryBooksOutlined, MovieCreationOutlined, PersonPinCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        background: '#f7eed5',
        width: '100%'
    },
    drawer:{
        width: drawerWidth
    },
    drawerPaper:{
        width: drawerWidth
    },
    root: {
        display: 'flex'
    },
    active: {
        background: '#f7eed5'
    },

})

const Layout = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'Home',
            icon: <HomeOutlined color='#000'/>,
            path: '/'
        },
        {
            text: 'Books',
            icon: <LibraryBooksOutlined color='#000'/>,
            path: '/books'
        },
        {
            text: 'Movies',
            icon: <MovieCreationOutlined color='#000'/>,
            path: '/movies'
        },
        {
            text: 'Characters',
            icon: <PersonIcon color='#000'/>,
            path: '/charactersList'
        },
    ]
    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{paper: classes.drawerPaper}}
                >
                <div>
                    <Typography variant='h5'>
                        Lord of the rings
                    </Typography>
                </div>
                {/* list links */}
                <List>
                    {menuItems.map(item=> (
                        <ListItem key={item.text}
                                button
                                onClick={()=> history.push(item.path)}
                                className={location.pathname == item.path ? classes.active : null}
                                >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                    
                </List>
            </Drawer>
            
            <div className={classes.page}>{children}</div>
            
        </div>
    )
}

export default Layout
