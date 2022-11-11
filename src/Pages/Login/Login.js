import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
  const {login} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useTitle('Login');

  const from = location.state?.from?.pathname || '/';
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
         
        login(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);

          const currentUser = {
            email:user.email
          }
          console.log(currentUser);

          //get jwt token
          fetch('http://localhost:5000/jwt',{
            method:'POST',
            headers:{
              'content-type' : 'application/json'
            },
            body:JSON.stringify(currentUser)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            localStorage.setItem('token',data.token);
          })

          // navigate(from,{replace:true})
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="hero w-full my-20">
        <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">The login page allows a user to gain access to an application by entering their username and password or by authenticating using a social media login.</p>
    </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  p-3">
          <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='text-center'>New to dental point <Link className='text-blue-600 font-bold' to='/signup'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;