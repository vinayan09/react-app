import React, { useEffect,useState } from "react";
import "./Main.css";
import { BsPlayFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import RowPost from "../RowPost/RowPost";
import useFetch from "../../useFetch";
import {useSelector}from "react-redux"
import { API_KEY, Originals } from "../../Constants";

const Main = () => {
  const [background, setBackground] = useState("")
  const {url}=useSelector((state)=>state.home)
  const arrayNum=Math.floor(Math.random()*20)
  // console.log(arrayNum);
  const {data}=useFetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
  useEffect(()=>{
    const bg=url?.backdrop+data?.results?.[arrayNum].backdrop_path;
    setBackground(bg)
    // console.log(background);
  },[data])
  return (
    <div style={{backgroundImage:`url(${background})`}} className="banner">
      <div className="content">
        <div className="title">{data?.results?.[arrayNum]?.title}</div>
        <div className="des">
         {data?.results?.[arrayNum]?.overview}
        </div>
        <div className="buttons">
          <button className="button play">
            <BsPlayFill /> Play
          </button>
          <button className="button more">
            <AiFillInfoCircle className="icon" /> More Info
          </button>
        </div>
      </div>
      {/* <div className="fade">hy</div> */}
      <RowPost title="Netflix Originals" urls={Originals} />
    </div>
  );
};

export default Main;
  