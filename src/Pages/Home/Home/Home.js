import React from 'react';
import Food from '../Foods/Food/Food';
import About from './About';
import Feuture from './Feuture';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Feuture></Feuture>
            <Food></Food>
        </div>
    );
};

export default Home;