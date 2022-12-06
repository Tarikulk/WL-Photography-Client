import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        fetch("https://wild-life-photography-reviews-server.vercel.app/allServices")
        .then(res => res.json())
        .then(data => {
            setLoading(true)
           return setAllServices(data)
        })
    }, [])
    return (
        <div>
            { loading ?
              <div  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                     allServices.map(service => <AllServicesCard
                        key={service._id}
                        service={service}
                        ></AllServicesCard>)  
                }
              </div>  
                :
                <div className='flex justify-center items-center sm:h-60 md:h-64 lg:h-96'> 
                 <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-400"></div>
               </div>
            }
        </div>
    );
};

export default AllServices;