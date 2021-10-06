import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import HeroImg from '../../components/HeroIMG/HeroIMG'
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue
  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
  

const HomeStyle = styled.div`
position: relative;
margin-top: 8vh 0;
padding: 0;
width: 100vw;
height: 100%;
background-color: ${({ theme }) => theme.body};
z-index: 1;
`
const Animated = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: 'Darker Grotesque', sans-serif;
  
    .box  {
        position: absolute;
        left: 30vw;
        top: 15vh;
        width: 50%;
        height: fit-content;
        border-radius: 5px;
        padding: 0.5rem;
      
          h1 {
            color: ${({ theme }) => theme.text};
            font-size: 3em;
            width: 70%;
            font-weight: 300;
              }
              span {
                font-size: 1.4em;
                font-weight: 700;
              }
              b {
                color: #ec4d37;
                font-weight: 700;
              }
    }
  .box2 {
    position: absolute;
    top: 50vh;
    right: 10vw;
    width: 600px;
    height: fit-content;
    border-radius: 5px;
    margin: 0 auto;
    padding: 0.5rem;
    z-index: 50;

      h2 {
        color: ${({ theme }) => theme.text};
        font-size: 3em;
        width: 100%;
        font-weight: 200;

        b{
          font-size: 1.4em;
          color: #ec4d37;
        }
        i{
          font-size: 1em;
          font-weight: 300;
        }
      } 
  }


    @media (max-width: 768px) {


      .box  {
        width: 50%;
        height: fit-content;
        border-radius: 5px;       
      
          h1 {
              color: ${({ theme }) => theme.text};
              font-family: 'Darker Grotesque', sans-serif;
              font-size: 2.3rem;
              width: 100%;
              font-weight: 300;
              b {
                font-weight: 700;
              }
            }
    }

      .box2 {
        position: relative;
        margin: 0;
        z-index: 100;

      h2 {
        color: ${({ theme }) => theme.text};
        font-family: 'Darker Grotesque', sans-serif;
        font-size: 2em;
        margin-right: 0;
        font-weight: 100;
      }
      

      
    }
  }

`

const HomeMidSection = styled.div`
position: relative;
top: 100vh;
left: 0;
padding: 0;
width: 100vw;
height: 100%;
z-index: 60;
background-color: ${({theme}) => theme.body};
font-family: 'Darker Grotesque', serif;

.box3 {
    width: 50%;
    height: fit-content;
    border-radius: 5px;
    z-index: 100;

      h2 {
        color: ${({ theme }) => theme.text};
        font-family: 'Darker Grotesque', sans-serif;
        font-size: 2em;
        font-weight: 100;
      }
    }
    .magic {
      position: relative;
      width: 100%;
      font-family: 'Darker Grotesque', serif;
      text-align: center;
      background-color: transparent;
      font-size: 0.8em;
      z-index: 30;
      }

      @media (max-width: 768px) {
        
    .magic {
      position: relative;
      width: 100%;
      font-family: 'Darker Grotesque', serif;
      text-align: center;
      background-color: transparent;
      font-size: 1em;
      z-index: 30;
      }
      .box3 {
    width: 50%;
    height: fit-content;
    z-index: 100;

      h2 {
        color: ${({ theme }) => theme.text};
        font-family: 'Darker Grotesque', sans-serif;
        font-size: 0.8em;
        font-weight: 100;
      }
    }

      }
`

const ImgWrapper = styled.div`
position: absolute;
left: -50px;
top: calc(812px - (600px - 8vh));
width: 100%;
`


const Home = () => {
    
  
    return (
      <HomeStyle>
        <ImgWrapper>
            <HeroImg />
        </ImgWrapper>
            <Animated>
            <motion.div className="box" >
              <h1>Hi, <br />
                I'm  <span>Rob</span>. <br />
                A <b>Developer</b> based in Stockholm, Sweden. <br />
              </h1>
              </motion.div>
       <motion.div
         className="box2"
            >
              <h2>
              I love <b>creating</b> awesome <b><i>websites</i></b> and <b><i>applications</i></b>.
              </h2>
             
       </motion.div>
       <div  />
       <div >
       </div>
            <HomeMidSection>
            <motion.div
              className="magic"
            >
                <h1>
                  I´ve been working with creativity all my life. <br />
                  Inspiring others thru movement has been a blessing.<br/>
                  Now I´m looking forward to be inpired and inspire thru development.
                </h1>
            </motion.div>
            <motion.div
              className="box3"
              >
              <h2>My goal is to find the best <b>creative</b> solutions for your needs. <br />
                  I have always worked with creativity. My background as a dancer, has given me the ability to work with an <b>open mind</b>.
                </h2>
            </motion.div>
            </HomeMidSection>
        </Animated>
        </HomeStyle>

     );
}
 
export default Home;

/* 

const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [100, 100], [500, 300]);
    const y2 = useTransform(scrollY, [-100, 100], [100, 50]);
  
    const [ref, inView, entry] = useInView({
      threshold: 0.5,
      triggerOnce: false
    });
  
    console.log(entry);
 
    const variants = {
       visible: { opacity: 1, scale: 1, y: 100 },
       hidden: {
         opacity: 0,
         scale: 0.65,
         y: 300
       }
};
     */