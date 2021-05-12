import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
});

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function FirebaseAuth() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: currentUser.email,
        name: currentUser.displayName,
        photoURL: currentUser.photoURL,
      }),
    };

    fetch(`${SERVER_URL}/user`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [currentUser]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  return (
    <div>
      {currentUser ? (
        <span>
          <button type='button' onClick={() => firebase.auth().signOut()}>Sign out!</button>
          <h1>
            Welcome
            {currentUser.displayName}
          </h1>
          <img
            alt={currentUser.displayName}
            src={currentUser.photoURL}
          />
        </span>
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
}
