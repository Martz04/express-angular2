var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

//app.set('json spaces', 40);
app.use(express.static(path.join(__dirname, 'client'))); //  "public" off of current is root

app.get("/", (req, resp) =>{
  resp.sendFile("/index.html");
});
app.get('/hi', function(req, res) {
  res.json({"foo" : "bar"});
});
app.listen(8080);
console.log('listening on port 8080...')
