import React, { useState, useEffect } from 'react'
import UpperContactBar from './upperContactBar'
import Navbar from './navbar'
import Footer from './footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    
    html {
        font-size: 62.5%;
    }
    body {
        height: 100vh;
        box-sizing: border-box;
        font-size: 1.6rem;
        font-family: Tahoma, Verdana, Segoe, sans-serif;
        // background-color: #e6e6e6;
    }

    .site-wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    .site-content {
        flex-grow: 1;
    }
`

export default function Layout({ children }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    })
    return (
        <React.Fragment>
            <GlobalStyle />
            <section className='site-wrapper'>
                <UpperContactBar />
                <Navbar scroll={scrollPosition} />
                    <main className='site-content'>
                        {children}
                    </main>
                <Footer />
            </section>
        </React.Fragment>
    )
}