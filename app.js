var express = require('express')
const req = require('express/lib/request')

var app = express()

app.get('/', function(req, res){
    res.send('Hello from express SON')
})


app.get('/hello/:name', function(req, res){
    res.json({
        message: 'This is my param ' + req.params.name
    })
})

app.get('/hello', function(req, res){
    res.json({
        message: 'This is my router hello'
    })
})

app.listen(3000, function () {
  console.log('express has been started')  
})