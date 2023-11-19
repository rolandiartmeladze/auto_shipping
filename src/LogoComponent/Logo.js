import React  from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';

const LogoImg = styled.img`
  position: absolute;
  width: 30%;
  max-width: 100px;
  top: 5px;
  left: 15px;
  cursor: pointer;
  transition: 0.6s ease-in-out;
  z-index: 8;

  @media (max-width: 1024px) {
    width: 30%;
    max-width: 50px;
    top: 2px;
  }
  @media (max-width: 700px) {
    top: 45px;
  }
  @media (max-width: 500px) {
    top: 65px;
    max-width: 40px;

  }


}
`;
function Logo() {return(<LogoImg src={logo} alt='logo' />);}

export default Logo;
