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
            <div className='logo-wrap' >
            <a href="#">
            <img
                    src={Logo}
                    alt='logo'
                    className='logo'
                />
                <div className='logo-name' >
                    PokeDexNFT
                </div>
            </a>

            </div>
            <div className='' >
            </div>
            <button 
                className='connect-button'
                onClick={() => {alert('COMING SOON')}}
            >
                <img
                    src={MetamaskLogo}
                    alt='metamask_logo'
                    className='logo-img'
                />
                Connect Wallet
                </button>

        </header>

    )
  }

  export default Header;
