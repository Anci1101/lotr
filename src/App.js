import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BookChapters from './components/BookChapters';
import Books from './components/Books';
import CharactersList from './components/CharactersList';
import CharactersQoutes from './components/CharactersQoutes';
import Home from './components/Home';
import Movies from './components/Movies';
import NavBar from './components/NavBar'
import { BookProvider } from './contexts/BookContext';
import { MovieProvider } from './contexts/MovieContext.js';

function App() {
  return (
    <div className="App">
      <BookProvider>
        <MovieProvider>
        
      <Router>
        
        <NavBar/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/books' component={Books}/>
          <Route path='/book/:id' component={BookChapters}/>
          <Route path='/movies' component={Movies}/>
          <Route path='/charactersList' component={CharactersList}/>
          <Route path='characters/:id' component={CharactersQoutes}/>
        </Switch>
      </Router>
      </MovieProvider>
      </BookProvider>


    </div>
  );
}

export default App;
