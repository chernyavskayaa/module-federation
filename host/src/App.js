import React from 'libs/react';
import { Link } from 'libs/react-router-dom';
import { Router } from './router/router'


const App = () => {
  return <Router>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/activity">Activity</Link>
          </li>
        </ul>
      </nav>
    </header>
 </Router>
};

export default App;
