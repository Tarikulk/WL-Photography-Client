import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/allServices")
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               allServices.map(service => <AllServicesCard
               key={service._id}
               service={service}
               ></AllServicesCard>)    
            }
        </div>
    );
};

export default AllServices;