import React from "react";
import {Switch,BrowserRouter, Route} from "react-router-dom";
import home from "../Components/home"
import list from "../Components/list"
import NavBar from "../Components/Navbar"
import create from "../Components/create"
import update from "../Components/update"
// import nav from "../Components/nav"

export default function  Router(){
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/movie_list" component={list}  />
                    <Route path="/home" component={home}/>
                    <Route path="/create_movie" component={create}/>
                    <Route path="/update/:id" component={update} />
                </Switch>   
            </div>
        </BrowserRouter>    
    )
} 