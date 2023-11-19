import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import './Slide.css';


import slide1 from '../img/BenzGl.jpg';
import slide2 from '../img/Bmw3.jpg';
import slide3 from '../img/Camry.jpg';
import slide4 from '../img/Fusion.jpg';
import slide5 from '../img/Lamborghini.jpg';
import slide6 from '../img/Lexus.jpg';
import slide7 from '../img/ToyotaPrius.jpg';

const SlideBtn = styled.samp`
  top: 0px;
  font-size: 350%;
  position: absolute;
  color: red;
  font-weight: bolder;
  background-color: rgba(255, 0, 0, 0.1);
  padding: 0 10px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(255, 0, 0, 0.6);
    color: white;
  }
  @media (max-width: 700px) {
    opacity: 0;

  }
}

`;

const SlideContainer = styled.div`
  background-color: red;
  height: auto;
  max-height: 100vh;
  position: relative;
  overflow: hidden;
  touch-action: pan-y; 
  @media (max-width: 500px) {
    overflow: visible;
  }

`;

const SlideItem = styled.div`
  width: 100%;
  height: 100%;

  img {
    transition: 1.5s ease-in-out;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SlideNavigation = styled.samp`
  bottom: 0px;
  padding-bottom: 5px;
  position: absolute;
  background: linear-gradient(to top, rgba(255, 100, 200, 0.2) 10%, transparent 100%);
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 0.5s ease-in-out;

  @media (max-width: 500px) {
    bottom: -40px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 8px;

  }


`;

const SlideNavigationBtn = styled.samp`
  padding: 5px;
  background-color: red;
  margin: 2px;
  border-radius: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  @media (max-width: 500px) {
=    margin-top: 8px;

  }

`;


const changeColor = keyframes`
  0% { color: rgb(255, 255, 0); border-color:rgb(255, 255, 0);}
  33% { color: rgb(1, 100, 100); border-color: rgb(1, 100, 100);}
  66% { color: rgb(25, 255, 50); border-color: rgb(25, 255, 50);}
  100% { color: rgb(255, 255, 0); border-color:rgb(255, 255, 0);}
`;


const SlideContext = styled.div`

      left: ${(props) => `${props.offsetWidth}px`};
      bottom: 55px;
      position: absolute;
      transition: 0.5s ease-in-out;

      max-width: 90%;

        li {list-style: none;}

            h2 {
              transition: 0.5s ease-in-out;
              position: relative;
              font-size: 300%;
              margin: 0;
              color: red;
              font-weight: bolder;
              font-family: "SlideTitel", sans-serif;
              padding-left: 5px;
              padding-right: 5px;
              background-image: linear-gradient(
                to top,
                rgb(0, 0, 0, 0.4),
                rgb(0, 0, 0, 0.3),
                rgb(0, 0, 0, 0.2),
                rgb(0, 0, 0, 0.1),
                rgb(0, 0, 0, 0)
              );

                  &:after {
                    content: "";
                    position: absolute;
                    background-image: linear-gradient(
                      to right,
                      rgb(255, 0, 0, 0.9),
                      rgb(255, 0, 0, 0.7),
                      rgb(255, 0, 0, 0.5),
                      rgb(255, 255, 0, 0.3),
                      rgb(255, 255, 0, 0.1)
                    );
                    bottom: -6px;
                    left: 0;
                    width: 100%;
                    height: 6px;
                      }

                      @media (max-width: 1024px) { font-size: 150%; }

                      @media (max-width: 500px) { font-size: 100%; }
                  }


                      p {
                        transition: 0.3s ease-in-out;
                        background-image: linear-gradient(
                          to top,
                          rgb(0, 0, 0, 0.5),
                          rgb(0, 0, 0, 0.9),
                          rgb(0, 0, 0, 0.5)
                        );
                        color: rgb(255, 255, 0);
                        padding:5px;
                        margin:0px;
                        margin-top:4px;
                        padding-top:9px;
                        font-family: "SlideContext", sans-serif;
                        font-size: 120%;
                        line-height: 1.7;

                            @media (max-width: 700px) {font-size: 80%;}
                            @media (max-width: 500px) { font-size: 60%; }


                        }
                        a {
                          color: rgb(255, 255, 0);
                          background-image: linear-gradient(to top, rgb(255, 0, 0, 0.9), rgb(0, 0, 0, 0.5));
                          padding: 8px;
                          padding-top: 12px;
                          text-decoration: none;
                          float: right;
                          border-radius: 0px 0px 10px 10px;
                          transition: color 0.3s ease-in-out;
                          position: relative;
                          animation: ${changeColor} 6s infinite ease-in-out;
                          font-family: "SlideBtn", sans-serif;
                          border: 1px solid rgb(255, 255, 0);
                          border-top: 0px;

                          @media (max-width: 1024px) { font-size: 80%; }

                          @media (max-width: 500px) { font-size: 70%; }
    
                        }
                        @media (max-width: 1024px) {max-width: 86%;}
                          @media (max-width: 700px) {left: 15px; bottom: 45px; max-width: 94%; }

                          @media (max-width: 500px) {left: 8px; bottom: 8px;}
