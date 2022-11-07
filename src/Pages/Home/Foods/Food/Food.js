import React, { useEffect, useState } from 'react';

const Food = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() =>{
        fetch('')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return (
        <div>
            <div className='text-center'>
            <h2 className='text-5xl font-semibold'>Our Organic Food</h2>
            </div>
        </div>
    );
};

export default Food;