var express = require('express');
var router = express.Router();
 
router.get('/users', function(req, res) {
    res.send(`Setor:`);
});
 
router.post('/user', function(req, res) {
    res.send(`Descrição:`);
});
 
module.exports = router;