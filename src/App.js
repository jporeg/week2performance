import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
