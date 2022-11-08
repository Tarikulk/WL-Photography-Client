import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData();
    return (
        <div className='mt-10'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={details.img} className='w-full' style={{height:"300px"}} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex justify-between items-center'>
   <h2 className="card-title">Name: {details.name}</h2>
    <h2 className="card-title">Ratings: ${details.ratings}</h2>
    <h2 className="card-title">Price: ${details.price}</h2>
   </div>
    <p>{details.description}</p>
 
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;