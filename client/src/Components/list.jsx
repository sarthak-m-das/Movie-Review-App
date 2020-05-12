import React from "react";
import {getMovies, deleteMovie} from "../api/apis"
import Cards from "./card"
import { CardDeck } from "react-bootstrap";
import "../css/app.css"

class list extends React.Component{
    constructor(props){
        super(props);
        this.state={
        movies:[]
        }
      }
      
      componentDidMount = ()=>{
         getMovies().then(movie =>{
          this.setState((prevState)=>({
            movies: prevState.movies.concat(movie.data.Movies)
          }))
        })
      } 
    
      handleUpdate=(e)=>{
        e.preventDefault()
        const id = e.target.id;
        window.location.href = `/update/${id}`;
      }

      handleDelete=(e)=>{
        e.preventDefault()
        const id = e.target.id;
        deleteMovie(id).then(result=>{
          window.location.reload();
        })
      }

      render(){
        return (
        <div>
          <CardDeck className="cardGroup">
          {this.state.movies.map((movie)=><Cards key={movie._id} movie={movie} update={this.handleUpdate} delete={this.handleDelete} />)}
          </CardDeck>
        </div>
        )};
}

export default list;