import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login/Login";
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
            <Route path="/login" exact component={Login} />
          </switch>
        </div>
      </Router>
    </>
  );
}

export default App;
