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