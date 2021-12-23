import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import Home from './Pages/Home/Home';
import Empty from './Pages/Empty/Empty';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/empty">
            <Empty></Empty>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
