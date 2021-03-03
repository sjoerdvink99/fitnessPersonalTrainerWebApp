import React from "react";
import "./App.css";
import {
  Header,
  Sidebar,
  Dashboard,
  Calendar,
  Clients,
  Inbox,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Switch>
            <Route path='/calendar'>
              <Calendar />
            </Route>
            <Route path='/clients'>
              <Clients />
            </Route>
            <Route path='/inbox'>
              <Inbox />
            </Route>
            <Route path='/'>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
