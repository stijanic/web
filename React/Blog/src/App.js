//
// git clone git@github.com:iamshaunjp/Complete-React-Tutorial.git && cd Complete-React-Tutorial.git
// git checkout lesson-32
//
// npx create-react-app blog && cd blog
// npm install
// npm install react-router-dom@5
//
// npx json-server --watch data/db.json --port 8000 --host 0.0.0.0
// npm start
//
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
