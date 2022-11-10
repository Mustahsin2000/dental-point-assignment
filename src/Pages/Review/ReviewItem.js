import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ReviewItem = ({review}) => {

    const {_id,serviceName,message,price,email,patient,service} = review;
    const [reviewItem,setReviewItem] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=>res.json())
        .then(data=>setReviewItem(data))
    },[service])

    const handleclose = id =>{
         const procced = window.confirm('are you sure you want to cancel this order');
         if(procced){
            fetch(`http://localhost:5000/review/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
         }
    }
    return (
        <tr>
        <th>
          <label>
            <button onClick={()=>handleclose(_id)} className="btn btn-outline btn-ghost">close</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
               {
                reviewItem?.img && 
                <img src={reviewItem.img} alt="Avatar Tailwind CSS Component" />
               }
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50 font-bold">{price}</div>
            </div>
          </div>
        </td>
        <td>
          Patient: {patient}
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>{message}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
    );
};

export default ReviewItem;