import React from 'react';

const ServiceCard = ({service}) => {
    
    const {_id,price,title,description,img} = service;
    return (
        <div className="card w-75 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">{price}</h2>
    
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">view Details</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;