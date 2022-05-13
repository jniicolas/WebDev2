var express = require('express');
var router = express.Router();
 
router.get('/users', function(req, res) {
    res.send(`Nome:`);
});
 
router.post('/user', function(req, res) {
    res.send(`E-mail:`);
});
 
router.put('/user/:id', function(req, res) {
    res.send(`Setor: ${req.params.id}`);
});
 
module.exports = router;