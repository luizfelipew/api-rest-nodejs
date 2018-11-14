var express = require('express'),
    bodyParser = require('body-parser'),
    mongodb = require('mongodb')


var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = 8080

app.listen(port)

var db = new mongodb.Db(
    'instagram',
    new mongo.Server('localhost', 27017, {}),
    {}
)

console.log('Servidor http está escutando na porta ' + port)

app.get('/', function(req, res){

    var resposta = ({ msg: 'Olá'})
    res.send(resposta)

})

app.post('/api', function(req, res){

    var dados = req.body

    res.send(dados)
})