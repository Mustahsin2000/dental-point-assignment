import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import useTitle from '../../Hooks/useTitle';
import ReviewItem from './ReviewItem';

const Review = () => {
    const {user} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);
    useTitle('Review')


    useEffect(()=>{
       fetch(`http://localhost:5000/review?email=${user?.email}`)
       .then(res=>res.json())
       .then(data=>setReviews(data))
    },[user?.email])

    const handleclose = id =>{
        const procced = window.confirm('are you sure you want to cancel this review');
        if(procced){
           fetch(`http://localhost:5000/review/${id}`,{
               method:'DELETE'
           })
           .then(res=>res.json())
           .then(data=>{
               console.log(data);
               if(data.deletedCount > 0){
                toast('deleted successfully');
                const remaining = reviews.filter(rev=>rev._id !== id);
                setReviews(remaining);
               }
           })
        }
   }

   const handlereviewUpdate = id =>{
             fetch(`http://localhost:5000/review/${id}`,{
                method: 'PATCH',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({status: 'Approved'})
             })
             .then(res=>res.json())
             .then(data=>{
                console.log(data);
                if(data.modifiedCount > 0){
                const remaining = reviews.filter(rev=>rev._id !== id);
                const approved = reviews.find(rev=>rev._id === id);
                approved.status = 'Edited';
                const newreview = [approved,...remaining];
                setReviews(newreview);
                }
                
             })
   }


    return (
        <div>
            <h2 className='text-bold text-blue-600 text-3xl mb-3 '>Reviews</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead >
      <tr className='bg-green-600'>
        <th>
         
        </th>
        <th>Service</th>
        <th>Patient</th>
        <th>Review</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        
            {
                reviews.map(review=><ReviewItem 
                key={review._id} review={review}
                handleclose={handleclose}
                handlereviewUpdate= {handlereviewUpdate}
                ></ReviewItem>)
            }
        
    
   
    </tbody>
  </table>
</div>
 </div>
    );
};

export default Review;