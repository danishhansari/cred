import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase'
import Feelspecial from '../components/FeelSpecial';
import BrandsLove from '../components/BrandsLove';
import CredExperience from '../components/CredExperience';
import WindowPeak from '../components/WindowPeak';
import CredSecurity from '../components/CredSecurity';
const HomePage = () => {
    return (
    <>
    <Header />
    <HeroSection />   
    <ProductShowcase />
    <Feelspecial />
    <BrandsLove />
    <CredExperience />
    <div className='non-mobile'>
    <WindowPeak />
    </div>
    <CredSecurity />
    </>
    );
}

export default HomePage;