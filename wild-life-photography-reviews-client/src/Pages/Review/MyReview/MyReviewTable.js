import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewTable = ({reviews, handleDeleteReview, handleUpdateReview}) => {
    const {review, name, servicesId, _id} = reviews;
    console.log(reviews)

    const [services, setServices] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/services/${servicesId}`)
        .then(res => res.json())
        .then(data =>  setServices(data))
    }, [servicesId])
 
    return (
        <div className='my-20'>
            <div className="card w-96 bg-green-400   text-black">
            <figure><img src={services?.img} className="w-full" style={{height:"200px"}} alt="Shoes" /></figure>
  <div className="card-body items-center text-center">
    <div className='mx-auto'>
    <h2 className="card-title w-full">Service Name: {services?.name}</h2>
    </div>
    <div>
        <h1><span className='font-bold'>UserName: </span>{name}</h1>
    </div>
    <p><span className='font-bold'>Review: </span>{review}</p>
    <div className="card-actions flex justify-between items-center w-full">
      <Link to={`/updateReviews/${_id}`}><button onClick={() => handleUpdateReview(_id)} className="btn btn-primary">Edit</button></Link>
      <button onClick={() => handleDeleteReview(_id)}  className="btn btn-ghost">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyReviewTable;