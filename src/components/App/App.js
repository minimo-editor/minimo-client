import React, { useContext } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Login from '../Login';
import ProjectManager from '../ProjectManager';
import { ProjectProvider } from '../../contexts/ProjectContext';
import ProjectStepBar from '../ProjectStepBar';
import ProjectByAddress from '../ProjectByAddress';
import { AuthContext } from '../../contexts/AuthContext';
import Main from '../Main';
import Stepper from '../shared/Stepper';

const STEPS = [
  {
    step: 1,
    title: 'first title',
  },
  {
    step: 2,
    title: 'second title',
  },
  {
    step: 3,
    title: 'third title',
  },
  {
    step: 4,
    title: 'fourth title',
  },
];

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Stepper steps={STEPS} />
            <Main />
          </Route>
          {user && (
            <Route exact path='/editor'>
              <Navbar isEditor />
              <ProjectProvider>
                <ProjectStepBar />
                <ProjectManager />
              </ProjectProvider>
            </Route>
          )}
          {!user && <Route exact path='/login' component={Login} />}
          <Route exact path='/:address' component={ProjectByAddress} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