`;



const slides = [
  { image: slide1, title: 'წინ შენი ოცნებისკენ...', link: '' },
  { image: slide2, title: 'გახდი ბედნიერების მიზეზი...',  link: '' },
  { image: slide3, title: 'შენი საიმედო პარტნიორი...',  link: '' },
  { image: slide4, title: 'აისრულე ოცნება დღეს...',  link: '' },
  { image: slide5, title: 'გვითხარი რა გსურს...',  link: '' },
  { image: slide6, title: 'აქ დაემატება ტექსტი...',  link: '' },
  { image: slide7, title: 'აქ დაემატება ტექსტი...',  link: '' },
];

 const Context = "ჩვენი გუნდი დაგეხმარება შენთვის სასურველი ავტომობილის მოძიებასა და ჩამოყვანაში";

const Slide = () => {



  const slideBtnRef = useRef(null);
  const [offsetWidth, setOffsetWidth] = useState(0);

  const updateWidths = () => {
    if (slideBtnRef.current) {
      const newOffsetWidth = slideBtnRef.current.offsetWidth + 5;
      setOffsetWidth(newOffsetWidth);
    }
  };

  useEffect(() => {
    updateWidths(); 
    window.addEventListener('resize', updateWidths);

    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, []);



  const [slideIndex, setSlideIndex] = useState(1);
  const slideLength = slides.length;
  const touchStartX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex % slideLength) + 1);
    }, 9000);

    return () => clearInterval(interval);
  }, [slideLength]);

  const handlePrevSlide = () => {
    setSlideIndex((slideIndex - 2 + slideLength) % slideLength + 1);
  };

  const handleNextSlide = () => {
    setSlideIndex(slideIndex % slideLength + 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDelta = touchStartX.current - touchEndX;

    if (touchDelta > 50) {
      handleNextSlide();
    } else if (touchDelta < -50) {
      handlePrevSlide();
    }
  };

  return (
    <SlideContainer onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <SlideItem>
        <img src={slides[slideIndex - 1].image} alt={`slide${slideIndex}img`} />
      </SlideItem>
      <SlideBtn  ref={slideBtnRef} style={{ left: '0' }} onClick={handlePrevSlide}>
        {"<"}
      </SlideBtn>
      <SlideBtn style={{ right: '0' }} onClick={handleNextSlide}>
        {">"}
      </SlideBtn>
      <SlideNavigation>
        {slides.map((_, index) => (
          <SlideNavigationBtn
            key={index}
            style={{
              backgroundColor: slideIndex === index + 1 ? 'yellow' : 'red',
            }}
            onClick={() => setSlideIndex(index + 1)}
          />
        ))}
      </SlideNavigation>

      <SlideContext   offsetWidth={offsetWidth} >
        <li style={{ zIndex: '15' }}>
          <h2>{slides[slideIndex - 1].title}</h2>
          <p>{Context}</p>
          {/* <a href={slides[slideIndex - 1].link}>დაგვიკავშირდი</a> */}
          <a  style={{ right: '0' }} href='#'>დაგვიკავშირდი</a>
        </li>
      </SlideContext>
    </SlideContainer>
  );
};

export default Slide;




