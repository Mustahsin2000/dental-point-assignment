import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    useTitle('Register')
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(err => console.error(err))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }
    return (
        <div className="hero w-full my-20">
        <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register!</h1>
      <p className="py-6">The Register page allows a user to gain access to an application by entering their username and password or by authenticating using a social media login.</p>
    </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  p-3">
          <h1 className="text-3xl text-center font-bold">Register</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
              </div>
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
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary text-white" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='text-center'>Already have an account <Link className='text-blue-600 font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;