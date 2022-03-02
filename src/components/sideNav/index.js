import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { menuItems } from '../../menuItems'

const Sidelist = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  a {
    text-decoration: none;
    color: black;
    :hover {
      color: grey;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #F0EAD6;
    z-index: 1;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s;
    ${'' /* a {
      color: white;
    } */}
  }
`;

const SideNav = ({ open }) => {
    return (
      <Sidelist open={open}>
        {menuItems.map((item, index) => {
            return (
            <li key={index}>
              <Link to={item.link}>
                  {item.title}
              </Link>
            </li>
            )
        })}
      </Sidelist>
    )
  }
  

export default SideNav