const express = require( 'express' );
const app     = express();
const port    = process.env.PORT || 3000;
var d= new Date()
var hours=d.getHours()
var minutes=d.getMinutes()
var seconds=d.getSeconds()
app.get( '/' ,(req, res) => {
res.type( 'text/plain' );
res.send( 'ok' );
})
app.get( '/about', ( req, res ) => {
res.type( 'text/plain' );
res.send( 'about');
})
// app.use( ( req, res ) => {
// res.type( 'text/plain' )
// res.status( 404 )
// res.send('404 Not found ')});
app.listen( port ,() => console.log(` is on Port ${ port } Ctrl + C to Stop `) )
app.get('/test', (req, res) =>{
    res.type('text/plain');
    res.status(200);
    res.send({status:200,message:'ok'});
})
app.get('/time', (req, res) =>{
    res.type('text/plain');
    res.send({status:200,message:`${hours}:${minutes}:${seconds}`});
});
app.get(["/hello","/hello/:id"],(req,res)=>{
    res.send({status:200, message:`Hello, ${req.params.id || "Unknwon"}`})
})
app.get("/search",(req,res)=>{
    console.log(req.query.s)
    if(typeof req.query.s =="undefined" || req.query.s === "") 
    {res.send({status:500, error:true, message:"you have to provide a search"})
    }else {
        res.send( {status:200, message:"ok", data:req.query.s})
    }
})
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]
app.get("/movies/create",(req,res)=>{
    res.send({status:200, message:"create a movie"})
})
app.get("/movies/read",(req,res)=>{
    res.send({status:200,data:movies })
})
app.get("/movies/update",(req,res)=>{
    res.send({status:200, message:"update a movie"})
})
app.get("/movies/delete",(req,res)=>{
    res.send({status:200, message:"delete a movie"})
})


app.get("/movies/read/by-date",(req,res)=>{
    res.send({status:200,data:movies})
})
app.get("/movies/read/by-date", (req, res) => {
    const sortedMovies = movies.sort((a, b) => a.year - b.year);
    res.send({
      status: 200,
      message: "this list of movies Sorted By Date",
      data: sortedMovies,
    });
  });
  app.get("/movies/read/by-rating", (req, res) => {
    const sortedMoviesByRate = movies.sort((a, b) => a.rating - b.rating);
    res.send({
      status: 200,
      message: "this list of movies Sorted By Rate",
      data: sortedMoviesByRate,
    });
  });
  app.get("/movies/read/by-title", (req, res) => {
    const sortedMoviesByTitle = movies.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    res.send({
      status: 200,
      message: "this list of movies Sorted By Rate",
      data: sortedMoviesByTitle,
    });
  });


  app.get("/movies/read/id/:id", (req, res) => {
    const i = parseInt(req.params.id);
    if (i <= movies.length)  {
        res.status(200).json({ status: 200, message: "OK", data: movies[i] });
      } else {
        res.status(404).json({
            status: 404,
            error: true,
            message: `the movie ${i} does not exist`,
          });
      }
    }
    );