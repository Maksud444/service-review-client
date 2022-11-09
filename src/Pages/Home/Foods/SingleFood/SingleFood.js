import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../../Hooks/useTitle';
import MyReview from '../../../Review/MyReview/MyReview';
import ReviewItem from '../../../Review/ReviewItem/ReviewItem';

const SingleFood = () => {
    const {user} = useContext(AuthContext);
    useTitle('Single-Food')
    const { img, name, price, description } = useLoaderData()
    return (
        <div className='flex justify-center'>
            <div className="card card-compact  shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl text-center">{name}</h2>
                    <p className='text-3xl text-center'>${price}</p>
                    <p>{description}</p>
                </div>
                <div className='flex justify-center'>
                {
                        user?.email ?
                         
                        <ReviewItem></ReviewItem>
                            : <Link className='btn btn-info hover:rounded-lg"' to='/login'>Please login to add a review</Link>
                    }
                </div>
             
            </div>
        </div>
    );
};

export default SingleFood