import React from 'react';
import { Link } from 'react-router-dom';

const AllServicesCard = ({service}) => {
    const {img, name, price, description, ratings, _id} = service;
    return (
        <div className='mt-20'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl" style={{height:"300px"}}>
  <figure><img src={img} style={{height:"200px"}} className="w-full" alt="Shoes" /></figure>
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