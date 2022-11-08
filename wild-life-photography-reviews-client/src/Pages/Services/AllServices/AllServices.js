import React, { useEffect, useState } from 'react';

const AllServices = () => {
    const [AllServices, setAllServices] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/allServices")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>This is from AllServices</h1>
        </div>
    );
};

export default AllServices;