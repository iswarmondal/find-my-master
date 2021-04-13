import React from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div>
          <switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </switch>
        </div>
      </Router>
    </>
  );
}

export default App;
