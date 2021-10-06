import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Navbar = styled.div`
position: fixed;
margin: 0;
top: 0;
left: 0;
width: 100vw;
height: 8vh;
background: transparent;
z-index: 100;
overflow-x: hidden;
padding: 0.25rem;

@media (min-width: 768px) {
    height: 8vh;
    background: transparent;
  }
`;

const NavUl = styled.div`
    position: absolute;
    top: 0.25rem;
    right: 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0 4rem;
    padding-block: 0.5rem;

  }
    

  li {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        
        grid-gap: 1.2rem;
       padding: 0.5rem;
        

        &::after {
            border-right: solid 15px transparent;
             border-left: solid  15px ${({ theme }) => theme.text};;
            border-top: solid transparent 15px;
            border-bottom: solid transparent 15px;
            transform: translateX(-70%) translateY(-10%);
            position: absolute;
            z-index: -1;
            content: "";
            display: block;
           
    }
    
    a {
        font-size: 1.8rem;
        font-family: 'Darker Grotesque', sans-serif;
        text-decoration: none;
        line-height: 1;
        color: ${({ theme }) => theme.text};
        
        small {
            font-size: .7rem;
            display: block;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-weight: 200;
            text-align: right;
            color: ${({ theme }) => theme.text};
        }
    }

    &:hover {
        a {
    transform: scale(1.1);
    color: tomato;
        }
        small {
            color: rgba(180,180,180);
        }
        &::after {
            border-left: solid 15px orange;
        }
}

`






const Nav = () => {
    /* const { ref } = useResize() */
    
    return (
        <>
            <Navbar>
                <NavUl /* ref={ref} */>
                    <li>
                        <Link to="/">
                            Home
                            <small>where we sleep... Zzz</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                            <small>Me? Read here...</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Projects
                            <small>What I've been up to</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                            <small>Get in touch... E.T phone home...</small>
                        </Link>
                    </li>
                </NavUl>
            </Navbar>

        </>
     );
}
 
export default Nav;