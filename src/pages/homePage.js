import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase'
import Feelspecial from '../components/FeelSpecial';
import BrandsLove from '../components/BrandsLove';
import CredExperience from '../components/CredExperience';
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
    <CredSecurity />
    </>
    );
}

export default HomePage;