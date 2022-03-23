import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import FbIcon from '../../assets/svg/fb.svg'
import LinkedinIcon from '../../assets/svg/linkedin.svg'
import TwitterIcon from '../../assets/svg/twitter.svg'
import InstagramIcon from '../../assets/svg/linkedin.svg'

const UpperContactStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    .upper__links {
        display: flex;
        width: 200px;
        justify-content: space-between;
        a {
            text-decoration: none;
            color: black;
        }
    }
    .upper__icon {
        width: 2.5rem;
        margin: 0 2px;
    }
`

const UpperContactBar = () => {
    return (
        <UpperContactStyled>
            <section className='upper__links'>
                <Link to='/investors'>Investors</Link>
                <Link to='/location'>Location</Link>
                <Link to='/contact'>Contact</Link>
            </section>
            <section className='upper__socials'>
                <a href='http://facebook.com'><FbIcon className='upper__icon' /></a>
                <a href='http://linkedin.com'><LinkedinIcon className='upper__icon'/></a>
                <a href='http://twitter.com'><TwitterIcon className='upper__icon'/></a>
                <a href='http://instagram.com'><InstagramIcon className='upper__icon'/></a>
            </section>
        </UpperContactStyled>
    )
}

export default UpperContactBar