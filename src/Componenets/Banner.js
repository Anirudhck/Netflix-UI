import React,{useState,useEffect} from 'react'
import instance from './Instance'
import request from './Request'
import './Banner.css'

function Banner() {
    const[banner,setBanner]=useState([])
    useEffect(() => {
        async function fetchData(){
            const result = await instance.get(request.fetchNetflixOriginals) 
            setBanner(result.data.results[
                Math.floor(Math.random() * result.data.results.length-1)
            ])
        }
        fetchData()
    }, [])
         //console.log("our banner is:", banner);
  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+".......":str
  }  
  return (
    <header className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url(
            "https://image.tmdb.org/t/p/original/${banner.backdrop_path}")`,
        backgroundPosition:"center center"
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {banner.title || banner.name || banner.orginal_name} 
            </h1>
            <div className='banner_description'>
               <p>{truncate(banner.overview,100)}</p> 
               <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>More Info </button>
               </div>
               
            </div>
            
        </div>
        <div className='banner-fade'> </div>
        
    </header>
  )
}

export default Banner