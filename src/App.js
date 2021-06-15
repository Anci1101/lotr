import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookChapters from './components/BookChapters';
import Books from './components/Books';
import CharactersList from './components/CharactersList';
import CharactersQoutes from './components/CharactersQoutes';
import Home from './components/Home';
import Movies from './components/Movies';
import { BookProvider } from './contexts/BookContext';
import { MovieProvider } from './contexts/MovieContext.js';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';


const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#c2a608'
    },
    secondary: purple
  },
  typography:{
    fontFamily: 'Stint Ultra Condensed',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
 
})

function App() {
  return (
    <div>
      <ThemeProvider theme ={theme}>
        <BookProvider>
          <MovieProvider>
            <Router>
              <Layout>
              {/* <NavBar/> */}
              <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/books' component={Books}/>
                <Route path='/book/:id' component={BookChapters}/>
                <Route path='/movies' component={Movies}/>
                <Route path='/charactersList' component={CharactersList}/>
                <Route path='/character/:id/quote' component={CharactersQoutes}/>
              </Switch>
              </Layout>
            </Router>
          </MovieProvider>
        </BookProvider>
      </ThemeProvider>
      


    </div>
  );
}

export default App;
