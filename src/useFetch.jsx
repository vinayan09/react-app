

import Api from "./Api"
import { useEffect,useState } from "react";

const useFetch=(url)=>{
    const [data, setData] = useState("")
    useEffect(()=>{

        Api.get(`${url}`).then((res)=>{
          setData(res.data)  
        }).catch((err)=>{
            console.log("Error");
        })
    },[url])
    return {data};
}

export default useFetch;