import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
       document.title = `${title} - dental_point`;
    },[title])
};
 export default useTitle;