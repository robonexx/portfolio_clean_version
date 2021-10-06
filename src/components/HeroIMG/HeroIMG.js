import React from 'react'
import styled from 'styled-components'
import img from '../../assets/img/profile.png'


const ImgContainer = styled.div`
width: 100%;
height: 100%;
`
const Img = styled.img`
width: 600px;
height: 800px;
object-fit: contain;
z-index: 3;

@media (max-width: 768px) {
    width: 320px;
    height: 600px;
}
`

const Hero = () => {
    

    return (
        
            <ImgContainer>
                <Img src={img} alt="" />
            </ImgContainer>
            
     );
}
 
export default Hero;