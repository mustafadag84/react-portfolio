import React from 'react';

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
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  );
}

export default Nav;
