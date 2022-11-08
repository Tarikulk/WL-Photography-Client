import React from 'react';

const HomeCard = ({service}) => {
     const {img, name, price, description} = service;
    return (
        <div className='mt-10'>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} style={{height:"200px"}} className="w-full" alt="Shoes" /></figure>
  <div className="card-body">
    <div className='flex justify-between items-center'>
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    </div>
    <p>Details:{description}</p> 
  </div>
</div>
        </div>
    );
};

export default HomeCard;