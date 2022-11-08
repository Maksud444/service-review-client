import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='bg-slate-500'>
            <div className='flex justify-center'>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                            <div>
                                    {user?.photoURL ?
                                        <img className=' w-12 h-12 rounded-full dark:bg-gray-500'
                                            style={{ height: '30px' }} roundedCircle
                                            src={user?.photoURL}></img>
                                        : <></>
                                    }
                                </div>
                                <div>
                                    {
                                        user?.uid ?
                                            <>
                                                <span className='m-2'> {user?.displayName}</span>

                                            </>
                                            :
                                            <>

                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form  className="flex flex-col w-full">
                    <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                    <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 btn btn-outline btn-info">Leave feedback</button>
                </form>
            </div>

        </div>
        </div>
    );
};

export default MyReview;