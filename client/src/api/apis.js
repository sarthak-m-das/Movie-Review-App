import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/api"
})

export const createMovie = (movie)=> api.post("/movie",movie);
export const updateMovie = (id,movie)=> api.put(`/movie/${id}`,movie);
export const deleteMovie = (id)=> api.delete(`/movie/${id}`);
export const getMovieById = (id)=> api.get(`/movie/${id}`);
export const getMovies = ()=> api.get("/movies");


