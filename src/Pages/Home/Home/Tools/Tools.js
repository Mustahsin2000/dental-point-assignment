import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Toolscard from '../../Home/Tools/Toolscard';
const Tools = () => {
    const [Tools,setTools] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setTools(data))
    }, [])
    return (
        <div className='my-11'>
            <p className='text-3xl  font-semibold text-blue-500 mb-11'>Services Provided</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    Tools.slice(0,3).map(tool=><Toolscard key={tool._id} tool={tool}></Toolscard>)
                }
            </div>
          
        </div>
    );
};

export default Tools;