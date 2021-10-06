import styled, { keyframes } from 'styled-components'


const AboutPage = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background: ${({theme}) => theme.background};
align-items: center;
justify-content: center;

h1 {
  margin: 5rem auto;
  color: #fff;
}
`



// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Circle = styled.div`
  width: 200px;
height: 200px;
background: linear-gradient(120deg, tomato, peachpuff);
border-radius: 50%;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
 div {
  height: 100px;
  width: 100px;
  background: linear-gradient(to bottom, black, white);
  border-radius: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
 span {
  height: 80px;
  width: 80px;
  background: linear-gradient(to bottom, lime, aqua);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 5rem;
  color: red;
  font-weight: bolder;
}
`

const About = () => {
    return (
        <AboutPage>
        {/* <Rotate><Circle><div><span>X</span></div></Circle> </Rotate> */}
        <h1>about</h1>
            </AboutPage>
     );
}
 
export default About;
