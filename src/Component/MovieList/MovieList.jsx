import React, { useState } from 'react'
import Filterl from '../Filter/Filterl'
import MovieCart from '../MovieCart/MovieCart'
import style from "./movie.module.css"

const MovieList = ({ movie, filterList }) => {


    return (

        <div >


            <div className={style.MovieList}>

                {movie.filter(car => (car.title.toLowerCase().includes(filterList.toLowerCase())))

                    .map((car, i) =>
                        <MovieCart car={car} key={i} />

                    )}


            </div>
        </div>
    )
}

export default MovieList