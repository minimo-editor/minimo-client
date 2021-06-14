import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import firebase from '../../configs/firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { LightPinkButton, BlackButton } from '../shared/StyledButton';

export default function Navbar({ isEditor = false }) {
  const { user } = useContext(AuthContext);

  return (
    <NavbarContainer>
      <HomeLink to='/'>
        <Logo>
          minimo
        </Logo>
      </HomeLink>
      {!isEditor && (
        <User>
          {user && `Hello, ${user.displayName}`}
        </User>
      )}
      {user && (
        <LightPinkButton
          type='button'
          onClick={() => firebase.auth().signOut()}
        >
          Log Out
        </LightPinkButton>
      )}
      {!isEditor && (
        <StartLink to={user ? '/editor' : '/login'}>
          <BlackButton>
            Get Started
          </BlackButton>
        </StartLink>
      )}
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  isEditor: PropTypes.bool,
};

const User = styled.div`
  margin: auto;
  color: black;
  font-size: 18px;
  font-weight: 500;
  font-family: Scto, Arial, sans-serif;
  text-decoration: none;
`;

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  transition: background-color 0.3s ease 0s;
`;

const Logo = styled.span`
  height: 32px;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 2rem;
`;

const StartLink = styled(Link)`
  text-decoration: none;
`;
