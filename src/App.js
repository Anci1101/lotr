import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Books from './components/Books';
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
          <Route path='/movies' component={Movies}/>
        </Switch>
      </Router>
      </MovieProvider>
      </BookProvider>


    </div>
  );
}

export default App;
