import React from 'react'
import { useEffect } from 'react'
import {API_KEY,imageUrl} from '../constants/constants'


import './banner.css'
import axios from '../axios'
import { useState } from 'react'

function Banner() {
  const [movie , setMovie] = useState()
 
  useEffect(()=>{
      
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

    console.log(response.data.results[6])

    setMovie(response.data.results[6])
    })

  },[])
  return (
   
    <div  style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
       <div className="content">
        <h1 className='title' > {movie ? movie.title : ""}</h1>
        <div className="banner_button">
            <button className='button' >Play</button>
            <button className='button' >Mylist </button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>

       </div>
       <div className="fade"></div>
    </div>
  )
}

export default Banner