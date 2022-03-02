import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    width: 100%;
    height: 250px;
    background-color: #F0EAD6;
`

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <section>
                    <h3>Fortbridge</h3>
                    <p>One Liberty Place</p>
                    <p>1650 Market Street, 36th Floor</p>
                    <p>Philadelphia, PA 19103</p>
                </section>
                <section>
                    <h3>About Us</h3>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </section>
            </div>
            <section>
                <div>
                    Social Media Links
                </div>
                <p>Copyright Stuff</p>
            </section>
        </StyledFooter>
    )    
}

export default Footer