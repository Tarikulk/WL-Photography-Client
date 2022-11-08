import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';
import Section from '../../Shared/Section/Section';
import HomeCard from './HomeCard';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data =>  setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
               services.map(service => <HomeCard
               key={service._id}
               service={service}
               ></HomeCard>)
            }
           </div>
           <div className='w-full text-center my-10'>
          <Link to="/services"><button className="btn btn-wide btn-primary">See All</button></Link>
           </div>
            <Section></Section>
        </div>
    );
};

export default Home;