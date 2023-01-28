import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase'
import Feelspecial from '../components/FeelSpecial';
const HomePage = () => {
    return (
    <>
    <Header />
    <HeroSection />   
    <ProductShowcase />
    <Feelspecial />
    </>
    );
}

export default HomePage;