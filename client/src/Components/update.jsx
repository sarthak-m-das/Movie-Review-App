import React from "react"
import MovieForm from "./MovieForm"
import {updateMovie,getMovieById} from "../api/apis"

export default class update extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            id:this.props.match.params.id,
            name:"",
            rating:"",
            note:""
        }
    }
    componentWillMount=async()=>{
        const movie = await getMovieById(this.props.match.params.id)
        this.setState({
            name: movie.data.movie.name,
            rating: movie.data.movie.rating,
            note: movie.data.movie.note,
        })
    }

    render(){
        return (
            <div>
                <h2>Update the movie</h2>
                <MovieForm data={this.state} onSubmit={(movie)=>{
                    console.log(movie);
                    console.log(this.props.match.params.id);
                    updateMovie(this.props.match.params.id,movie)
                    window.location.href="/movie_list";
                }} />
            </div>
        )
    }
}