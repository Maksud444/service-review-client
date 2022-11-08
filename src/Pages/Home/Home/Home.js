import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Food from '../Foods/Food/Food';
import About from './About';
import Feuture from './Feuture';
import Slider from './Slider';

const Home = () => {
    useTitle('Home')
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