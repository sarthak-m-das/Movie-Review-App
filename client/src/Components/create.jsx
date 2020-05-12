import React from "react";
import MovieForm from "./MovieForm";
import {createMovie} from "../api/apis"

export default function create(){
    return (
        <div>
            <h1>Create</h1>
            <MovieForm onSubmit={(movie)=>{
                console.log(movie);
                createMovie(movie).then(result=>{
                    console.log(result);
                })
                window.location.href="/movie_list";
            }}/>
        </div>
    )
}