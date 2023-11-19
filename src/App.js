// Frontend (App.js)
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ContactBar from '../src/HeadContactBar/HeadContactBar';
import SlideConteiner from './SlideComponent/Slide';

import Logo from './LogoComponent/Logo';


import '../src/styles.scss';
import './App.css';

const menuItems = [
  "მთავარი",
  "ჩვენს შესახებ",
  "სიახლე",
  "ავტომობილები",
  "კონტაქტი",
  "შეფასება",
];

const HeaderItem = styled.header`
      transition: 0.6s ease-in-out;
      display: flex;
      align-items: flex-end;
      min-height: 110px;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(0.2px);
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3);
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      position:  absolute;
      width: 100%;
      z-index: 1;

      @media (max-width: 1024px) { min-height: 60px; }
      @media (max-width: 1024px) { min-height: 50px; }
      @media (max-width: 500px) { min-height: 40px; }
      `;

const MeniuBtnItem = styled.div`
  position: absolute;
  top: 4px;
  right: 10px;
  width: 40px;
  height: auto;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  z-index: 5;
  transition: 0.8s ease-in-out, background-color 1s;
  cursor: pointer;
  @media (max-width: 1024px) {   
    display: flex; padding: 3px;
  }
  @media (max-width: 700px) {   
    top: ${(props) => (props.isOpen ? '6px' : '0px')};
  }


`;


const MeniuBtn = ({ isOpen, toggleMenu }) => { 

  const btnRef = useRef(null);

  return (
    <MeniuBtnItem ref={btnRef} 
    isOpen={isOpen}
    onClick={toggleMenu} 
    className="meniu_btn">
      <div className={`line ${isOpen ? 'line1' : 'line'}`}></div>
      <div className={`line ${isOpen ? 'line2' : 'line'}`}></div>
      <div className={`line ${isOpen ? 'line3' : 'line'}`}></div>
    </MeniuBtnItem>
  );
};


const Meniu = React.memo(
  ({ isOpen, toggleMenu, menuItems }) => {
    return (
      <>
        <nav style={{width: isOpen ? '250px': window.innerWidth > 1024 ? 'auto' : '0px'}} className="navbar">
          <ul className="navbar__menu">
            {menuItems.map((item, index) => (
              <li
                className="navbar__item"
                key={index}
                onClick={() => {
                  toggleMenu();
                }}
              >
                <a href={item} className="navbar__link">
                  <span>{item}</span>{" "}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }
);


// function useResponsiveNavWidth(isOpen) {
//   const [navWidth, setNavWidth] = useState("0px");

//   useEffect(() => {
//     const updateNavWidth = () => {
//       if (window.innerWidth <= 1024) {
//         setNavWidth(isOpen ? "0px" : "-251px");
//       } else {
//         setNavWidth("0px");
//       }
//     };

//     window.addEventListener("resize", updateNavWidth);
//     updateNavWidth();

//     return () => {
//       window.removeEventListener("resize", updateNavWidth);
//     };
//   }, [isOpen]);

//   return navWidth;
// }



function Header({ isLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ContactBar isLogin={isLogin} />
      <Logo />
      <HeaderItem>
        <Meniu
         isOpen={isOpen}
          toggleMenu={toggleMenu}
          menuItems={menuItems}
        />
        <MeniuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
      </HeaderItem>
    </>
  );
}



function App({ isOpen, lang , isLogin }) {

  const slideContext = [
    {
    title: 'წინ შენი ოცნებისკენ...',
    context:'',
    link:''
    }
  ,
  {
    title: 'გახდი ბედნიერების მიზეზი...',
    context:'',
    link:''
    }
  ,
  {
    title: 'შენი საიმედო პარტნიორი...',
    context:'',
    link:''
    }
  ,
  {
    title: 'აისრულე ოცნება დღეს...',
    context:'',
    link:''
    }
  ,
  {
    title: 'გვითხარი რა გსურს?! ...',
    context:'',
    link:''
    }
  ,
  {
    title: 'აქ დაემატება ტექსტი...',
    context:'',
    link:''
    }
  ,
  {
    title: 'აქ დაემატება ტექსტი...',
    context:'',
    link:''
    }
  ];
  
  

  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontFamily: "'Open Sans', sans-serif",
    minHeight: '100vh',
    maxWidth: '100%',
    transition: '2.5s ease-in-out'
  };
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/'); 
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div style={backgroundStyle} lang={lang} >
           <Header isOpen={isOpen} isLogin={isLogin} />

           <SlideConteiner />

      <h1>{data ? data.message : 'Loading...'}</h1>

</div>


{slideContext.map((slide, index) => (
            <li style={{zIndex: '15'}} key={index}>
              <h3>{slide.title}</h3>
              <p>{slide.context}</p>
              <a href={slide.link}>Link</a>
            </li>
          ))}


        </>

  );
}

export default App;



  // cd C:/Users/R/OneDrive/Desktop/Projects_git/auto_shipping/frontend
  // cd C:/Users/R/OneDrive/Desktop/Projects_git/auto_shipping/backend




  
         {/* @ https://twitter.com/One_div */}

        {/* <nav class="navbar">
            <ul style={{listStyle:'none'}} class="navbar__menu">
              <li class="navbar__item"> <a href="Home" class="navbar__link">    <span>Home</span>    </a> </li>
              <li class="navbar__item"> <a href="About" class="navbar__link">   <span>About</span>   </a> </li>
              <li class="navbar__item"> <a href="News" class="navbar__link">    <span>News</span>    </a> </li>
              <li class="navbar__item"> <a href="Cars" class="navbar__link">    <span>Cars</span>    </a> </li>
              <li class="navbar__item"> <a href="Contact" class="navbar__link"> <span>Contact</span> </a> </li>
              <li class="navbar__item"> <a href="Rate" class="navbar__link">    <span>Rate</span>    </a> </li>
            </ul>
        </nav> */}

         {/* @ https://twitter.com/One_div */}
  {/* __________________________________________________________________________ */}

 
        {/* <nav class="navbar">
    <ul style={{listStyle:'none'}} class="navbar__menu">
      <li class="navbar__item">
        <a href="Home" class="navbar__link"><span>მთავარი</span> </a>
      </li>
      <li class="navbar__item">
        <a href="About" class="navbar__link"><span>ჩვენს შესახებ</span></a>        
      </li>
      <li class="navbar__item">
        <a href="News" class="navbar__link"><span>სიახლე</span></a>        
      </li>
      <li class="navbar__item">
        <a href="Cars" class="navbar__link"><span>ავტომობილები</span></a>        
      </li>
      <li class="navbar__item">
        <a href="Contact" class="navbar__link"><span>კონტაქტი</span></a>        
      </li>
      <li class="navbar__item">
        <a href="Rate" class="navbar__link"><span>შეფასება</span></a>        
      </li>
    </ul>
  </nav> */}

   {/* @ https://twitter.com/One_div */}

