import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import MyReviewRow from './MyreviewRow';



const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);


    const handleDelete = id =>{
        const proceed = window.confirm('Are You sure Delete Your Review');
    
        if(proceed){
            fetch(`http://localhost:5000/review/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted your review successfully');
                    const remaining = reviews.filter(rvw => rvw._id !== id);
                    setReviews(remaining);
                }
               
            })
        }
      }
      

    return (
        <div>
               {
                        reviews?.length > 0 ?
                         
                        <h1 className='text-2xl text-center'>See Your All Reviews {reviews.length}</h1>
                        : 
                        <h2 className='text-2xl text-center'>No reviews were added</h2>
                    }
            
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            reviews.map(review => <MyReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></MyReviewRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReview;