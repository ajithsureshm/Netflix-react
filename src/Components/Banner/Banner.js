
import React, { useEffect, useState } from 'react'
import { ApiKey, ImageUrl } from '../constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {

  const [movie, setMovie] = useState()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${ApiKey}&language=en-US`)
      .then((Response) => {
        console.log(Response.data.results);
        setMovie(Response.data.results)

        setMovie((m)=>
          m[Math.floor(Math.random()*m.length)]
        )

        console.log(setMovie);

      })
  }, [])

  return (

    <div style={{ backgroundImage: `url(${movie ? ImageUrl+movie.backdrop_path : ""})` }}
       className="banner">
        <div className="content">
          <h1 className="title">{movie ? movie.name : ""}</h1>
          <h1 className="title">{movie ? movie.title : ""}</h1>


          <div className="buttons">

            <button className="button">play</button>
            <button className="button">my list</button>

          </div>

          <h2 className="description">{movie ? movie.overview : ""}</h2>
        </div>

        <div className="fade"></div>
    </div>)
}

export default Banner