import React, { useContext } from 'react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import firebaseUiConfig from '../../configs/firebaseUi';

export default function Login() {
  const { user } = useContext(AuthContext);

  return (
    user
      ? <Redirect to={{ pathname: '/editor' }} />
      : (
        <StyledFirebaseAuth
          uiConfig={firebaseUiConfig}
          firebaseAuth={firebase.auth()}
        />
      )
  );
}
