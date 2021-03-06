import React from "react";
import "./App.css";
import {
  Header,
  Sidebar,
  Dashboard,
  Calendar,
  Clients,
  Inbox,
  InboxSidebar,
  SignUp,
  SignIn,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Switch>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/'>
              <SignIn />
            </Route>
          </Switch>
        ) : (
          <>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Switch>
                <Route path='/calendar/'>
                  <Calendar />
                </Route>
                <Route path='/clients/'>
                  <Clients />
                </Route>
                <Route path='/groups/'>
                  <h1>Group</h1>
                </Route>
                <Route path='/inbox/:chatId'>
                  <Inbox />
                </Route>
                <Route path='/inbox/'>
                  <InboxSidebar />
                </Route>
                <Route path='/exercises/'>
                  <h1>Exercises</h1>
                </Route>
                <Route path='/workout-templates/'>
                  <h1>Workout-templates</h1>
                </Route>
                <Route path='/payments/'>
                  <h1>Payments</h1>
                </Route>
                <Route path='/'>
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
