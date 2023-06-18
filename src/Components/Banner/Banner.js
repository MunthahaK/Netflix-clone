import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../axios'
import requests from '../../requests'


function Banner() {

  const [movie,setMovie]=useState([])
   useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requests.actionMovies)
      setMovie(request.data.results[
       Math.floor(Math.random() * request.data.results.length-1)
      ])
      return request
    }
    fetchData()
   },[])
  
  
  
  return (
    <div className="banner"
      style={{
        backgroundSize : "cover",
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
      }}>
     
     <div className='banner_contents'>
       <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
       <div className='banner_buttons'>
         <button className='banner_button'>Play</button>
         <button className='banner_button'>My List</button>
       </div>
       <h1 className='banner_description'>{movie?.overview}</h1>
     </div>
     <div className='banner_fadeBottom'></div>
    </div>
  )
}

export default Banner
