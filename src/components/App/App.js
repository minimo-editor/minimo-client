import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Editor from '../Editor';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/editor' component={Editor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
