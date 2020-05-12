const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose= require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/MoviesDB', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected with the db!");
});


var movieSchema = new mongoose.Schema({
    name: {type:String,required:true},
    rating: {type:Number,required:true},
    note: {type:String,required:true},
},{ timestamps: true },
);

var Movies = mongoose.model('Movies', movieSchema);


//create Movie
app.post("/api/movie",function(req,res){
    const body=req.body;
    console.log(body);

    if(!body){
        return res.status(400).json({
            success:"failure",
            error:"You Must provide a movie."
        })
    }

    const movie = new Movies(body);
    console.log(movie)
    if(!movie){
        return res.status(400).json({
            success:"failed",
            error:err
        })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
})

//Update Movie
app.put("/api/movie/:id",function(req,res){
    if(!req.body){
        return res.status(400).json({
            message:"body is required",
        })
    }

    Movies.updateOne({_id : req.params.id},req.body,function(err){
        if(err){
            return res.status(400).json({
                err,
                message : "There is some error!"
            })
        }
        else{
            return res.status(200).json({
                success:"successful",
                message : "Successfully updated!"
            })
        }
    })
})

//delete Movie
app.delete("/api/movie/:id",function(req,res){
    Movies.findOneAndDelete({_id: req.params.id},function(err){
        if(err){
            return res.status(400).json({
                err,
                message:"Couldn't Delete",
            })
        }
        else{
            return res.status(200).json({
                message:"Successful!!"
            })
        }
    })

})

//getMovieById
app.get("/api/movie/:id",function(req,res){
    Movies.findOne({_id:req.params.id},function(err,movie){
        if(err){
            return res.status(400).json({
                err,
                message:"There wsa some error!!"
            })
        }
        if(!movie){
            return res.status(400).json({
                success:false,
                message:"Movie was not found"
            })
        }
        return res.status(200).json({
            success:true,
            movie:movie
        })
    })
})

//getMovies
app.get("/api/movies",function(req,res){
    Movies.find({},function(err,doc){
        if(err){
            return res.status(400).json({
                success:false,
                message:"Something went wrong!!"
            })
        }
        if(!doc){
            return res.status(400).json({
                success:false,
                message:"No Movies!!"
            })
        }
        return res.status(200).json({
            success:true,
            Movies:doc
        })
    })
})


//hosting the server
app.listen("3000",function(){
    console.log("The server is running on port 3000");
})