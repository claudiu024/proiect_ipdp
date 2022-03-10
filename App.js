import './App.css';
import Register from "./register"
import Home from "./home"
import PasswordReset from './passwordreset'
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

          <Route exact path="/register">
            <Register />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/passwordreset">
            <PasswordReset />
          </Route>

        </Switch>
  </Router>
  );
        }

export default App;