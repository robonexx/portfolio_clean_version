import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = styled.ul`
  position: fixed;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.98);
  transform: ${({isOpen }) => (isOpen ? "translateX(0%) translateY(0%)" : "translateX(100%) translateY(-100%)")};
  margin: 0;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  text-align: center;
  transition: transform 0.4s ease;
  z-index: 10;

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
  }

  a {

  margin-bottom: 30px;
  text-decoration: none;
  color: white;
  position: relative;
  height: 2em;
  width: 10em;
  font-size: 1em;
  color: #fafafa;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 6px;
  align-items: center;
  text-align: center;
  outline: 1px solid #fafafa;
  outline-offset: 2px;
  transform: ${({isOpen }) => (isOpen ? "rotate(10deg) translateX(20%)" : "rotate(-30deg)")};
  transition: outline-offset 0.2s ease, transform 0.3s ease-in-out;
}

a:nth-of-type(4n+1) {
  background: #282828;
  border: 1px solid #0A6C74;
  transition-delay: 0.1s;  
}
a:nth-of-type(4n+2) {
  background: #0E7C86;
  border: 1px solid #0E7C86;
  margin-left: 2em;
  transition-delay: 0.2s;
}
a:nth-of-type(4n+3) {
  background: #14919B;
  border: 1px solid  #14919B;
  margin-left: 4em;
  transition-delay: 0.3s;
}
a:nth-of-type(4n+4) {
  background: #2CB1BC;
  border: 1px solid #2CB1BC;
  margin-left: 6em;
  transition-delay: 0.4s;
}

a:hover,
a:focus {
  outline-offset: -3px;
  outline-width: 1px;
}
`;

function HamburgerMenu({ isOpen }) {


  return (

    <Menu isOpen={isOpen}  >
                <div className="Ul_li">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                </div>
    </Menu>
  );
}

export default HamburgerMenu;
