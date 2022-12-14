import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const ServiceCard = ({service}) => {
    
    const {_id,price,title,description,img} = service;
    return (
        <div className="card w-75 bg-base-100 shadow-xl">
  <PhotoProvider>
    <PhotoView src={img}>
    <figure><img src={img} alt="Shoes" /></figure>
    </PhotoView>
  </PhotoProvider>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">{price}</h2>
    
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}><button className="btn btn-primary">view Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;