import React from 'react';
import img1 from '../../../assets/images/header/1.jpg';
import img2 from '../../../assets/images/header/2.jpg';
import img3 from '../../../assets/images/header/3.jpg';
import img4 from '../../../assets/images/header/4.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-76 rounded">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='item'>
    <img src={img1} alt="" className="h-full rounded" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-0 top-2/4">
     <h1 className='text-7xl font-semibold text-white'>
        Best Place <br /> For Your <br /> <small className='text-lime-300'>Teeth</small> <br /> <p className='text-2xl text-lime-300 mt-3'>Handle With Care</p>
     </h1><br />
     
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-20 right-5 top-3/4">
    <button className="btn btn-active btn-accent  mr-10 text-white">Appoinment</button>
    <button className="btn btn-outline btn-accent text-white ">Discussion</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-outline  btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-outline  btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <div className='item'>
    <img src={img2} alt="" className="h-full rounded" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-0 top-2/4">
     <h1 className='text-7xl font-semibold text-white'>
        Best Place <br /> For Your <br /> <small className='text-lime-300'>Teeth</small> <br /> <p className='text-2xl text-lime-300 mt-3'>Handle With Care</p>
     </h1><br />
     
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-20 right-5 top-3/4">
    <button className="btn btn-active btn-accent mr-10 text-white">Appoinment</button>
    <button className="btn btn-outline btn-accent text-white ">Discussion</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-outline btn-square btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-outline btn-square btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <div className='item'>
    <img src={img3} alt="" className="h-full rounded" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-0 top-2/4">
     <h1 className='text-7xl font-semibold text-white'>
        Best Place <br /> For Your <br /> <small className='text-lime-300'>Teeth</small> <br /> <p className='text-2xl text-lime-300 mt-3'>Handle With Care</p>
     </h1><br />
     
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-20 right-5 top-3/4">
    <button className="btn btn-active btn-accent mr-10 text-white">Appoinment</button>
    <button className="btn btn-outline btn-accent text-white ">Discussion</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-outline btn-square  btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-outline btn-square btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <div className='item'>
    <img src={img4} alt="" className="h-full rounded" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-0 top-2/4">
     <h1 className='text-7xl font-semibold text-white'>
        Best Place <br /> For Your <br /> <small className='text-lime-300'>Teeth</small> <br /> <p className='text-2xl text-lime-300 mt-3'>Handle With Care</p>
     </h1><br />
     
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-20 right-5 top-3/4">
    <button className="btn btn-active btn-accent mr-10 text-white">Appoinment</button>
    <button className="btn btn-outline btn-accent text-white ">Discussion</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-outline btn-square btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-outline btn-square btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;