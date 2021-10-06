import React from 'react'
import styled from 'styled-components'
import Nav from '../Nav/Nav'
import MenuBtn from '../Nav/MenuBtn'
import { useMediaQuery } from 'react-responsive'
import Logo from './Logo'

const Content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 8vh;
    align-items: center;
    background: transparent;
    z-index: 100;
    `;

const Header = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isMobileOrTablet = useMediaQuery({
        query: '(max-width : 768px)'
    })

    return ( 
        <Content>
            <Logo />
         {isDesktopOrLaptop && <Nav />}
         {isMobileOrTablet && <MenuBtn />}
        </Content>
     );
}
 
export default Header;