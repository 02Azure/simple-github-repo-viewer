import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Users from "./views/Users"
import Home from "./views/Home"
import NotFound from "./views/NotFound"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users/:username">
          <Users />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
