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
            <Route path='/groups'>
              <h1>Group</h1>
            </Route>
            <Route path='/inbox'>
              <Inbox />
            </Route>
            <Route path='/exercises'>
              <h1>Exercises</h1>
            </Route>
            <Route path='/workouttemplates'>
              <h1>Workout-templates</h1>
            </Route>
            <Route path='/payments'>
              <h1>Payments</h1>
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
