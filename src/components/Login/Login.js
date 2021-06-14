import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import firebase from '../../configs/firebase';

export default function Login() {
  const { user } = useContext(AuthContext);

  return (
    user
      ? <Redirect to={{ pathname: '/editor' }} />
      : (
        <StyledFirebaseAuth
          uiConfig={firebase.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )
  );
}
