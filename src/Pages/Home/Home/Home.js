import React from 'react';
import { Link } from 'react-router-dom';
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
       <div className='flex justify-center'>
       <Link to='/allfood'>
      <button className="btn btn-primary">See All</button>
      </Link>
       </div>
        </div>
    );
};

export default Home;