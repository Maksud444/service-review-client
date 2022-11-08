import React, { useEffect, useState } from 'react';
import useTitle from '../../../../Hooks/useTitle';
import AllFoodCard from './AllFoodCard';

const AllFood = () => {
     useTitle('AllFoods')
    const [allFoods, setAllFoods] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/allfood')
        .then(res => res.json())
        .then(data => setAllFoods(data))
    },[])
    return (
        <div>
            
            <h2 className='text-5xl font-semibold text-center mb-4'>Our All Organic Food</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-3'>
                {
                   allFoods.map(allFd => <AllFoodCard
                   key={allFd._id}
                   allFd={allFd}
                   ></AllFoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFood;