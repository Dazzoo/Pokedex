import React from 'react'
import Logo from '../../../assets/logo.png'
import MetamaskLogo from '../../../assets/MetaMask_Fox.png'
import './Header.scss'


function Header(props) {
    return (
        <header className="header">
            {/* <button className='connect-button' onClick={() => {}}>
                Login with Metamask 
                <img
                    src={MetamaskLogo}
                    alt='metamask_logo'
                    width={'50px'}
                />
            </button>; */}
            <div className='logo' >
                logo
            </div>
            <button className='connect-button' >
                <img
                    src={MetamaskLogo}
                    alt='metamask_logo'
                    width={'50px'}
                />
                Login with Metamask
                </button>

        </header>

    )
  }

  export default Header;
