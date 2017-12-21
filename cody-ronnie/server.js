'use strict';

var express = require('express');
var app = express();

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'))

// The files are in a public directory because we're giving the public access to it. Express JS is using these files direct the user to the file being searched for in the public directory. This express file only looks in the public directory.

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  
  
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.get('/new', (request, response) => {
  response.sendFile('/new.html', {root: './public'})
})  

app.use((request, response) => response.status(404).sendFile('404.html', { root: './public'}))

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT)
})