import React from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav,FormControl,Form,Button} from 'react-bootstrap';
import "../css/navbar.css"

export default function NavBar(){
    return (
        <Navbar className="navbar navbar-dark bg-dark" expand="lg">
        <Navbar.Brand href="/home"><i class="fa fa-hand-spock-o" aria-hidden="true"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavLink to="/home" className="nav">Home</NavLink>
            <NavLink to="/movie_list" className="nav">Movies List</NavLink>
            <NavLink to="/create_movie" className="nav">Rate Movie</NavLink>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}