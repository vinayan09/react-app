import React, { useEffect, useState } from "react";
import "./RowPost.css";
import Youtube from "react-youtube"
import useFetch from "../../useFetch";
import { useSelector } from "react-redux";
import { API_KEY } from "../../Constants";
import Api from "../../Api"

const RowPost = ({title,urls,isSmall}) => {
  const [urlId, setUrlId] = useState("")
  // const [datas, setDatas] = useState("")
  const { url } = useSelector((state) => state.home);
  // const [netflix, setNetflix] = useState("")
  const { data } = useFetch(`${urls}`);
  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    },
  }
  const handleVideo=(id)=>{
    Api.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res?.data?.results?.length!==0){
        setUrlId(res?.data?.results[0])
      }else{
        console.log("Array Empty");
      }
    })
  }
  return (
    <div className="row-posters">
      <h2>{title}</h2>
      <div className="posters">
        {data?.results?.map((item) => {
          const path = url?.poster + item?.poster_path;
          return <img onClick={()=>handleVideo(item?.id)} key={item.id} className={isSmall ? "smallPoster":"poster"} src={path} alt="" />;
        })}
      </div>
  { urlId &&   <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
};

export default RowPost;
