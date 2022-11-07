import React, { useEffect, useState } from 'react';

const Food = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return (
        <div>
            <div className='text-center'>
            <h2 className='text-5xl font-semibold'>Our Organic Food</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   
                }
            </div>
        </div>
    );
};

export default Food;