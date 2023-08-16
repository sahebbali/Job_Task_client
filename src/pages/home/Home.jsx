// eslint-disable-next-line no-unused-vars
import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Form from '../../components/form/Form'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='section'>
         <Navbar />
    <div className='home'>
      <div>
         <div className='notice-baner'>
            <div className='notic-container'>
                <p>Notice here</p>
            </div>
         </div>
         <div className='container'>
            <div className='main-container'>
              <div className='title'>
                <h2> Request testnet LINK</h2>
                <p>Get testnet LINK for an account on one of the supported blockchain testnets so you can <br/> create and test your own oracle and Chainlinked smart contract</p>
              </div>
              
              <Form />

            </div>
         </div>
      </div>

    </div>
         <Footer />    
    </div>
  )
}

export default Home
