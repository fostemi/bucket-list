// import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoalOne from './pages/goal-one.ts'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={GoalOne}/>
      </Switch>
    </Router>
  );
}

export default App;
