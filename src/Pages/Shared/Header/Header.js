import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/b373087eba3a65525faed865e72707ed.jpg'
import { AuthContext } from '../../../Context/Authprovider/Authprovider';

const Header = () => {
  const {user,logout} = useContext(AuthContext);
  const handlelogout = () =>{
    logout();
  }
    const menu = <>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
    {
      user?.email ?
      <>
      {/* <li className='font-semibold'><Link to='/review'>Review</Link></li> */}
      <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
      <li className='font-semibold'><Link to='/review'>Reviews</Link></li>
      <li className='font-semibold'>
        <button onClick={handlelogout} className='btn-primary text-white'>Sign Out</button>
        </li>
      </>
      :
      <li className='font-semibold'><Link to='/login'>Login</Link></li>
    }
    </>
    return (
        <div className="navbar bg-base-100 mb-6 mt-3">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menu}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img className='h-12' src={logo} alt="" />
        <h3>Dental_ <small className='font-bold text-2xl'>Point</small></h3>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {menu}
    </ul>
  </div>
  <div className="navbar-end">
  {/* <button className="btn btn-outline btn-accent ">Phone</button> */}
  </div>
</div>
    );
};

export default Header;