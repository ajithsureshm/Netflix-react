
import './Rowpost.css'
import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import {  ImageUrl,ApiKey } from '../constants/constants'
import YouTube from "react-youtube";



function Rowpost(props) {

  const [movies, setmovies] = useState([])
  const [UrlId, setUrlId] = useState('')

  useEffect(() => {
    
    axios.get(props.url)
    .then((response)=>{
       console.log(response.data);
      setmovies(response.data.results)


      console.log(setmovies);

    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieTrailler=(id)=>{
          console.log(id);
          axios.get(`/movie/${id}/videos?api_key=${ApiKey}&language=en-US`)
          .then(response=>{
            console.log(response.data);

            if (response.data.results.length!==0) {
              setUrlId(response.data.results[0])

            }else{
              console.log("array empty");
            }
          })
  }

  
  return (
    <div className="row">
        <h2>{props.title}</h2>
         <div className="poster">

        

           {
             movies.map((movie)=>


          //    <h1 className="titles">{movies ? movies.original_title : ""}</h1>
          // <h1 className="titles">{movies ? movies.original_name : ""}</h1>
             
            //  <p > {`${movie.original_name}`}</p>
            
             <img onClick={()=>handleMovieTrailler(movie.id)} className= {props.isSmall?'smallpost': "img"}  src={`${ImageUrl+movie.backdrop_path}` } alt="posters" />
             

             )
           }
         
         </div>

        { UrlId && <YouTube opts={opts} videoId={UrlId.key}/>}   
 </div>
  )
}

export default Rowpost