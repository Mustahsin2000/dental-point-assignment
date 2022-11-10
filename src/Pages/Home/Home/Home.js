import React from 'react';
import Equipment from '../../Equipment/Equipment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import AboutMe from './AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Equipment></Equipment>
        </div>
    );
};

export default Home;