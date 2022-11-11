import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useTitle('Services')
    useEffect(()=>{
        fetch('http://localhost:5000/services')
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
            
        </div>
    );
    
};

export default Services;