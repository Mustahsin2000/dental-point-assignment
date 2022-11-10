import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ServiceDetails = () => {
    const {_id,title,img,description,price} = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user)

    const handlerevieworder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstname.value} ${form.lastname.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName:title,
            price,
            patient:name,
            email,
            phone,
            message
        }

        // if(phone.length > 10){
        //     alert('phone num should ')
        // }

        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'

            },
            body: JSON.stringify(review)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast("Review Done")
                form.reset();
            }
        })
        .catch(err=>console.error(err))

    }

    const addservice = () =>{
        const proceed = window.confirm('added successfully');
        if(proceed){
            toast("Added Successfully!")
        }
    }
    return (
        //details
        <div>
        
            <div>
               <h1 className='text-3xl text-blue-600 font-semibold mb-3'>Service Details</h1>
               <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title text-2xl">Price: ${price}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to='/addservice'><button onClick={addservice} className="btn btn-primary">Add Service</button></Link>
    </div>
  </div>
</div>
</div>

            <div className='my-11'>
                <h1 className='text-3xl text-blue-600 font-semibold mb-3'>User Review:</h1>
          <form onSubmit={handlerevieworder}>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <input name='firstname' type="text" placeholder="FirstName" className="input input-bordered input-info w-full max-w-xs" />
            <input name='lastname' type="text" placeholder="LastName" className="input input-bordered input-info w-full max-w-xs" />
            <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-info w-full max-w-xs" required/>
            <input name='email' defaultValue={user?.email} type="text"  placeholder="Email" className="input input-bordered input-info w-full max-w-xs" readOnly/>
         </div>
         <textarea name='message' className="textarea textarea-primary w-full mt-11 h-32" placeholder="please review my treatment" required></textarea>
         <input  className='btn btn-primary mt-3' type="submit" value="Review" />
          </form>

            </div>
        </div>
    );
};

export default ServiceDetails;