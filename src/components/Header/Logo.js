import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
    position: absolute;
    left: 10%;
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 800;
    letter-spacing: 2px;
    font-size: 4em;
    text-decoration: none;
    color: ${({ theme }) => theme.text};


@media (max-width: 768px) {
    width: 100%;
    margin-top: 5vh;
    text-align: center;
    font-size: 2rem;
}
`;

const Logo = () => {
    return ( 
        <>
            <Title>
                   ROBERT WÄGAR
            </Title>
            
        </>
     );
}
 
export default Logo;