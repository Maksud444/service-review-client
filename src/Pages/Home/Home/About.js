import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const About = () => {
    useTitle('Home');
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src="https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src="https://plus.unsplash.com/premium_photo-1663926031945-8d0beb97ebd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About apples</p>
                    <h1 className="my-5 text-5xl font-bold">
                    Apples are a popular fruit. They contain antioxidants, vitamins, dietary fiber.</h1>
                    <p className="py-6">Apples come in a variety of shapes, colors, and flavors. They provide a range of nutrients that can benefit many aspects of a person’s health. </p>
                    <p className="py-6">Eating a diet rich in a variety of fruits and vegetables, including apples, may help reduce the risk of several conditions, </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;