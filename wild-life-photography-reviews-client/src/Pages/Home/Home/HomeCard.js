import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({service}) => {
     const {img, name, price, description, _id} = service;
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
  <figure>
    <img src={img} style={{height:"200px"}} className="w-full" alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between items-center'>
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    </div>
    {
        description.length > 100 ? 
        <>{description.slice(0, 100) + "..."}<Link to={`/allServicesDetail/${_id}`}><span className='
        text-red-500'>See Details</span></Link></>
        :
        description
    }  
  </div>
</div> 
        </div>
    );
};

export default HomeCard;