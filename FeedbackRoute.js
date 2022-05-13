var express = require('express');
var router = express.Router();
 
router.get('/users', function(req, res) {
    res.send(`Título do usuário`);
});
 
router.post('/user', function(req, res) {
    res.send(`Nível do usuário`);
});
 
router.put('/user/:id', function(req, res) {
    res.send(`Texto do usuário ${req.params.id}`);
});
 
router.delete('/user/:id', function(req, res) {
    res.send(`Usuário Avaliado ${req.params.id}`);
});
module.exports = router;