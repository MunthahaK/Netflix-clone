import React, {useEffect,useState} from 'react'
import './Rowpost.css'
import axios from '../axios'
import Youtube from 'react-youtube'
import { API_KEY } from '../../constants/constants'


   const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  function Rowpost({title,fetchUrl,isLargeRow}) {

   const [movies,setMovies]=useState([])
   const [trailerUrl,setTrailerUrl] = useState("")
 
   useEffect(()=>{
     async function fetchData(){
       const request = await axios.get(fetchUrl);
       setMovies(request.data.results)
       return request
     }
      fetchData()
   },[fetchUrl])

   const opts = {
    height : "390",
    width : "100%",
    playerVars : { autoplay : 1, },
   }
   
   const movieTrailer =(id)=>{
    if(trailerUrl){
      setTrailerUrl("")
    }else{
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
      if(response.data.results.length!==0){
        setTrailerUrl(response.data.results[1])
      }else{
        alert("Not Available")
      }  
    })}
   } 

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
        <div className="row_posters">
           {
             movies.map((movie)=>(
               <img onClick={()=>movieTrailer(movie.id)} key={movie.id}
               className={`${isLargeRow ? "row_posterLarge" : "row_poster"}`}
               src={`${imageBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name} />
             ))
           }
        </div> 
        {trailerUrl && <Youtube videoId={trailerUrl.key} opts={opts}/>}
    </div>
  )
}
export default Rowpost
