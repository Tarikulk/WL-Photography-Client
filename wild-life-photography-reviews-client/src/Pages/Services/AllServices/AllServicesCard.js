import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import useTitle from '../../Shared/Hooks/useTitle';

const AllServicesCard = ({service}) => {

    useTitle("All Services")

    const {img, name, price, description, ratings, _id} = service;
    const image = [];
    image.push(img)
    return (
        <div className='mt-20'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl" style={{height:"300px"}}>
  <figure>
  <PhotoProvider>
      <div className='foo'>
      {image.map((item, index) => (    
        <PhotoView key={index} src={item}>
            <img src={img} style={{height:"200px", width:"400px"}} className="w-full" alt="Shoes" />
        </PhotoView>
        ))}
      </div>
    </PhotoProvider>
    </figure>
  <div className="card-body">
  <div className='flex justify-between items-center'>
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    </div>
    <h1>
    {
        description.length > 100 ? 
        <>{description.slice(0, 100) + "..."}<Link to={`/allServicesDetail/${_id}`}><span className='
        text-red-500'>See Details</span></Link></>
        :
        description
    }    
    </h1> 
  </div>
</div>
        </div>
    );
};

export default AllServicesCard;