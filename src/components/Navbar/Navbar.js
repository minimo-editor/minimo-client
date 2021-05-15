import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { AuthContext } from '../../contexts/AuthContext';

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className='account'>
      {user ? (
        <div className='dropdown'>
          <p>{`Welcome, ${user.displayName}`}</p>
          <div className='dropdown-content'>
            <Link to='/editor'>Create New Project</Link>
            <Link to='/my'>My Projects</Link>
            <button
              type='button'
              onClick={() => firebase.auth().signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <Link to='/signin'>
          <button type='button'>SIGN IN/ REGISTER</button>
        </Link>
      )}
    </div>
  );
}