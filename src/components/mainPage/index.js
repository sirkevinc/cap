import React from 'react'
import styled from 'styled-components'
import ApartmentImg from '../../assets/apartments-exterior.jpg'
import BusinessImg from '../../assets/business.jpg'

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

    .mainpage__subbanner {
        display: flex;
        flex-direction: row;
        width: 90%;
        height: 250px;
        margin: 0 auto;
        padding: 30px 0;
    }

    .subbanner__info {
        padding: 10px 15px;
        h3 {
            text-align: center;
        }
    }

    .mainpage__summary {
        display: flex;
        padding: 5px;
    }

    .mainpage__summary .background_square {
        width: 300px;
        height: 225px;
        background: grey;
        position: absolute;
        left: 150px;
        margin-top: 10px;
        z-index: -1;
    }

    .mainpage__summary img{
        width: 350px;
        height: 225px;
    }

    .mainpage__summary text {
        padding: 0 10px;
        margin-top: 10px;
    }

    @media (max-width: 768px) {
        .mainpage__summary {
            display: block;
        }
        .mainpage__summary img {
            display: none;
        }
        .mainpage__summary text {
            padding: 0;
        }
        .background_square {
            display: none;
        }
    }

    .mainpage__mission {
        padding: 5px;
    }

    .dot {
        height: 50px;
        width: 50px;
        background-color: #e6e6e6;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        z-index: -1;
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
            <section className='mainpage__subbanner'>
                <div className='subbanner__info'>
                    <h3>Approach</h3>
                    <span class="dot" />
                    <p>Ascentris’ approach enables it to create a diversified portfolio that maximizes profits with a long-term perspective and short-term potential.</p>
                </div>
                <div className='subbanner__info'>
                    <h3>Investments</h3>
                    <span class="dot" />
                    <p>Ascentris is a mid-market value investor, targeting Office, Multifamily, Retail and Industrial properties with both short-term and long-term investment strategies.</p>
                </div>
                <div className='subbanner__info'>
                    <h3>Culture</h3>
                    <span class="dot" />
                    <p>When you work with Fortbridge, you feel the energy, you see the results, and you understand what makes our company truly exceptional.</p>
                </div>
            </section>
            <section className='mainpage__summary'>
                <img src={BusinessImg} alt='Laptop at business meeting' />
                <text>Fortbridge Capital Partners is a data-driven real estate private equity firm with a core focus on apartment communities. We’re disciplined buyers that provide our investors direct access to larger real estate investment opportunities with institutional level return expectations. While capital preservation is our paramount goal; we seek cash-flowing assets that not only provide our investors current income on their investment, but also contain significant value-add and management upside.</text>
            </section>
            <section className='mainpage__mission'>
                <h3>Our Mission</h3>
                <text>Fortbridge’s core mission is to preserve, protect and return capital contributions through market cycles. Multifamily investment is a low risk with moderate return with added the advantage of the today’s imbalance between the strong and growing demand and limited new supply of the rental apartments in suburban United States. We focus on investing in Class B garden style apartment communities in suburban Midwest and Southeast U.S. that will benefit from our value creation process through management upside and physical improvements.</text>
            </section>
            <section className='mainpage__services'>
                <h3>Our Services</h3>
            </section>
            <section className='mainpage__consult'>
                Let’s discuss about how we can help you achieve your financial goals
                <button>Get Consult</button>
            </section>
            <div />
        </StyledMain>
    )
}

export default MainPage