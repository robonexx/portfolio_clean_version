import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const closeBtn = <FontAwesomeIcon icon={faTimes} />
const openBtn = <FontAwesomeIcon icon={faBars} /> 

const Btn = styled.div`
  width: 2em;
  height: 2em;
  position: fixed;
  right: 1em;
  top: 1em;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  color: white;
  
  .open {
      position: absolute;
      font-size: 1.5rem;
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      transform: ${({isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      transition: transform 0.5s ease, opacity 0.3s ease;
  }

  .close {
    position: absolute;
    font-size: 1.5rem;
    transition: transform 0.5s ease, opacity 0.4s ease;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transform: ${({isOpen }) => (!isOpen ? "rotate(-45deg)" : "rotate(0)")};

  }
`;

const MenuBtn = () =>{
  const [isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <Btn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div className="open">{openBtn}</div>
        <div className="close">{closeBtn}</div>
      </Btn>
      <HamburgerMenu isOpen={isOpen} />
    </>
  );
}

export default MenuBtn;
