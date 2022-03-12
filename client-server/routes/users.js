var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

// Creates a JSON client
//Vai fazer essa declaração de onde esta nosso serviço
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  //Fazer um solicitação get para uma rota da restful
  client.get('/users', function(err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  //Fazer um solicitação get para uma rota da restful
  client.get(`/users/${req.params.id}`, function(err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });
});

/* GET users listing. */
router.put('/:id', function(req, res, next) {
  //Fazer um solicitação get para uma rota da restful
  client.put(`/users/${req.params.id}`, req.body, function (err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });
});

/* GET users listing. */
router.delete('/:id', function(req, res, next) {
  //Fazer um solicitação get para uma rota da restful
  client.del(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  //Fazer um solicitação get para uma rota da restful
  client.post(`/users`, req.body, function (err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });
});

module.exports = router;
