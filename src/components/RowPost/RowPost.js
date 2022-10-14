import React from 'react'
import { useEffect } from 'react'
import './RowPost.css'
import axios from 'axios'
import {API_KEY, imageUrl} from '../constants/constants'
import { useState } from 'react'
import YouTube from 'react-youtube';


function RowPost(props) {
    const [movie , setMovie] = useState([])
    const [urlId , seturlId] = useState('')
    useEffect(()=>{

        axios.get(props.url).then((response)=>{
    
        setMovie(response.data.results)
           
        

        }).catch(err=>{

            console.log(err)
        })

    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
      
          autoplay: 0,
        },
      };

      const handleMovie=(id)=>{

        console.log(id)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
         
        
        console.log(response.data)
        if(response.data.results.length!==0){
            seturlId(response.data.results[0])
        }else{
            console.log("trailer not available")
        }

        })
        
      }

    return (

       
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movie.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)}

                     className={props.isSmall ? 'smallPoster' : 'poster' } src={`${imageUrl+obj.backdrop_path }`}></img>
                     
               ) }
                
            </div>
           { urlId && <YouTube videoId={urlId.key} opts={opts}  />}

        </div>  
    )
}
     
export default RowPost  