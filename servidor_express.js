const express = require('express')
const app = express();
const port=7000;

app.get('/',(req,res)=>{
    res.send('Hola mundo!');
})
app.get('/usuarios',(req,res)=>{
    res.send('Lista de usuarios')
})
app.listen(port,()=>{
    console.log('servidor express corriendo en el '+port);
})