import React from 'react'
import { useState, useEffect} from 'react'
import instance from './Instance'
//import request from './Request'
import './Row.css'
const base_url="https://image.tmdb.org/t/p/original/" 
function Row({title,fetchUrl,isLarge}) {
    const[movies,setMovies] = useState([])
    useEffect(() => {
      async function fetchData(){
        const request = await instance.get(fetchUrl) 
        setMovies(request.data.results)
      } 
      fetchData()
    }, [fetchUrl])
    
   //console.log("numma datas", movies);
    
  return (
    <div className='row'>
      <h2>{title}</h2>
        <div className='movie_posters'>
          {movies.map(movie=>(
            <img className={`movie_poster ${isLarge && "movie_poster_large"}`}
            src={`${base_url}${isLarge?movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
            key={movie.id}/>
          ))}
        </div>
    </div>
  )
}

export default Row