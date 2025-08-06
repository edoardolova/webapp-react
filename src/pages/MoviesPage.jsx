import { useContext, useEffect, useState } from "react";

import MoviesCard from "../components/MoviesCard";
import {MovieContext} from '../context/MovieContext'
export default function MoviesPage(){
    const {movies} = useContext(MovieContext)


    return(
        <>
            <section className="container mb-5">
                <h2 className="py-4">Film in evidenza</h2>
                <div className="row gy-4">
                    <MoviesCard movies={movies}/>
                </div>
            </section>
        </>
    )
}
