import React from 'react';
import logo from '../../../assets/b373087eba3a65525faed865e72707ed.jpg'  

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <div> 
    <img className='h-12 bg-base-300 rounded-full' src={logo} alt="" />
    <p>Dental_Point</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a href="/" className="link link-hover">Branding</a> 
    <a href="/" className="link link-hover">Design</a> 
    <a href="/" className="link link-hover">Marketing</a> 
    <a href="/" className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a href="/" className="link link-hover">About us</a> 
    <a href="/" className="link link-hover">Contact</a> 
    <a href="/" className="link link-hover">Jobs</a> 
    <a href="/" className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a href="/" className="link link-hover">Terms of use</a> 
    <a href="/" className="link link-hover">Privacy policy</a> 
    <a href="/" className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;