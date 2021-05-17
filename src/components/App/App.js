import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from '../Navbar';
import Login from '../Login';
import { AuthProvider } from '../../contexts/AuthContext';
import ProjectManager from '../ProjectManager';
import { ProjectProvider } from '../../contexts/ProjectContext';
import ProjectStepBar from '../ProjectStepBar';
import ProjectByAddress from '../ProjectByAddress';

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
          <Route path='/editor'>
            <ProjectProvider>
              <ProjectStepBar />
              <ProjectManager />
            </ProjectProvider>
          </Route>
          <Route path='/login' exact component={Login} />
          <Route path='/:address' component={ProjectByAddress} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
