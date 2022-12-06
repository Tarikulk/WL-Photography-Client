import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';
import useTitle from '../../Shared/Hooks/useTitle';
import Section from '../../Shared/Section/Section';
import HomeCard from './HomeCard';

const Home = () => {

    useTitle("Home")

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        fetch("https://wild-life-photography-reviews-server.vercel.app/services")
        .then(res => res.json())
        .then(data =>  {
          setLoading(true)
          return  setServices(data)
        })
    }, [])




    return (
        <div>
            <Banner></Banner>
           <div>
           {  loading ?
               <div  className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
               {
               services.map(service => <HomeCard
               key={service._id}
               service={service}
               ></HomeCard>)
                }
               </div>
               :
               <div className='flex justify-center items-center sm:h-60 md:h-64 lg:h-96'> 
                 <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-400"></div>
               </div>
            }
           </div>
           <div className='w-full text-center my-10'>
          <Link to="/services"><button className="btn btn-wide bg-green-500 text-black font-bold">See All</button></Link>
           </div>
            <Section></Section>
        </div>
    );
};

export default Home;