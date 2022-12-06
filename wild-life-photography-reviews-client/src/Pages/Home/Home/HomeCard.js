import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const HomeCard = ({service}) => {
     const {img, name, price, description, _id} = service;
     const image = [];
    image.push(img)
    return (
        <div>
        <div className="card card-compact w-96 bg-green-500 text-black shadow-xl mt-10">
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
    {
        description.length > 100 ? 
        <>{description.slice(0, 100) + "..."}<Link to={`allServicesDetail/${_id}`}><span className='
        text-white'>See Details...</span></Link></>
        :
        description
    }  
  </div>
</div> 
        </div>
    );
};

export default HomeCard;