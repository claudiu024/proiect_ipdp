import './App.css';
import Register from "./register"
import Home from "./home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          
            <Route path="/">
              <Home />
            </Route>
        </Switch>
  </Router>
  );
        }

export default App;