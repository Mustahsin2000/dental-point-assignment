import { useEffect, useState } from "react";

const ReviewItem = ({review,handleclose,handlereviewUpdate}) => {

    const {_id,serviceName,message,price,email,patient,service,status} = review;
    const [reviewItem,setReviewItem] = useState({});
//    console.log(handlereviewUpdate)
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=>res.json())
        .then(data=>setReviewItem(data))
    },[service])

 
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

            {/* toogle is started */}
<label for="my-modal-4" class="btn">see review</label>

<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="text-lg font-bold">Reviews</h3>
    <p class="py-4">{message}</p>
  </label>
</label>
            {/* toogle is indeed */}




          <button onClick={()=>handlereviewUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'panding'}</button>
        </th>
      </tr>
     
    );
};

export default ReviewItem;