import React from 'react'
import Logo from '../../../assets/logo.png'
import './Footer.scss'


function Footer(props) {
    return (
        <footer className="footer">

        <a href="#" className="logo">
        <img    
                    alt='logo'
                    src={Logo}
                />
                <span>
                PokeDexNFT
                </span>
        </a>
        <div className="footer-content">
            <div>
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Download apps</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
            <span className="copyright">© Copyright 2024 by Yurii Shushanskyi</span>
        </div>
        </footer>

    )
  }

  export default Footer;
