import { useEffect } from 'react';
import './App.css';
import Api from "./Api"
import { API_KEY,TopRated,Trending,HorrorMovies,ComedyMovies, ActionMovies,RomanceMovies,Documentaries } from './Constants';
import Header from './components/Header/Header';
import RowPost from './components/RowPost/RowPost';
import Main from './components/main/Main';
import {getApiConfiguration}from "./store/mainSlice"
import {useDispatch,useSelector}from "react-redux"
function App() {
  const dispatch=useDispatch()
  const {url}=useSelector((state)=>state.home)
  useEffect(()=>{
    Api.get(`configuration?api_key=${API_KEY}`).then((res)=>{
      
      const url={
        backdrop:res.data.images.secure_base_url+"original",
        poster: res.data.images.secure_base_url + "original",
        profile: res.data.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url))
      // console.log(url);
    })
  },[])
  return (
    <div className="bg-black text-white scrollbar-hide">
     <Header/>
     <Main/>
     <RowPost isSmall title="Top Rated Movies" urls={TopRated} />
     <RowPost isSmall title="Trending" urls={Trending}/>
     <RowPost isSmall title="Action Movies" urls={ActionMovies} />
     <RowPost isSmall title="Romantic Movies" urls={RomanceMovies} />
     <RowPost isSmall title="Documentaries" urls={Documentaries} />
     <RowPost isSmall title="Horror Movies" urls={HorrorMovies} />
     <RowPost isSmall title="Comedy Movies" urls={ComedyMovies} />
    </div>
  ); 
}

export default App;