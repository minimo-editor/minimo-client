import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import FirebaseAuth from '../../hooks/useFirebaseAuth';
import ImgDnd from '../../hooks/useImgDnD';
import Editor from '../Editor';

function App() {
  return (
    <Router>
      <div>
        <ImgDnd />
        <Switch>
          <Route path='/editor' component={Editor} />
        </Switch>
        <FirebaseAuth />
      </div>
    </Router>
  );
}

export default App;
