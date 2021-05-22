import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';

export default function Navbar({ isEditor }) {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Header>
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
        <Auth>
          {user && (
            <LogoutButton
              type='button'
              onClick={() => firebase.auth().signOut()}
            >
              Log Out
            </LogoutButton>
          )}
          {!isEditor && (
            <LoginLink to={user ? '/editor' : '/login'}>
              <LoginButton>
                Get Started
              </LoginButton>
            </LoginLink>
          )}
        </Auth>
      </Header>
    </>
  );
}

const Auth = styled.div`
  display: flex;
`;

const User = styled.div`
  margin: auto;
  color: black;
  font-size: 18px;
  font-weight: 500;
  font-family: Scto, Arial, sans-serif;
  text-decoration: none;
`;

const Header = styled.div`
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

const Button = styled.div`
  padding: 0px 14px;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  text-decoration: none;
  font-family: Scto, Arial, sans-serif;
  font-weight: 500;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 40px;
`;

const LoginButton = styled(Button)`
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  &:hover {
    background-color: rgb(3, 69, 207);
    color: rgb(255, 255, 255);
  }
`;

const LogoutButton = styled(Button)`
  background-color: #faddc7;
  color: rgb(255, 255, 255);
  margin-right: 0.5rem;

  &:hover {
    background-color: #e29559;
    color: rgb(255, 255, 255);
  }
`;

const LoginLink = styled(Link)`
  text-decoration: none;
`;
