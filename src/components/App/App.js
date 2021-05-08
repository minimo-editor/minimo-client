import React from 'react';
import {
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/editor'>Editor</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/editor' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
