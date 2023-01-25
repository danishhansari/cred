import React from 'react';
import './productShowcase.css'
const ProductShowcase = () => {
    return (
        <div className='product-showcase scale-up-bottom'>
            <div className="showcase-wrapper">
                <img 
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
                className="showcase-ui showcase-mockup-1"
                alt="Mobile cred" />
                <img 
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
                className="showcase-ui showcase-mockup-2"
                alt="Mobile cred" />
                <img 
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
                className="showcase-ui showcase-mockup-3"
                alt="Mobile cred" />
                <img 
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
                className="showcase-ui showcase-mockup-4"
                alt="Mobile cred" />
                <img 
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
                className="showcase-ui showcase-mockup-5"
                alt="Mobile cred" />
            </div>
        </div>
    )
}
export default ProductShowcase;