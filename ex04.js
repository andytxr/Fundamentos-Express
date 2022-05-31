const express = require('express');
const server = express();

server.routes('/clientes').get((req,res)=> {

    res.send('Lista de Clientes');

}).post((req,res)=>{

    res.send('Novo cliente');

}).put((req,res)=>{

    res.send('Altera cliente');

}).delete((req, res)=>{

    res.send('Deleta cliente');

})

server.listen(3002, () => console.log("online"));