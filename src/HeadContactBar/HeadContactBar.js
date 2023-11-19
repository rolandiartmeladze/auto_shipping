import styled, { keyframes, css } from 'styled-components';
import React, { useState, useEffect } from 'react';
import geo from "../icon/GEO.png";
import eng from "../icon/ENG.png";
import phone from "../icon/phone.png";
import gmail from "../icon/gmail.png";


const ContactBarContainer = styled.div`
      position: absolute;
      margin-top: 0px;
      width: 100%;
      height: 30px;
      color: #fff;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0px;
      backdrop-filter: blur(0.3px);
      z-index: 2;
      padding-top: 8px;
      padding-bottom: 0px;
      backdrop-filter: blur(0.3px);
      right: 30px;


      @media (max-width: 1024px) { right: 55px; }

      @media (max-width: 700px) {
        right: 0px;
        height: 40px;
        position: relative;
        background-color: rgba(25, 30, 10);
        padding-top: 3px;
      }
      @media (max-width: 500px) {
        height: 60px;
      }

    }
`;

const ContactBarList = styled.ul`
      padding: 3px;
      list-style: none;
      display: flex;

      @media (max-width: 1024px) {
        margin-right:0px
      }

      @media (max-width: 500px) {
        margin-right:10px
      }

`;

const ContactBarListItemLeng = styled.div`
      min-width: 30px;
      min-height: 25px;
      margin-left: 5px;
      margin-right: 5px;
      padding: 3px;
      border-radius: 5px;
      background-image: url(${(props) => props.langImage});
      background-size: cover;
      background-position: center;
      transition: transform 0.3s ease-in-out;
      cursor: pointer;
        &:hover { transform: scale(1.05); }
`;

const ContactBarListItem = styled.div`
      margin: 2px;
      border-radius: 5px;
      position: relative;
      marginLeft: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      min-width: 55px;
      padding: 2px;
`;

const rotateAnimation = keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(1440deg); }
`;

const rotationStyles = css`
      animation: ${rotateAnimation} 16s ease-in-out infinite alternate;
`;

const N1samp = css`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  `;

const N2samp = css`
      width: 80%;
      height: 80%;
      border-radius: 5px;
      background-color: rgb(0, 0, 0,0.3) ;
      `;

const N3samp = css`
      width: 60%;
      height: 60%;
      border-radius: 5px;
      background-color: rgb(0, 0, 0,0.3);
            `;

const N4samp = css`
      width: 40%;
      height: 40%;
      border-radius: 5px;
      background-color: rgb(0, 0, 0,0.3);
        `;

const StyledSpan = styled.span`

    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(0);
    transition: transform 2.5s ease-in-out;
      &.N1 {
        transition: 0.5s ease-in-out;
        border: 1px solid rgb(162, 213, 255);
        width: 60%;
        border-radius: 10% 70% 10% 70%;
        ${(props) => !props.isHovered && rotationStyles};
        ${(props) => props.isHovered && N1samp};
      }
        &.N2 {
          transition: 0.5s ease-in-out;
          border: 1px solid rgb(205, 55, 25);
          width: 50%;
          border-radius: 70% 10% 70% 10%;
          ${(props) => !props.isHovered && rotationStyles};
          ${(props) => props.isHovered && N2samp};
        }
          &.N3 {
            transition: 0.5s ease-in-out;
            border: 1px solid rgb(5, 255, 0);
            width: 30%;
            height: 22px;
            border-radius: 100%;
            ${(props) => !props.isHovered && rotationStyles};
            ${(props) => props.isHovered && N3samp};
          }
            &.N4 {
              transition: 0.5s ease-in-out;
              border: 1px solid rgb(255, 255, 0);
              width: 20%;
              height: 18px;
              border-radius: 120%;
              ${(props) => !props.isHovered && rotationStyles};
              ${(props) => props.isHovered && N4samp};
            }
`;

const HeaderContactUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    left: 3px;
    top: 3px;
    position: absolute;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}
  }
}
`;

const HeaderContactLi = styled.li`
  margin: 1px;
  marginRight: 4px;
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  fontSize: 60%;
  transition: color 0.5s;
  position: relative;
    &:before {
      content: ' ';
      position: absolute;
      height: 100%;
      width: 0px;
      left: 1px;
      bottom: -1px; 
      background: rgb(255, 255, 255,0.5); 
      transition: 0.5s;
      z-index: -1;
      border-top-left-radius: 8px;
    }
      &:after {
        content: ' ';
        position: absolute;
        height: 3px;
        width: 0px;
        left: 2px;
        bottom: -1px; 
        background: yellow; 
        transition: 0.5s;
      }
        &:hover {  
          color: rgb(255, 0, 0);
          &:after { width: 100%; }
            &:before { width: 100%; }
        }
`;


const ContactBar = ({ onLangChange }) => {
    const [lang, setLang] = useState("eng");
    const [isHovered, setIsHovered] = useState(false);
    const handleLangChange = () => {
          const newLang = lang === "geo" ? "eng" : "geo";
                setLang(newLang);
                // onLangChange(newLang);
    };
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => { setIsMobile(window.innerWidth <= 700); };
              window.addEventListener('resize', handleResize);
                      return () => { window.removeEventListener('resize', handleResize); };
    }, []);


    const [isLogin, setisLogin] = useState(false);

    const loginBtn = ({isLogin}) =>{
      setisLogin(true);
    }




  return (
    <ContactBarContainer>
<HeaderContactUl>

      <HeaderContactLi>
        <img style={{ width: '20px', marginRight: '5px' }} src={gmail} alt='email' />
            <span>Rartmeladze@gmail.com</span>
      </HeaderContactLi>

            <HeaderContactLi>
              <img style={{ width: '20px', marginRight: '5px' }} src={phone} alt='phone' />
              <span>(+995) 595 03-56-68</span>
            </HeaderContactLi>

      </HeaderContactUl>

          <ContactBarList  isMobile={isMobile} >

        <ContactBarListItemLeng
          langImage={lang === "eng" ? geo : eng}
          onClick={handleLangChange}
        />

      <ContactBarListItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={loginBtn}
    >

    <samp
     isHovered={isHovered}
     isLogin = {isLogin}
      style={{
        zIndex: 2,
        position: 'absolute',
        transform:  isHovered ? 'scale(1.3)' : 'scale(1.15)', 
        top:  isHovered ? '30px' : '0px', 
        fontSize: '130%',
        fontWeight: 'bolder',
        color: isHovered ? 'red' : 'white',
        transition: '0.5s ease-in-out',
      }}
    >
      Login
    </samp>

      <StyledSpan className="N1" isLogin = {isLogin} isHovered={isHovered}></StyledSpan>
      <StyledSpan className="N2" isLogin = {isLogin} isHovered={isHovered}></StyledSpan>
      <StyledSpan className="N3" isLogin = {isLogin} isHovered={isHovered}></StyledSpan>
      <StyledSpan className="N4" isLogin = {isLogin} isHovered={isHovered}></StyledSpan>
    </ContactBarListItem>

      </ContactBarList>
    </ContactBarContainer>
  );
};

export default ContactBar;
