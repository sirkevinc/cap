import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledFooter = styled.footer`
    width: 100%;
    height: 275px;
    background-color: #F0EAD6;
    padding: 25px;
    .footer__main {
        display: flex;
        width: 60%;
        justify-content: space-between;
    }
    ul {
        display: flex;
        flex-direction: column;
        
    }
    a {
        color: black;
    }
    .footer__socials {
        padding: 55px 0;
        text-align: center;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer__main">
                <section>
                    <h3>Fortbridge</h3>
                    <h3>Capital</h3>
                    <h3>Partners</h3>
                </section>
                <section className="footer__about">
                    <h3>About Us</h3>
                    <ul>
                        <Link to="/services">Services</Link>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </ul>
                </section>
                <section>
                    <h3>Fortbridge</h3>
                    <p>One Liberty Place</p>
                    <p>1650 Market Street, 36th Floor</p>
                    <p>Philadelphia, PA 19103</p>
                </section>
            </div>
            <section className="footer__socials">
                <div>
                    Social Media Links
                </div>
                <p> © 1996-2021 Fortbridge Capital, Inc.</p>
            </section>
        </StyledFooter>
    )    
}

export default Footer