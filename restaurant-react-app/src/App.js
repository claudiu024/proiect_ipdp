import './App.css';
import Register from "./register"
import Home from "./home"
import PasswordReset from './passwordreset'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
  <Router>
        <Switch>

          <Route path="/register">
            <Register />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/passwordreset">
            <PasswordReset />
          </Route>

        </Switch>
  </Router>
  );
        }

export default App;