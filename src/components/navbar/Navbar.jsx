// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import logo1 from '../../../public/logo1.svg'
import './navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //  const [isDropdown, setIsDropdown] = useState(false);

  const handleSelectChange = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
//   const toggleDropdown = () => {
//   setIsDropdown(!isDropdownOpen);
// };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to='/'>
        <h2>Faucets</h2>
      </Link>
      </div>
      <div className="navbar-buttons">
        <div className="navbar-button">
       
          <div className="select">
            <select className="dropdown-button teston" onChange={handleSelectChange}>
              <option value="Arbitrum Rinkeby">
               <div>
                <img  src='../../assets/Arbitrum.svg' alt="arbaa" /> 
                Arbitrum Rinkeby
               </div>
               </option>
              <option value="Avalanche Fuji">Avalanche Fuji</option>
              <option value="BNB Chain Testnet">BNB Chain Testnet</option>
              <option value="Ethereum Rinkeby">Ethereum Rinkeby</option>
              <option value="Fantom Testnet">Fantom Testnet</option>
              <option value="Harmony Testnet">Harmony Testnet</option>
              <option value="POA Network Sok">POA Network Sok</option>
              <option value="Avalanche Fuji">Polygon Mumbai</option>

            </select>
          </div>
           <div> 
              <i className="fa-solid fa-chevron-down option-icon"></i>
           </div>
        </div>
 

                
          <button type="button" id='wallet-btn' className="btn btn-light " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"> <i className="fa-solid fa-wallet wallet-icon"></i> Connect Wallet</button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Connect your wallet</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times" aria-hidden="true"></i></button>
                </div>
                <div className="modal-body">
                  <div className='wallet1'>
                      <div className='wallet-contain'>
                        <img src='../../../public/MetaMask.png'/>
                        <h3>MetaMash</h3>
                      </div>
                      <div>
                      <div className='wallet-contain'>
                        <img src='../../../public/WalletConnect.svg'/>
                        <h3>WalletConnect</h3>
                      </div>
                      <div></div>
                    </div>

                  </div>
                </div>
                
              </div>
            </div>
          </div>
              {/* // user dropdown */}
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-user"></i>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/login">Log In</a>
            <a className="dropdown-item" href="/signup">Sign Up</a>
            <a className="dropdown-item" href="/faq">FAQ</a>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
