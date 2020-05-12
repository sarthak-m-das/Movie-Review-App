import React from "react";

export default class MovieForm extends React.Component{
    constructor(props){
        super(props)
        this.handleName=this.handleName.bind(this)
        this.handleRating=this.handleRating.bind(this)
        this.handleNote=this.handleNote.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        console.log(this.props.data);
        this.state={
            error:"",
            name: this.props.data ? this.props.data.name:"",
            rating: this.props.data ? this.props.data.rating:undefined,
            note: this.props.data ? this.props.data.note:""
        }
    }

    handleName=(e)=>{
        e.preventDefault();
        const name = e.target.value;
        this.setState({
            name:name
        })
    }

    handleRating=(e)=>{
        const rating = e.target.value;
        this.setState({
            rating:rating
        })
    }

    handleNote=(e)=>{
        const note = e.target.value;
        this.setState({
            note:note
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.note || !this.state.rating || !this.state.name)
        {
            this.setState({
                error:"error"
            })
        }
        else
        {
            this.props.onSubmit({
                name:this.state.name,
                rating:this.state.rating,
                note:this.state.note
            })
        }
    }

    render(){
        return (
            <div>
                {this.state.error === "error" ? "Please Enter all the Requirements" : undefined}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} placeholder="Movie Name" onChange={this.handleName} />
                    <input type="number" min="1" mac='10' value={this.state.rating} placeholder="Movie Rating" onChange={this.handleRating} />
                    <input type="text" value={this.state.note} placeholder="Movie Note" onChange={this.handleNote} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
} 