import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])
    return (
        <div className='my-11'>
            <p className='text-3xl  font-semibold text-blue-500 mb-11'>Services Provided</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <Link to='/services'><button className='btn btn-outline btn-accent font-bold my-11 px-11 mx-96  '>See_ALL</button></Link>
        </div>
    );
    
};

export default Services;