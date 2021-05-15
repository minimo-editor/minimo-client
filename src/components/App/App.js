import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Editor from '../Editor';
import Navbar from '../Navbar';
import Login from '../Login';
import { AuthProvider } from '../../contexts/AuthContext';

function App() {
  // const {
  //   data,
  //   error,
  //   isLoading,
  //   isFetching,
  // } = useQuery('user', () => fetch(
  //   `${process.env.REACT_APP_SERVER_URL}/user`,
  // ).then((res) => res.json()));

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/editor' component={Editor} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
