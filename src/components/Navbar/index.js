import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <header  className="bg-dark container">
    <div className="row">
      <div className="col-12 col-lg-4">
        <h1 id="name">Mustafa Dag</h1>
      </div>

      <div className="col-12 col-lg-8">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
  );
}

export default Nav;
