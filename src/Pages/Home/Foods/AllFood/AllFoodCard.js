import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../../Hooks/useTitle';

const AllFoodCard = ({allFd}) => {
    useTitle('AllFood')
    const {_id,img,name,price,description} = allFd;
    return (
        <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
   <PhotoProvider>
    <PhotoView src={img}>
    <figure><img src={img} alt="Shoes" /></figure>
    </PhotoView>
   
   </PhotoProvider>
  
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='font-bold text-xl'>${price}</p>
    <p>
                        {
                            description.length > 100 ?
                                <>{description.slice(0, 100) + '.....'}  </>
                                :
                                description
                        }
                    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">view details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllFoodCard;