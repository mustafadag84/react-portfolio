import React from 'react';
import About from './pages/about.js'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Portfolio from './pages/portfolio.js'
import Contact from './pages/contact.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <Nav />
        <Switch>

          <Route exact path="/">
            <About />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio />
          </Route>

          {/* <Route exact path="/contact">
            <Contact />
          </Route> */}

        </Switch>
        <Footer/>
      </div>

    </Router>

  );
}

export default App;
