const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 7000

app.get('/', (req, res) => {
res.send('Servidor On')
})

var FeedbackRoute = require('./FeedbackRoute');
app.use('/', FeedbackRoute);

var PessoaRoute = require('./PessoaRoute');
app.use('/', PessoaRoute);

var SetorRoute = require('./SetorRoute');
app.use('/', SetorRoute);

app.listen(port, () => {
    console.log('Exemplo do node sendo executado http://localhost:${port}')
})