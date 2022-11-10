import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import ReviewItem from './ReviewItem';

const Review = () => {
    const {user} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);

    

    useEffect(()=>{
       fetch(`http://localhost:5000/review?email=${user?.email}`)
       .then(res=>res.json())
       .then(data=>setReviews(data))
    },[user?.email])


    return (
        <div>
            <h2 className='text-bold text-blue-600 text-3xl'>Reviews</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
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
                ></ReviewItem>)
            }
        
    
   
    </tbody>
  </table>
</div>
 </div>
    );
};

export default Review;