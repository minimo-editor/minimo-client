import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import FirebaseAuth from '../../hooks/useFirebaseAuth';
import Editor from '../Editor';
import ImgUploader from '../shared/ImgUploader';

function App() {
  return (
    <Router>
      <div>
        <ImgUploader />
        <Switch>
          <Route path='/editor' component={Editor} />
        </Switch>
        <FirebaseAuth />
      </div>
    </Router>
  );
}

export default App;
