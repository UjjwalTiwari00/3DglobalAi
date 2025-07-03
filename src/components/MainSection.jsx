import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';

const MainSection = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-r
from-[#dfe2fe]
via-[#849cc7]
to-[#8e98f5]
">
            <Header className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full max-w-7xl" />
            <HeroSection className="pt-24  " />
        </div>
    );
};

export default MainSection;