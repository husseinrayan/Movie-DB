const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 3000;
app.get( '/' ,(req, res) => {
res.type( 'text/plain' )
res.send( 'ok' )
})
app.get( '/about', ( req, res ) => {
res.type( 'text/plain' )
res.send( 'about')
})
app.use( ( req, res ) => {
res.type( 'text/plain' )
res.status( 404 )
res.send('404 Not found ')});
app.listen( port ,() => console.log(` is on Port ${ port } Ctrl + C to Stop `) )