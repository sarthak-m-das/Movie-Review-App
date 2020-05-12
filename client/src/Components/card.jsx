import React from "react"
import {Card,Button,ButtonGroup} from "react-bootstrap"
import "../css/app.css"

export default function Cards(props){
    return (
        <div>
            <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.movie.name}</Card.Title>
                <Card.Text>
                {props.movie.note}
                </Card.Text>
                <Card.Text>
                <b>Rating : </b>{props.movie.rating}
                </Card.Text>
                <ButtonGroup>
                    <Button variant="primary" id={props.movie._id} onClick={props.update}>Update</Button>
                    <Button variant="primary" id={props.movie._id} onClick={props.delete}>Delete</Button>
                    </ButtonGroup>
            </Card.Body>
            </Card>
        </div>
    )
}

