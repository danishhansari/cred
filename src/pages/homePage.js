import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase'
import Feelspecial from '../components/FeelSpecial';
import CredExperience from '../components/CredExperience';
const HomePage = () => {
    return (
    <>
    <Header />
    <HeroSection />   
    <ProductShowcase />
    <Feelspecial />
    <CredExperience />
    </>
    );
}

export default HomePage;