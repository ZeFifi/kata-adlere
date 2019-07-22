import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";

function App() {
  return (
      <Router>
              <Route exact path="/" component={Home} />
              <Route path="/admin" component={Admin} />
      </Router>
  );
}

export default App;
