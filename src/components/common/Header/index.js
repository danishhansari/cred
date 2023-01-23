import React from 'react';
import './header.css'
const header = () => {
    return (
        <div className="mobile-menu-wrapper">
            <div className="flex max-width header">
                <img className="header-logo" src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="CRed logo" />
                <div className="only-mobile mobile-menu-button-wrapper">
                    <button class="hamburger hamburger--elastic" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div className='non-mobile flex'>
                    <div className='header-nav-item'>credit score check</div>
                    <div className='header-nav-item'>CRED pay</div>
                </div>
            </div>
        </div>
    )
}
export default header;
