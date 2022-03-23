import React from 'react'
import Burger from '../burger'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
    position: ${({ scroll }) => scroll >= 35 ? 'fixed' : 'relative'};
    top: ${({ scroll }) => scroll >= 35 ? 0 : null};
    background-color: #fff;
    z-index: 1;
    width: 100%;
    height: 60px;
    border-bottom: 2px solid #f1f1f1;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    .logo {
        font-family: "Bodoni MT", Didot, "Didot LT STD", "Book Antiqua", Garamond, "Times New Roman", serif;
        font-size: 3.25rem;
        font-weight: 400;
        padding: 3px 0;
        a {
            text-decoration: none;
            color: #000;
        }
    }
`

const Navbar = ({ scroll }) => {
    // console.log(scroll)
    return (
        <Nav scroll={scroll} >
            <span className='logo'>
                <Link to='/'>Fortbridge Capital</Link>
            </span>
            <Burger />
        </Nav>
    )
}

export default Navbar