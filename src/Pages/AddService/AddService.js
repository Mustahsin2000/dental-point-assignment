import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddService = () => {

    const Navigate = useNavigate();
    const handleaddService = event =>{
        event.preventDefault();
       
        const name= event.target.title.value;
        const price= event.target.price.value;
        const photo= event.target.photo.value;
        const description = event.target.description.value;


        console.log(name,price,photo,description)


        

        const booking = {
            img:photo,
            price: price,
            title:name,
            description:description
           
        }

        // if(phone.length > 10){
        //     alert('phone num should ')
        // }

        fetch('http://localhost:5000/addservice',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'

            },
            body: JSON.stringify(booking)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            
         toast("successfully added");
         if(data){
            Navigate('/')
         }

        })
        .catch(err=>console.error(err))

    }



    return (
       <form onSubmit={handleaddService}>
         <div class="hero bg-base-200">
  <div class="hero-content flex-col ">
   
    <div class="card  w-full max-w-lg shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">price</span>
          </label>
          <input name='price' type="text" placeholder="Price" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Title</span>
          </label>
          <input name='title' type="text" placeholder="Title" class="input input-bordered" />
          
        </div>
        <div class="form-control">
          <label class="label">
            <span  class="label-text">Description</span>
          </label>
          <input name='description' type="text" placeholder="description" class="input input-bordered" />
          
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Image</span>
          </label>
          <input name='photo' type="text" placeholder="photoURL" class="input input-bordered" />
          
        </div>
        <div class="form-control mt-6">
        <input  className='btn btn-primary mt-3' type="submit" value="Add Service" />
        </div>
      </div>
    </div>
  </div>
</div>
       </form>
    );
};

export default AddService;