import React from 'react';
import { Link } from 'react-router-dom';

import Equipment from '../../Equipment/Equipment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import AboutMe from './AboutMe/AboutMe';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Tools></Tools>
            <Link to='/services'><button className='btn btn-outline btn-accent font-bold my-11 px-11 mx-96  '>See_ALL</button></Link>
            <Equipment></Equipment>
        </div>
    );
};

export default Home;