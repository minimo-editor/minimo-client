import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 51px;
  height: 45px;
  background-color: rgba(255, 255, 255, 0.95);
  color: #111111;
  font-family: sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 300;
  border: transparent 1px solid;
  box-shadow: 0px 3px 6px -6px rgb(0 0 0 / 32%);
  opacity: 1;
  line-height: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-transform: none;
  position: relative;
  border-radius: 0;
`;

export const GreyButton = styled(StyledButton)`
  display: inline-block;
  width: auto;
  height: 50px;
  padding-left: 30px;
  padding-right: 30px;
  min-width: 135px;
  background: #f7f7f7;

  &:hover {
    background: #e0dfdf;
  }
`;

export const NavButton = styled.button`
  padding: 0px 14px;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  text-decoration: none;
  font-family: Scto, Arial, sans-serif;
  font-weight: 500;
  height: 40px;
  cursor: pointer;
`;

export const BlackButton = styled(NavButton)`
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);

  &:hover {
    background-color: rgb(3, 69, 207);
    color: rgb(255, 255, 255);
  }
`;

export const LightPinkButton = styled(NavButton)`
  background-color: #faddc7;
  color: rgb(255, 255, 255);
  margin-right: 0.5rem;

  &:hover {
    background-color: #e29559;
    color: rgb(255, 255, 255);
  }
`;
