import React from 'react'
import styled from 'styled-components'
import ApartmentImg from '../../assets/apartments-exterior.jpg'

const StyledMain = styled.main`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

    .mainpage__banner {
        position: relative;
        width: 100%;
    }

    .mainpage__banner img {
        width: 100%;
    }

    .mainpage__banner text {
        font-size: 3rem;
        color: #fff;
        position: absolute;
        top: 5%;
        right: 2%;
        width: 275px;
        h3 {
            font-family: "Bodoni MT", Didot, "Didot LT STD", "Book Antiqua", Garamond, "Times New Roman", serif;
        }
    }

    .mainpage__summary {
        display: flex;
    }
    @media (max-width: 768px) {
        .mainpage__summary {
            display: block;
        }
    }
`

const MainPage = () => {
    return (
        <StyledMain className='mainpage__container'>
            <div className='mainpage__banner'>
                <img src={ApartmentImg} alt='Apartment community from exterior' />
                <text>
                    <h3>Fortbridge</h3>
                    <p>A Collaborative Approach to Real Estate Private Equity</p>
                </text>
            </div>
            <div className='mainpage__summary'>
                <p>Test thing thingthingthingthingthingthingthingthingthing</p>
                <text>Fortbridge Capital Partners is a data-driven real estate private equity firm with a core focus on apartment communities. We’re disciplined buyers that provide our investors direct access to larger real estate investment opportunities with institutional level return expectations. While capital preservation is our paramount goal; we seek cash-flowing assets that not only provide our investors current income on their investment, but also contain significant value-add and management upside.</text>
            </div>
            <div className='mainpage__strategy'>
                <text>Fortbridge’s core mission is to preserve, protect and return capital contributions through market cycles. Multifamily investment is a low risk with moderate return with added the advantage of the today’s imbalance between the strong and growing demand and limited new supply of the rental apartments in suburban United States. We focus on investing in Class B garden style apartment communities in suburban Midwest and Southeast U.S. that will benefit from our value creation process through management upside and physical improvements.</text>
            </div>
            <div className='mainpage__services'>
                Our Services
            </div>
            <div className='mainpage__consult'>
                Let’s discuss about how we can help you achieve your financial goals
                <button>Get Consult</button>
            </div>
            <div />
        </StyledMain>
    )
}

export default MainPage